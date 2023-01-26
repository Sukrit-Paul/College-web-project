document.getElementById('new').addEventListener('click',
function() {
    document.querySelector('.bg-model-new').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.bg-model-new').style.display = 'none';
});
document.getElementById('local').addEventListener('click',
function() {
    document.querySelector('.bg-model-local').style.display = 'flex';
});

document.querySelector('.close-local').addEventListener('click',
function() {
    document.querySelector('.bg-model-local').style.display = 'none';
});
document.getElementById('cand').addEventListener('click',
function() {
    document.querySelector('.bg-model-candi').style.display = 'flex';
});

document.querySelector('.close-candi').addEventListener('click',
function() {
    document.querySelector('.bg-model-candi').style.display = 'none';
});
document.getElementById('recti').addEventListener('click',
function() {
    document.querySelector('.bg-model-recti').style.display = 'flex';
});

document.querySelector('.close-recti').addEventListener('click',
function() {
    document.querySelector('.bg-model-recti').style.display = 'none';
});
