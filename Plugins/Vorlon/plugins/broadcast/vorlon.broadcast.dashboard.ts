/// <reference path="../../vorlon.dashboardPlugin.ts" />

module VORLON {
    export class BroadcastGroup {
    }

    export class BroadcastSampleDashboard extends DashboardPlugin {

        //Do any setup you need, call super to configure
        //the plugin with html and css for the dashboard
        constructor() {
            //     name   ,  html for dash   css for dash
            super("broadcast", "control.html", "control.css");
            this._ready = true;
            console.log('Started');
        }

        //Return unique id for your plugin
        public getID(): string {
            return "BROADCAST";
        }

        // This code will run on the dashboard //////////////////////

        _groups = new Array<BroadcastGroup>();

        // Start dashboard code
        // uses _insertHtmlContentAsync to insert the control.html content
        // into the dashboard
        private _inputField: HTMLInputElement;
        private _outputDiv: HTMLElement;

        public startDashboardSide(div: HTMLDivElement = null): void {
            this._insertHtmlContentAsync(div, (filledDiv) => {
                this._inputField = <HTMLInputElement>filledDiv.querySelector('#echoInput');
                this._outputDiv = <HTMLElement>filledDiv.querySelector('#output');


                // Send message to client when user types and hits return
                this._inputField.addEventListener("keydown", (evt) => {
                    if (evt.keyCode === 13) {
                        this.sendToGroup({
                            message: this._inputField.value
                        });

                        this._inputField.value = "";
                    }
                });
            })
        }

        // When we get a message from the client, just show it
        public onRealtimeMessageReceivedFromClientSide(receivedObject: any): void {
            var message = document.createElement('p');
            message.textContent = receivedObject.message;
            this._outputDiv.appendChild(message);
        }
    }

    //Register the plugin with vorlon core
    Core.RegisterDashboardPlugin(new BroadcastSampleDashboard());
}
