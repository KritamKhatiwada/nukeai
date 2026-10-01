
chrome.storage.local.get(['nukeAiOverview'], (result) => {
  const isEnabled = result.nukeAiOverview ?? true;

  if (!isEnabled) {
    return;
  }
function getGeminiDOM() {
  const headings= document.querySelectorAll(' div[aria-level="2"][role="heading"]');
console.log("inside getgeminidom function");

  console.log(headings);
  headings.forEach((heading)=>{
    const nearDOM= heading.closest('[style="margin-bottom:30px"');
    nearDOM?.remove();
  });
}
getGeminiDOM();


});
