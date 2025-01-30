// Poll functionality
document.getElementById('poll-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedFeature = document.querySelector('input[name="feature"]:checked');
    if (selectedFeature) {
        document.getElementById('poll-result').textContent = `Thank you for voting for ${selectedFeature.value}!`;
    } else {
        document.getElementById('poll-result').textContent = 'Please select an option to vote.';
    }
});
