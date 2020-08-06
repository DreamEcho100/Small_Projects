class DrumKit {
	constructor() {
		this.tracks = [{name:"clap", "data-track": 0},
						{name:"cowbell", "data-track": 1},
						{name:"crash", "data-track": 2},
						{name:"hihat", "data-track": 3},
						{name:"kick", "data-track": 4},
						{name:"snare", "data-track": 5}];
		this.init();
		/*
		this.currentClap = "./sounds/clap-808.wav";
		this.currentcowbell = "./sounds/cowbell-808.wav";
		this.currentcrash = "./sounds/crash-808.wav";
		this.currentHihat = "./sounds/hihat-808.wav";
		this.currentKick = "./sounds/kick-808.wav";
		this.currentSnare = "./sounds/snare-808.wav";
		this.clapAudio = document.querySelector(".clap-sound");
		this.cowbellAudio = document.querySelector(".cowbell-sound");
		this.crashAudio = document.querySelector(".crash-sound");
		this.hihatAudio = document.querySelector(".hihat-sound");
		this.kickAudio = document.querySelector(".kick-sound");
		this.snareAudio = document.querySelector(".snare-sound");
		*/
		this.pads = document.querySelectorAll(".pad");
		this.playBtn = document.querySelector(".play");
		this.index = 0;
		this.bpm = 150;
		this.isPlaying = null;
		this.selects = document.querySelectorAll("select");
		this.muteBtns = document.querySelectorAll(".mute");
		this.tempoSlider = document.querySelector(".tempo-slider");
	}
	init() {
		this.tracks.forEach( (track, idx) => {
			const currentTrack = `current${track.name.slice(0, 1).toUpperCase() + track.name.slice(1)}`;
			const trackAudio = `${track.name}Audio`;
			this[currentTrack] = `./sounds/${track.name}-808.wav`;
			this[trackAudio] = document.querySelector(`.${track.name}-sound`);

			let temp = document.querySelector(`.${track.name}-track .controls button`);
			temp.setAttribute("data-track", idx);
		} )
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
				if (bar.classList.contains("clap-pad")) {
					this.clapAudio.currentTime = 0;
					this.clapAudio.play();
				} else if (bar.classList.contains("cowbell-pad")) {
					this.cowbellAudio.currentTime = 0;
					this.cowbellAudio.play();
				} else if (bar.classList.contains("crash-pad")) {
					this.crashAudio.currentTime = 0;
					this.crashAudio.play();
				} else if (bar.classList.contains("hihat-pad")) {
					this.hihatAudio.currentTime = 0;
					this.hihatAudio.play();
				} else if (bar.classList.contains("kick-pad")) {
					this.kickAudio.currentTime = 0;
					this.kickAudio.play();
				} else if (bar.classList.contains("snare-pad")) {
					this.snareAudio.currentTime = 0;
					this.snareAudio.play();
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

		const targetAudio = selectionName.replace(/-.+/ig, "");

		this[`${targetAudio}Audio`].src = selectionValue;
		/*
		switch (selectionName) {
			case "clap-select":
				this.clapAudio.src = selectionValue;
				break;
			case "cowbell-select":
				this.cowbellAudio.src = selectionValue;
				break;
			case "crash-select":
				this.crashAudio.src = selectionValue;
				break;
			case "hihat-select":
				this.hihatAudio.src = selectionValue;
				break;
			case "kick-select":
				this.kickAudio.src = selectionValue;
				break;
			case "snare-select":
				this.snareAudio.src = selectionValue;
				break;
		}
		*/
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
				this.clapAudio.volume = value;
				break;
			case "1":
				this.cowbellAudio.volume = value;
				break;
			case "2":
				this.crashAudio.volume = value;
				break;
			case "3":
				this.hihatAudio.volume = value;
				break;
			case "4":
				this.kickAudio.volume = value;
				break;
			case "5":
				this.snareAudio.volume = value;
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
document.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		drumKit.updateBtn();
		drumKit.start();
	}
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