class DrumKit {
	constructor() {
		this.pads = document.querySelectorAll(".pad");
		this.playBtn = document.querySelector(".play");
		this.currentKick = "./sounds/kick-808.wav";
		this.currentSnare = "./sounds/snare-808.wav";
		this.currentHihat = "./sounds/hihat-808.wav";
		this.kickAudio = document.querySelector(".kick-sound");
		this.snareAudio = document.querySelector(".snare-sound");
		this.hihatAudio = document.querySelector(".hihat-sound");
		this.index = 0;
		this.bpm = 150;
		this.isPlaying = null;
		this.selects = document.querySelectorAll("select");
	}
	activePad() {
		console.log(this);
		this.classList.toggle("active");
	}
	repeat() {
		let step = this.index % 8;
		const activeBars = document.querySelectorAll(`.b${step}`);
		activeBars.forEach( bar => {
			bar.style.animation = `playTrack 0.3s alternate ease-in-out 2.15`;
			if (bar.classList.contains("active")) {
				if (bar.classList.contains("kick-pad")) {
					this.kickAudio.currentTime = 0;
					this.kickAudio.play();
				} else if (bar.classList.contains("snare-pad")) {
					this.snareAudio.currentTime = 0;
					this.snareAudio.play();
				} else if (bar.classList.contains("hihat-pad")) {
					this.hihatAudio.currentTime = 0;
					this.hihatAudio.play();
				}
			}
		} );
		this.index++;
	}
	start() {
		const intrval = (60 / this.bpm) * 1000;
		if (this.isPlaying) {
			clearInterval(this.isPlaying);
			this.isPlaying = null;
			this.index = 0;
		} else {
			this.isPlaying = setInterval( () => {
				this.repeat();
			}, intrval );
		}		
	}
	updateBtn() {
		if (this.isPlaying) {
			this.playBtn.innerText = "Play";
			this.playBtn.classList.remove("active");
		} else {
			this.playBtn.innerText = "Stop";
			this.playBtn.classList.add("active");
		}
	}
	changeSound(e) {
		const selectionName = e.target.name;
		const selectionValue = e.target.value;
		switch (selectionName) {
			case "kick-select":
				this.kickAudio.src = selectionValue;
				break;
			case "snare-select":
				this.snareAudio.src = selectionValue;
				break;
			case "hihat-select":
				this.hihatAudio.src = selectionValue;
				break;
		}
	}
}

const drumKit = new DrumKit();

drumKit.pads.forEach( pad => {
	pad.addEventListener("click", drumKit.activePad);
	pad.addEventListener("animationend", function() {
		this.style.animation = "";
	})
} );

drumKit.playBtn.addEventListener("click", function() {
	drumKit.updateBtn();
	drumKit.start();
});


drumKit.selects.forEach( select => {
	select.addEventListener("change", function(e) {
		drumKit.changeSound(e);
	})
} );
