import { KeyInfo } from "../types";

export const keyList: ReadonlyArray<KeyInfo> = [
    {
        id: 65,
        key: "A",
        instrument: "clap",
        source: new Audio("assets/sounds/clap.wav")
    },
    {
        id: 83,
        key: "S",
        instrument: "hihat",
        source: new Audio("assets/sounds/hihat.wav")
    },
    {
        id: 68,
        key: "D",
        instrument: "kick",
        source: new Audio("assets/sounds/kick.wav")
    },
    {
        id: 70,
        key: "F",
        instrument: "openhat",
        source: new Audio("assets/sounds/openhat.wav")
    },
    {
        id: 71,
        key: "G",
        instrument: "boom",
        source: new Audio("assets/sounds/boom.wav")
    },
    {
        id: 72,
        key: "H",
        instrument: "ride",
        source: new Audio("assets/sounds/ride.wav")
    },
    {
        id: 74,
        key: "J",
        instrument: "snare",
        source: new Audio("assets/sounds/snare.wav")
    },
    {
        id: 75,
        key: "K",
        instrument: "tom",
        source: new Audio("assets/sounds/tom.wav")
    },
    {
        id: 76,
        key: "L",
        instrument: "tink",
        source: new Audio("assets/sounds/tink.wav")
    }
]