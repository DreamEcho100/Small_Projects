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
		this.muteBtns = document.querySelectorAll(".mute");
		this.tempoSlider = document.querySelector(".tempo-slider");
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
	mute(e) {
		const muteIdx = e.target.getAttribute("data-track");
		e.target.classList.toggle("active");
		if (e.target.classList.contains("active")) {
			this.loudOrMute(muteIdx, 0);
		} else {
			this.loudOrMute(muteIdx, 1);
		}
	}
	loudOrMute(idx, value) {
		switch (idx) {
			case "0":
				this.kickAudio.volume = value;
				break;
			case "1":
				this.snareAudio.volume = value;
				break;
			case "2":
				this.hihatAudio.volume = value;
				break;
		}
	}
	changeTempo(e, obj) {
		const tempoTxt = document.querySelector(".tempo-num");
		obj.bpm = e.target.value;
		tempoTxt.innerText = e.target.value;
	}
	updateTempo(e, obj) {
		clearInterval(obj.isPlaying);
		obj.bpm = e.target.value;
		obj.isPlaying = null;
		const playBtn = document.querySelector(".play");
		if (playBtn.classList.contains("active")) {
			obj.start();
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
	});
} );


drumKit.muteBtns.forEach( btn => {
	btn.addEventListener("click", function(e) {
		drumKit.mute(e);
	});
} );
/*
drumKit.tempoSlider.addEventListener("input", function(e) {
	drumKit.changeTempo(e);
})*/
[{func: drumKit.changeTempo, event: "input"}, {func: drumKit.updateTempo, event: "change"}].forEach( item => {
	drumKit.tempoSlider.addEventListener( item.event, function(e) {
		item.func(e, drumKit);
	} );
} );