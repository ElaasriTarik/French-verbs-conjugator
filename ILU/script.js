let presentSection = document.querySelector('.presentSection');
let futureSection = document.querySelector('.futureSection');
window.addEventListener('keydown', (e) => {

  if (e.key == 'Enter') {
   conjugatePresent()
   conjugateFuture()
  }
})

function conjugatePresent() {
  let verb = document.querySelector('input').value;
  let lastTwo = verb[verb.length - 2] + verb[verb.length - 1];
  if (verb === 'aller') {
    presentSection.innerHTML = `
      <p>Je vais</p>
      <p>Tu vas</p>
      <p>il/Elle va</p>
      <p>Nous allons</p>
      <p>Vous allez</p>
      <p>Ils/elles vont</p>
      `
  }
 else if (lastTwo === "er") {

   presentSection.innerHTML = `
     <p>Je ${verb.slice(0, verb.length - 2)}e</p>
     <p>Tu ${verb.slice(0, verb.length - 2)}es</p>
     <p>il/Elle ${verb.slice(0, verb.length - 2)}e</p>
     `;
    if (verb[verb.length - 3].toLowerCase() === 'g' || verb[verb.length - 3] === 'c') {
       presentSection.innerHTML +=
       `<p>Nous ${verb.slice(0, verb.length - 2)}eons</p>
       <p>Vous ${verb.slice(0, verb.length - 2)}ez</p>
       <p>Ils/Elles ${verb.slice(0, verb.length - 2)}ent</p>
       `
    } else {
      presentSection.innerHTML +=
      `<p>Nous ${verb.slice(0, verb.length - 2)}ons</p>
      <p>Vous ${verb.slice(0, verb.length - 2)}ez</p>
      <p>Ils/Elles ${verb.slice(0, verb.length - 2)}ent</p>
      `
  }
  }
}
function conjugateFuture() {
  let verb = document.querySelector('input').value;
  let lastTwo = verb[verb.length - 2] + verb[verb.length - 1];
  if (verb === 'aller') {
    futureSection.innerHTML = `
      <p>J'irai</p>
      <p>Tu iras</p>
      <p>Il/Elle/on ira</p>
      <p>Nous irons</p>
      <p>Vous irez</p>
      <p>Ils/Elles iront</p>
      `
  }
  else if (lastTwo === "er") {
   futureSection.innerHTML =
   `<p>Je ${verb}ai</p>
     <p>Tu ${verb}as</p>
     <p>il/Elle ${verb}a</p>
      <p>Nous ${verb}ons</p>
      <p>Vous ${verb}ez</p>
      <p>Ils/Elles ${verb}ont</p>`
  }
}
