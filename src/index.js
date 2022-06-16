import './css/common.css';

import BSN from 'bootstrap.native';

const modal = new BSN.Modal('#exampleModal');
console.log(modal);



const PROMPT_DELAY = 3000;

setTimeout(() => {
    modal.show();
}, PROMPT_DELAY)