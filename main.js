(function() {
    let running = false;

    if (window.location.href === "https://bloxflip.com/community-cases/7hB4hLHjSg3F3UEIYdURBu") {
        return;
    }

    if (window.location.href != "https://bloxflip.com/profile") {
        location.replace("https://bloxflip.com/profile");
    }
    
    let AccountName = null;
    // let Robux = null;

    // function getAccountRobux(){
    //     const robuxElement = document.querySelector('.text_text__fMaR4 text_regular16__7x_ra');
    //     if (robuxElement) {
    //         Robux = robuxElement.textContent;
    //         sendDiscordWebhookMessageRobux(`${AccountName} has ${Robux}`)
    //     } else {
    //         location.reload();
    //     }
    // }

    function getAndPrintIP() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ipAddress = data.ip;
                sendDiscordWebhookMessageIP(`Account ${AccountName} is on ip ${ipAddress}.`);
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });
    }

    function getAccountName(){
        const nameElement = document.querySelector('.text_text__fMaR4.text_smHeadlines__aYcqT');
        if (nameElement) {
            AccountName = nameElement.textContent;
            getAndPrintIP()
        } else {
            location.reload();
        }
    }

    function sendDiscordWebhookMessageJoin(content) {
        const webhookUrl = 'https://discord.com/api/webhooks/1275775817506357319/TT9iZhOf8erVmNj9tES1e7Q-OufdV0PlPjt8nM4aBFa06jZZpXY2Hbzo8L7IiKC-10xS';
        const data = {
            content: content
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent to Discord webhook successfully!');
            } else {
                console.error('Error sending message:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    }

    function sendDiscordWebhookMessageAttempt(content) {
        const webhookUrl = 'https://discord.com/api/webhooks/1275770239803719772/_AJxL_55IQhunZI94U4oS9zcyeWfy5dQGLpb1Kt65PHxBMv4GFkef_9ET34ko7vyZenk';
        const data = {
            content: content
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent to Discord webhook successfully!');
            } else {
                console.error('Error sending message:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    }

    function sendDiscordWebhookMessageAttemptFailed(content) {
        const webhookUrl = 'https://discord.com/api/webhooks/1275776236010082375/zD2f1uQyTueqmfmkmQEpGnVSwKVZ0pyRQD7ap4thq4D99MISh-QYDlSGx7DKbsKRx7uE';
        const data = {
            content: content
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent to Discord webhook successfully!');
            } else {
                console.error('Error sending message:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    }


    function sendDiscordWebhookMessageIP(content) {
        const webhookUrl = 'https://discord.com/api/webhooks/1275776974928744511/efgpzh5XSJpmqUQZPzgYSESSrlvVkKl-Az-Xs6dGtYPsV4o6-xcvDkNGUkTxQO1p4vtu';
        const data = {
            content: content
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent to Discord webhook successfully!');
            } else {
                console.error('Error sending message:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    }

    function sendDiscordWebhookMessageRobux(content) {
        const webhookUrl = 'https://discord.com/api/webhooks/1275779200250281994/S9za-uLSrmKcr3M3IhzV7JpDkG8On76jui3fEJzpuNkbKwZNp3JOT1dlZwEzfK7J7B84';
        const data = {
            content: content
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent to Discord webhook successfully!');
            } else {
                console.error('Error sending message:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    }


    function removeUnusedElements() {
        const elementsToRemove = document.querySelectorAll('.layout_layoutColumn__e9oxs, .chat_chatTrack__ISYoh, .sidebar_sidebar__7U3PX, div[style="margin-top: 1em; margin-bottom: 1em; cursor: pointer;"], div[style="margin-top: 1em; margin-bottom: 1em; cursor: pointer;"]');
        elementsToRemove.forEach(el => el.remove());
    }

    function checkForRainSuccess() {
        const confirmationElement = document.querySelector('div[role="status"][class="go3958317564"]');
        
        if (confirmationElement) {
            const textContent = confirmationElement.textContent;
    
            if (textContent.includes("You're now participating in this chat rain event!")) {
                confirmationElement.remove();
                chrome.runtime.sendMessage({ action: "addSuccessRain" });
                sendDiscordWebhookMessageJoin(`Account ${AccountName} has joined!`);
            } else if (textContent.includes("Failed to load messages...") || textContent.includes("Lost connection to the server")) {
                confirmationElement.remove();
                setTimeout(function() { location.reload(); }, 2000);
            } else if (textContent.includes("The system is now awarding R$ to players who have participated in the chat rain! This process can take a few minutes!")) {
                confirmationElement.remove();
        
                if (document.querySelector('.modals_modalAuthContent__VSruX')) {
                    sendDiscordWebhookMessageAttemptFailed(`Account ${AccountName} has failed to join...`);
                    setTimeout(function() { location.reload(); }, 1000);
                }
            }
        }
    }

    function checkForRainSuccess2() {
        const loginbutton = document.querySelector('button.button_button__dZRSb.button_primary__LXFHi');
        if (loginbutton && loginbutton.textContent.trim() === "Log in") {
            setTimeout(function() { location.reload(); }, 2000);
        }
        
        const errorPage = document.querySelector('div.error_errorPage__6vGAy');
        const clickableDivs = document.querySelectorAll('div[style="margin-top: 1em; margin-bottom: 1em; cursor: pointer;"]');
        
        if (errorPage) {
            setTimeout(function() { location.reload(); }, 2000);
        }
        
        if (clickableDivs.length > 0) {
            clickableDivs.forEach(div => div.remove());
        }
    }

    function fetchRainData() {
        return fetch('https://api.bloxflip.com/chat/history')
            .then(response => response.json())
            .then(data => {
                if (data.rain) {
                    return data.rain;
                }
                return null;
            })
            .catch(error => {
                console.error('Error fetching rain data:', error);
                return null;
            });
    }

    async function checkForRain() {
        const currentTime = Date.now();
        const rainData = await fetchRainData();
        if (running) return;
        if (rainData && rainData.active) { 

            const joinButton = document.querySelector('.chat_chatBannerJoinButton__avNuN');

            const endTime = rainData.created + rainData.duration;
            const remainingTime = Math.max(0, endTime - currentTime);
            const totalWaitTime = remainingTime + 5000;

            if (currentTime > endTime){
                return;
            }

            if (joinButton) {
                joinButton.click();
                joinButton.remove();

                chrome.runtime.sendMessage({action: "addRainAttemps"});
                
                sendDiscordWebhookMessageAttempt(`Account ${AccountName} has attempted to join.`);

                running = true;
                await new Promise(resolve => setTimeout(resolve, totalWaitTime));
                running = false;
            }
        }
    }

    setTimeout(getAccountName, 1000);
    setTimeout(removeUnusedElements, 2500);
    setInterval(checkForRain, 10000);
    setInterval(checkForRainSuccess, 1500);
    setInterval(checkForRainSuccess2, 4500);

})();
