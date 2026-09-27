
chrome.storage.local.get(['nukeLlmRedirect'], (result) => {
  const isEnabled = result.nukeLlmRedirect ?? false;

  if (!isEnabled) {
    return;
  } 
const aiList=[
    {name:"gemini",targetButtonClassName:'button[aria-label="Send message"]',textAreaClassName:'div[aria-label="Enter a prompt for Gemini"]'},
    {name:"claude",targetButtonClassName:'button[aria-label="Send message"]',textAreaClassName:'div[aria-label="Write your prompt to Claude"]'},
    {name:"chatgpt",targetButtonClassName:'button[aria-label="Send message"]',textAreaClassName:'div[aria-label="Chat with ChatGPT"]'},
];

aiList.forEach(x=>{
if (document.URL.includes(`${x.name}`)) {
llmRedirector(x.textAreaClassName,x.targetButtonClassName)
}
})

function llmRedirector(textAreaClassName,targetButtonClassName){
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
            
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    function getText() {
      const textArea = document.querySelector(textAreaClassName);
      return textArea ? textArea.innerText.trim() : '';
  }

    waitForElm(targetButtonClassName).then((button) => {
        console.log('button is ready');
        console.log(button);
        const textArea = document.querySelector(textAreaClassName);
        if (textArea) {
        textArea.addEventListener("keydown", (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            console.log("enter hit");
            const text=getText();
            window.location = `https://exa.ai/search?q=${encodeURIComponent(text)}`;
            }
            })
        };
    
        button.addEventListener("click",()=>{
            console.log("clicked")
            const text=getText();
            window.location = `https://exa.ai/search?q=${encodeURIComponent(text)}`;
    });
    });
    
  }
});
