export module VORLON {
    export class Tools {
        public static GetOperatingSystem(ua: string) {
            var currentLowerUA = ua.toLowerCase();
            
             // Windows Phone
            if (currentLowerUA.indexOf("windows phone") >= 0) {
                return "Windows Phone";
            }
    
            // Windows
            if (currentLowerUA.indexOf("windows") >= 0) {
                return "Windows";
            }
    
            // Android
            if (currentLowerUA.indexOf("android") >= 0) {
                return "Android";
            }
    
            // iOS
            if (currentLowerUA.indexOf("apple-i") >= 0) {
                return "iOS";
            }
    
            if (currentLowerUA.indexOf("iphone") >= 0) {
                return "iOS";
            }
    
            if (currentLowerUA.indexOf("ipad") >= 0) {
                return "iOS";
            }
    
            // BlackBerry
            if (currentLowerUA.indexOf("blackberry") >= 0) {
                return "BlackBerry";
            }
    
            // BlackBerry
            if (currentLowerUA.indexOf("(bb") >= 0) {
                return "BlackBerry";
            }
    
            // Kindle
            if (currentLowerUA.indexOf("kindle") >= 0) {
                return "Kindle";
            }
    
            // Macintosh
            if (currentLowerUA.indexOf("macintosh") >= 0) {
                return "Macintosh";
            }
    
            // Linux
            if (currentLowerUA.indexOf("linux") >= 0) {
                return "Linux";
            }
    
            // OpenBSD
            if (currentLowerUA.indexOf("openbsd") >= 0) {
                return "OpenBSD";
            }
    
            // Firefox OS
            if (currentLowerUA.indexOf("firefox") >= 0) {
                return "Firefox OS"; // Web is the plaform
            }
    
            return "Unknown operating system";
        }

        // from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#answer-2117523
        public static CreateGUID(): string {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
}
