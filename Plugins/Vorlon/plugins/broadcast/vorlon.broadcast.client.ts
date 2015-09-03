/// <reference path="../../vorlon.clientPlugin.ts" />

module VORLON {
    export class BroadcastSampleClient extends ClientPlugin {

        constructor() {
            super("broadcast"); // Name
            this._ready = true; // No need to wait
            console.log('Started');
        }

        //Return unique id for your plugin
        public getID(): string {
            return "BROADCAST";
        }

        public refresh(): void {
            //override this method with cleanup work that needs to happen
            //as the user switches between clients on the dashboard

            //we don't really need to do anything in this sample
        }

        // This code will run on the client //////////////////////

        // Start the clientside code
        public startClientSide(): void {
            //don't actually need to do anything at startup
            var btn = document.createElement("button");
            btn.textContent = "button";

            document.body.appendChild(btn);

            btn.addEventListener("click", (evt) => {
                this.sendToDashboard({
                    test: "aaaa"
                });
            });
            //sendToDashboard(data: any, incrementVisualIndicator: boolean = false){
            //this._insertHtmlContentAsync(div, (filledDiv) => {
            //    this._inputField = <HTMLInputElement>filledDiv.querySelector('#echoInput');
            //    this._outputDiv = <HTMLElement>filledDiv.querySelector('#output');


            //    // Send message to client when user types and hits return
            //    this._inputField.addEventListener("keydown", (evt) => {
            //        if (evt.keyCode === 13) {
            //            this.sendToClient({
            //                message: this._inputField.value
            //            });

            //            this._inputField.value = "";
            //        }
            //    });
            //})
        }

        // Handle messages from the dashboard, on the client
        public onRealtimeMessageReceivedFromDashboardSide(receivedObject: any): void {
            console.log('Got message from broadcast plugin', receivedObject.message);
            //The dashboard will send us an object like { message: 'hello' }
            //Let's just return it, reversed
            var data = {
                message: receivedObject.message.split("").reverse().join("")
            };

            this.sendToDashboard(data);
        }
    }

    //Register the plugin with vorlon core
    Core.RegisterClientPlugin(new BroadcastSampleClient());
}
