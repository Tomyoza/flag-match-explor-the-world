// Game data with country flags
const countries = [
    { name: "Brazil", flag: "🇧🇷", fact: "Brazil is home to the Amazon rainforest, which produces 20% of the world's oxygen!" },
    { name: "Japan", flag: "🇯🇵", fact: "Japan consists of 6,852 islands and is famous for cherry blossoms and sushi!" },
    { name: "Canada", flag: "🇨🇦", fact: "Canada has two official languages and more lakes than the rest of the world combined!" },
    { name: "Australia", flag: "🇦🇺", fact: "Australia is the only country that is also a continent!" },
    { name: "France", flag: "🇫🇷", fact: "France is the most visited country in the world with over 89 million tourists annually!" },
    { name: "Germany", flag: "🇩🇪", fact: "Germany has over 1,500 breweries and is famous for Oktoberfest!" },
    { name: "India", flag: "🇮🇳", fact: "The game of chess was invented in India over 1,500 years ago!" },
    { name: "China", flag: "🇨🇳", fact: "The Great Wall of China is over 13,000 miles long!" },
    { name: "United Kingdom", flag: "🇬🇧", fact: "The UK is made up of England, Scotland, Wales, and Northern Ireland!" },
    { name: "Italy", flag: "🇮🇹", fact: "Italy has more UNESCO World Heritage Sites than any other country!" },
    { name: "Spain", flag: "🇪🇸", fact: "Spain has the second-highest number of UNESCO World Heritage Sites!" },
    { name: "Russia", flag: "🇷🇺", fact: "Russia is the largest country in the world, covering 11 time zones!" },
    { name: "Mexico", flag: "🇲🇽", fact: "Mexico gave the world chocolate, chili peppers, and vanilla!" },
    { name: "South Korea", flag: "🇰🇷", fact: "South Korea is known for K-pop, kimchi, and having the fastest internet in the world!" },
    { name: "Egypt", flag: "🇪🇬", fact: "Egypt is home to the Great Pyramid of Giza, one of the Seven Wonders of the Ancient World!" },
    { name: "United States", flag: "🇺🇸", fact: "The U.S. has the world's largest economy and is home to the Grand Canyon!" },
    { name: "Indonesia", flag: "🇮🇩", fact: "Indonesia is the world's largest archipelago with over 17,000 islands!" },
    { name: "Turkey", flag: "🇹🇷", fact: "Turkey spans two continents: Europe and Asia!" },
    { name: "Saudi Arabia", flag: "🇸🇦", fact: "Saudi Arabia is home to Mecca, the holiest city in Islam!" },
    { name: "Thailand", flag: "🇹🇭", fact: "Thailand is the only Southeast Asian country never colonized by a European power!" },
    { name: "Argentina", flag: "🇦🇷", fact: "Argentina is famous for tango, steak, and Patagonia!" },
    { name: "South Africa", flag: "🇿🇦", fact: "South Africa has three capital cities and is known as the Rainbow Nation!" },
    { name: "Nigeria", flag: "🇳🇬", fact: "Nigeria is Africa's most populous country and a cultural powerhouse!" },
    { name: "Vietnam", flag: "🇻🇳", fact: "Vietnam is known for its stunning natural landscapes and delicious pho!" },
    { name: "Ukraine", flag: "🇺🇦", fact: "Ukraine is Europe’s largest country entirely within its borders and known for fertile farmlands!" },
    { name: "Norway", flag: "🇳🇴", fact: "Norway is known for its fjords and is one of the happiest countries in the world!" },
    { name: "Sweden", flag: "🇸🇪", fact: "Sweden gave us IKEA, Spotify, and ABBA!" },
    { name: "Finland", flag: "🇫🇮", fact: "Finland has been ranked the world's happiest country for several years in a row!" },
    { name: "Denmark", flag: "🇩🇰", fact: "Denmark is famous for LEGO and its strong social welfare system!" },
    { name: "Netherlands", flag: "🇳🇱", fact: "The Netherlands is known for tulips, windmills, and cycling!" },
    { name: "Switzerland", flag: "🇨🇭", fact: "Switzerland is famous for chocolate, neutrality, and the Alps!" },
    { name: "Poland", flag: "🇵🇱", fact: "Poland is home to the largest castle in the world — Malbork Castle!" },
    { name: "Greece", flag: "🇬🇷", fact: "Greece is the birthplace of democracy and the Olympic Games!" },
    { name: "Austria", flag: "🇦🇹", fact: "Austria is the birthplace of Mozart and home to beautiful alpine landscapes!" },
    { name: "Portugal", flag: "🇵🇹", fact: "Portugal is the world's oldest nation-state and famous for its explorers!" },
    { name: "Ireland", flag: "🇮🇪", fact: "Ireland is known as the Emerald Isle and has a rich tradition of folklore!" },
    { name: "New Zealand", flag: "🇳🇿", fact: "New Zealand is famous for its Māori culture and stunning Lord of the Rings landscapes!" },
    { name: "Philippines", flag: "🇵🇭", fact: "The Philippines consists of over 7,600 islands and has some of the best beaches in the world!" },
    { name: "Malaysia", flag: "🇲🇾", fact: "Malaysia is home to the Petronas Towers, the tallest twin towers in the world!" },
    { name: "Pakistan", flag: "🇵🇰", fact: "Pakistan is home to K2, the second-highest mountain in the world!" },
    { name: "Bangladesh", flag: "🇧🇩", fact: "Bangladesh has the largest river delta in the world — the Sundarbans!" },
    { name: "Iran", flag: "🇮🇷", fact: "Iran is home to one of the world's oldest civilizations and incredible Persian architecture!" },
    { name: "Iraq", flag: "🇮🇶", fact: "Iraq was home to ancient Mesopotamia, often called the cradle of civilization!" },
    { name: "Israel", flag: "🇮🇱", fact: "Israel is a hub of ancient history and cutting-edge technology!" },
    { name: "Belgium", flag: "🇧🇪", fact: "Belgium is famous for waffles, chocolate, and hosting the EU headquarters!" },
    { name: "Chile", flag: "🇨🇱", fact: "Chile stretches along the Andes and has the driest desert in the world: the Atacama!" },
    { name: "Peru", flag: "🇵🇪", fact: "Peru is home to Machu Picchu, one of the New Seven Wonders of the World!" },
    { name: "Colombia", flag: "🇨🇴", fact: "Colombia is the world's largest producer of emeralds!" },
    { name: "Venezuela", flag: "🇻🇪", fact: "Venezuela has Angel Falls, the world’s highest uninterrupted waterfall!" },
    { name: "Cuba", flag: "🇨🇺", fact: "Cuba is known for classic cars, cigars, and vibrant culture!" },
    { name: "Afghanistan", flag: "🇦🇫", fact: "Afghanistan is home to the ancient city of Kabul and has a rich history spanning thousands of years!" },
    { name: "Albania", flag: "🇦🇱", fact: "Albania is known as the 'Land of Eagles' and has beautiful beaches along the Adriatic Sea!" },
    { name: "Algeria", flag: "🇩🇿", fact: "Algeria is the largest country in Africa and home to the Sahara Desert!" },
    { name: "Angola", flag: "🇦🇴", fact: "Angola is rich in natural resources and has stunning waterfalls like Kalandula Falls!" },
    { name: "Armenia", flag: "🇦🇲", fact: "Armenia was the first country to adopt Christianity as its state religion in 301 AD!" },
    { name: "Azerbaijan", flag: "🇦🇿", fact: "Azerbaijan is known as the 'Land of Fire' due to its natural gas reserves!" },
    { name: "Bahrain", flag: "🇧🇭", fact: "Bahrain is an island nation in the Persian Gulf and has a rich pearl diving history!" },
    { name: "Belarus", flag: "🇧🇾", fact: "Belarus is known as the 'Lungs of Europe' due to its extensive forests!" },
    { name: "Belize", flag: "🇧🇿", fact: "Belize is home to the Great Blue Hole, one of the world's most famous diving spots!" },
    { name: "Benin", flag: "🇧🇯", fact: "Benin is the birthplace of voodoo and has a rich cultural heritage!" },
    { name: "Bhutan", flag: "🇧🇹", fact: "Bhutan measures its success by Gross National Happiness instead of GDP!" },
    { name: "Bolivia", flag: "🇧🇴", fact: "Bolivia has the world's highest capital city, La Paz, at over 3,600 meters above sea level!" },
    { name: "Bosnia and Herzegovina", flag: "🇧🇦", fact: "Bosnia and Herzegovina has one of the last remaining primeval forests in Europe!" },
    { name: "Botswana", flag: "🇧🇼", fact: "Botswana is home to the Okavango Delta, one of the world's largest inland deltas!" },
    { name: "Brunei", flag: "🇧🇳", fact: "Brunei is one of the wealthiest countries in the world due to its oil reserves!" },
    { name: "Bulgaria", flag: "🇧🇬", fact: "Bulgaria is the oldest country in Europe that hasn't changed its name since 681 AD!" },
    { name: "Burkina Faso", flag: "🇧🇫", fact: "Burkina Faso means 'Land of Honest People' and is known for its vibrant music scene!" },
    { name: "Cambodia", flag: "🇰🇭", fact: "Cambodia is home to Angkor Wat, the largest religious monument in the world!" },
    { name: "Cameroon", flag: "🇨🇲", fact: "Cameroon is known as 'Africa in Miniature' due to its diverse geography and culture!" },
    { name: "Costa Rica", flag: "🇨🇷", fact: "Costa Rica produces 99% of its electricity from renewable sources!" },
    { name: "Croatia", flag: "🇭🇷", fact: "Croatia has over 1,000 islands and is famous for its stunning Adriatic coastline!" },
    { name: "Cyprus", flag: "🇨🇾", fact: "Cyprus is the legendary birthplace of the Greek goddess Aphrodite!" },
    { name: "Czech Republic", flag: "🇨🇿", fact: "The Czech Republic consumes more beer per capita than any other country in the world!" },
    { name: "Dominican Republic", flag: "🇩🇴", fact: "The Dominican Republic is home to the oldest European settlement in the Americas!" },
    { name: "Ecuador", flag: "🇪🇨", fact: "Ecuador is named after the equator, which runs directly through the country!" },
    { name: "El Salvador", flag: "🇸🇻", fact: "El Salvador is the smallest and most densely populated country in Central America!" },
    { name: "Estonia", flag: "🇪🇪", fact: "Estonia is one of the most digitally advanced countries and invented Skype!" },
    { name: "Ethiopia", flag: "🇪🇹", fact: "Ethiopia is the only African country never colonized and has its own calendar!" },
    { name: "Fiji", flag: "🇫🇯", fact: "Fiji has over 300 islands and is known as the 'Soft Coral Capital of the World'!" },
    { name: "Georgia", flag: "🇬🇪", fact: "Georgia is considered the birthplace of wine, with evidence of winemaking dating back 8,000 years!" },
    { name: "Ghana", flag: "🇬🇭", fact: "Ghana was the first African country to gain independence from colonial rule in 1957!" },
    { name: "Guatemala", flag: "🇬🇹", fact: "Guatemala is home to Tikal, one of the largest Mayan archaeological sites!" },
    { name: "Honduras", flag: "🇭🇳", fact: "Honduras is home to the ancient Mayan city of Copán, famous for its hieroglyphic stairway!" },
    { name: "Hungary", flag: "🇭🇺", fact: "Hungary is home to the largest thermal water cave system in the world!" },
    { name: "Iceland", flag: "🇮🇸", fact: "Iceland has no mosquitoes and is one of the most peaceful countries in the world!" },
    { name: "Jamaica", flag: "🇯🇲", fact: "Jamaica is the birthplace of reggae music and the legendary Bob Marley!" },
    { name: "Jordan", flag: "🇯🇴", fact: "Jordan is home to Petra, one of the New Seven Wonders of the World!" },
    { name: "Kazakhstan", flag: "🇰🇿", fact: "Kazakhstan is the world's largest landlocked country and has the first space launch facility!" },
    { name: "Kenya", flag: "🇰🇪", fact: "Kenya is home to the Great Migration, the largest animal migration on Earth!" },
    { name: "Kuwait", flag: "🇰🇼", fact: "Kuwait has one of the highest per capita incomes in the world!" },
    { name: "Laos", flag: "🇱🇦", fact: "Laos is the most heavily bombed country per capita in history!" },
    { name: "Latvia", flag: "🇱🇻", fact: "Latvia has one of the fastest internet speeds in the world and a rich folk tradition!" },
    { name: "Lebanon", flag: "🇱🇧", fact: "Lebanon is home to the oldest continuously inhabited city in the world, Byblos!" },
    { name: "Lithuania", flag: "🇱🇹", fact: "Lithuania was the last European country to convert to Christianity in 1387!" },
    { name: "Luxembourg", flag: "🇱🇺", fact: "Luxembourg is one of the smallest countries in Europe but has the highest GDP per capita!" },
    { name: "Madagascar", flag: "🇲🇬", fact: "Madagascar is home to unique wildlife found nowhere else, including lemurs!" },
    { name: "Malta", flag: "🇲🇹", fact: "Malta has some of the oldest free-standing structures in the world, older than Stonehenge!" },
    { name: "Mongolia", flag: "🇲🇳", fact: "Mongolia is the least densely populated country in the world!" },
    { name: "Morocco", flag: "🇲🇦", fact: "Morocco is home to the world's largest desert, the Sahara, and beautiful blue cities!" },
    { name: "Myanmar", flag: "🇲🇲", fact: "Myanmar is home to over 2,000 pagodas and temples, including the famous Shwedagon Pagoda!" },
    { name: "Nepal", flag: "🇳🇵", fact: "Nepal is home to Mount Everest, the highest peak in the world at 8,848 meters!" }
];

// Game state
let currentQuestion = 0;
let score = 0;
let streak = 0;
let correctAnswers = 0;
let currentCountry = null;
let gameQuestions = [];
let hasAnswered = false;

// Initialize game
function initGame() {
    gameQuestions = [...countries].sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    score = 0;
    streak = 0;
    totalAnswered = 0;
    correctAnswers = 0;
    hasAnswered = false;

    document.getElementById('gameComplete').style.display = 'none';
    document.getElementById('quizCard').style.display = 'block';

    updateScoreboard();
    loadQuestion();
}

// Load current question
function loadQuestion() {
    if (currentQuestion >= 10) {
        endGame();
        return;
    }

    hasAnswered = false;
    currentCountry = gameQuestions[currentQuestion];

    // Update question counter and progress
    document.getElementById('questionCounter').textContent = 
        `Question ${currentQuestion + 1} of 10`;

    const progress = ((currentQuestion) / gameQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Display flag
    document.getElementById('flagDisplay').textContent = currentCountry.flag;

    // Generate options (1 correct + 3 random incorrect)
    const options = [currentCountry];
    const otherCountries = countries.filter(c => c.name !== currentCountry.name);

    while (options.length < 4) {
        const randomCountry = otherCountries[Math.floor(Math.random() * otherCountries.length)];
        if (!options.find(option => option.name === randomCountry.name)) {
            options.push(randomCountry);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    // Create option buttons
    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.name;
        button.onclick = () => selectOption(option, button);
        optionsGrid.appendChild(button);
    });

    document.getElementById('nextBtn').disabled = true;
}

// Handle option selection
function selectOption(selectedCountry, buttonElement) {
    if (hasAnswered) return;

    hasAnswered = true;
    totalAnswered++;

    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedCountry.name === currentCountry.name) {
        buttonElement.classList.add('correct');
        score += 10 + (streak * 2);
        correctAnswers++;
        streak++;
        showFunFact(currentCountry);
    } else {
        buttonElement.classList.add('incorrect');
        streak = 0;
        allButtons.forEach(btn => {
            if (btn.textContent === currentCountry.name) {
                btn.classList.add('correct');
            }
        });
    }

    updateScoreboard();

    setTimeout(() => {
        document.getElementById('nextBtn').disabled = false;
    }, 1500);
}

// Show fun fact popup
function showFunFact(country) {
    const popup = document.getElementById('funFactPopup');
    const title = document.getElementById('factTitle');
    const text = document.getElementById('factText');

    title.textContent = `🎉 ${country.name}!`;
    text.textContent = country.fact;

    popup.classList.add('show');
}

// Close fun fact popup
function closeFunFact() {
    document.getElementById('funFactPopup').classList.remove('show');
}

// Move to next question
function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

// Update scoreboard
function updateScoreboard() {
    document.getElementById('scoreDisplay').textContent = score;
    document.getElementById('streakDisplay').textContent = streak;

    const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    document.getElementById('accuracyDisplay').textContent = accuracy + '%';
}

// End game
function endGame() {
    document.getElementById('quizCard').style.display = 'none';
    document.getElementById('gameComplete').style.display = 'block';

    const accuracy = Math.round((correctAnswers / totalAnswered) * 100);
    const finalScore = document.getElementById('finalScore');
    const performanceMessage = document.getElementById('performanceMessage');

    finalScore.textContent = `Final Score: ${score} points | Accuracy: ${accuracy}%`;

    let message = '';
    if (accuracy >= 90) {
        message = '🏆 Outstanding! You\'re a geography expert!';
    } else if (accuracy >= 75) {
        message = '🌟 Great job! You know your flags well!';
    } else if (accuracy >= 60) {
        message = '👍 Good effort! Keep practicing to improve!';
    } else {
        message = '📚 Nice try! Study more flags and try again!';
    }

    performanceMessage.textContent = message;
}

// Reset game
function resetGame() {
    initGame();
}

// Close popup when clicking outside
document.addEventListener('click', function(e) {
    const popup = document.getElementById('funFactPopup');
    if (e.target === popup) {
        closeFunFact();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !document.getElementById('nextBtn').disabled) {
        nextQuestion();
    }

    if (e.key >= '1' && e.key <= '4' && !hasAnswered) {
        const buttons = document.querySelectorAll('.option-btn');
        const index = parseInt(e.key) - 1;
        if (buttons[index]) {
            buttons[index].click();
        }
    }
});

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', initGame);