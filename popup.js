document.addEventListener('DOMContentLoaded', () => {
  const aiOverviewCheck = document.getElementById('checkAiOverview');
  const llmRedirectCheck = document.getElementById('checkLlmRedirect');

  chrome.storage.local.get(['nukeAiOverview', 'nukeLlmRedirect'], (result) => {
    aiOverviewCheck.checked = result.nukeAiOverview ?? true;
    llmRedirectCheck.checked = result.nukeLlmRedirect ?? false;
  });

  aiOverviewCheck.addEventListener('change', (event) => {
    chrome.storage.local.set({ nukeAiOverview: event.target.checked });
  });

  llmRedirectCheck.addEventListener('change', (event) => {
    chrome.storage.local.set({ nukeLlmRedirect: event.target.checked });
  });
});