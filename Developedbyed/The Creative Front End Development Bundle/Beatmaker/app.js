class DrumKit {
	constructor() {
		this.pads = document.querySelectorAll(".pad");
		this.playBtn = document.querySelector(".play");
		this.kickAudio = document.querySelector(".kick-sound");
		this.snareAudio = document.querySelector(".snare-sound");
		this.hihatAudio = document.querySelector(".hihat-sound");
		this.index = 0;
		this.bpm = 150;
		this.isPlaying = null;
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
		if (!this.isPlaying) {
			this.isPlaying = setInterval( () => {
				this.repeat();
			}, intrval );
		} else {
			clearInterval(this.isPlaying);
			this.isPlaying = null;
			this.index = 0;
		}		
	}
	updateBtn() {
		if (!this.isPlaying) {
			this.playBtn.innerText = "Stop";
			this.playBtn.classList.add("active");
		} else {
			this.playBtn.innerText = "Play";
			this.playBtn.classList.remove("active");
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
