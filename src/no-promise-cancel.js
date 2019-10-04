function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

//

delay(1000).then(() => {
  console.log('A delayed message');
});

// attempt to cancel

let isCancelled = false;

delay(1000).then(() => {
  if (isCancelled) {
    console.log('Promise resolved, but should be cancelled');
    return;
  }

  console.log('A delayed message');
});

isCancelled = true;

// what about fetch?

fetch('https://api.github.com').then(response => {
  console.log('Response is OK:', response.ok);
});

//

const abortController = new AbortController();

abortController.signal.addEventListener('abort', () => {
  console.log('Request has been aborted');
});

fetch('https://api.github.com', {
  signal: abortController.signal
}).then(response => {
  console.log('Response is OK:', response.ok);
});

abortController.abort();
