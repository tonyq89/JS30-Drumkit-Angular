import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { KeyInfo } from "../types/types";

@Component({
    selector: "drum-keys",
    templateUrl: "./drum-keys.component.html",
    styleUrls: ["./drum-keys.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keydown)': 'handleKeyDown($event)',
        '(document:transitionend)': 'handleTransitionEnd($event)'
      }
})

export class DrumKeys {
    @Input() keyList: ReadonlyArray<KeyInfo>;

    handleKeyDown(e: KeyboardEvent): void {
        const key = this.keyList.find(k => k.id === e.keyCode);
        key === undefined
         ? void 0
         : this.playSound(key);
    }

    playSound(k: KeyInfo): void {
        const key = document.querySelector(`div[data-key="${k.id}"]`);
        key.classList.add('playing');

        k.source.currentTime = 0;
        k.source.play();
    }

    handleTransitionEnd(e: TransitionEvent): void {
        const allKeys = document.querySelectorAll(".key");
        allKeys.forEach(k => k.classList.remove("playing"));
    }
}