
//const Discord = require('discord.js');
//const client = new Discord.Client();

//const client = new Client({ ws: { intents: new Intents(Intents.ALL) }});
let Discord = require("discord.js");

const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({ intents: allIntents });


//const axios = require('axios');
//const cheerio = require('cheerio');

let settings;
let owner;
let token = '';
let wut1;
let wut2;
let wut3;
let eyesleft;
let huh;
let idleE;
let realshit;
let ignored;
let lol = 0;
let idle = 0;
let scanAll = 1;
let boisTTS = 1;
let ballCommand = true;
let ttsE = true;

let pungent = '```BBBBBBBBBRRRRRRRRRRRAAAAAAAAAAAPPPPPPPPPPPPPPPPPsnnnnniiiiiiffffffffffff...oh yes my dear....sssnnnnnnnnnnnniiiiiiiiffffffff....quite pungent indeed...is that....dare I say....sssssssnniff...eggs I smell?......sniff sniff....hmmm...yes...quite so my darling....sniff....quite pungent eggs yes very much so .....ssssssssssssssnnnnnnnnnnnnnnniiiiiiiffffff....ah yes...and also....a hint of....sniff....cheese.....quite wet my dear....sniff...but of yes...this will do nicely....sniff.....please my dear....another if you please....nice a big now....BBBBBBRRRRRRRAAAAAAAPPPPPPPFFFFFFFFLLLLLLLLLPPPPPPPPPFFFFFF Oh yes...very good!....very sloppy and wet my dear....hmmmmm...is that a drop of nugget I see on the rim?...hmmmm.....let me.....let me just have a little taste before the sniff my darling.......hmmmmm....hmm..yes....that is a delicate bit of chocolate my dear....ah yes....let me guess...curry for dinner?....oh quite right I am....aren\'t I?....ok....time for sniff.....sssssnnnnnnniiiiiiiiffffffff.....hmmm...hhhmmmmm I see...yes....yes indeed as well curry......hmmm....that fragrance is quite noticeable....yes.....onion and garlic chutney I take it my dear?.....hmmmmm....yes quite.....BBBBBBRRRRRRRRPPPPPPFFFFFFFFFFFFFFFFFFFFFTTTTTTTTTTT Oh I was not expecting that…that little gust my dear….you caught me off guard…yes…so gentle it was though…hmmmm…let me taste this little one…just one small sniff…..sniff…ah….ssssssnnnnnniiiiiffffffffffff…and yet…so strong…yes…the odor….sniff sniff…hmmm….is that….sniff….hmmm….I can almost taste it my dear…..yes….just…sniff….a little whiff more if you please…..ssssssnnnnnniiiiiffffffffff…ah yes I have it now….yes quite….hhhhmmmm…delectable my dear…..quite exquisite yes…..I dare say…sniff….the most pungent one yet my dear….ssssnnnnniiiifffffffffffffffffffffff….yes….﻿```';

// who
var subject = ['reeg','james','jimmy','tyra','liz','ton','chino','ysabel','leah','kitty','john madden','the cake','my ass','your ass','your mom','Joe Biden','sarah','tom clancy',
	'pipo', '100,000 Ohioans', 'the 1 out of 10 dentists that dont recommend sugarless gum', 'beast sandwich',
	'drumpf', 'dumbo\'s rubbery elephant schlong', 'my favorite inflation porn artist', 'my big tiddy anime waifu', 'daddy', 'our bean quean', 'long horse', 'the skinwalker you think is your closest friend','Hasbulla',
	'a fully sentient tomato who can feel pain\, but cannot scream', 'guy fierri', 'george bush', 'the Tainted One', 'Tom Nook', 'your sam',  'God', 'Satan', 'John Freeman', 'jeff tutorials',
	'johoise', 'duman', 'a cromulent unfuckcrustable', 'the fuckcrustables', 'The Tainted One', 'Mr. Imlay', 'Mrs. Matsuyama', 'Jeb Bush', 'cody', 'a sentient cum sock', 'cool guy',
	'the spy watching your zoom meeting', 'bilbo baggins', 'a sentient cum sock', 'an obama drone', 'al qaeda', 'melania trump', 'michelle obama', 'deadmau5', 'your boss',
	'my hairy ass', 'slenderman', 'joseph smith', 'the mormon church', 'the pope', 'bill burr', 'lady gaga', 'your neighbor', 'your dad\'s best friend that you called "uncle" as a child', 'your real parents',
	'colonel sanders', 'bernie sanders','tim cook', 'the reanimated corpse of steve jobs', 'eminem', 'la habra 300 bowl', 'elon musk', 'anne frank', 'marshall pope', 'hila klein',
	'shigeru miyamoto', 'your unwashed ass', 'She Who Squirts', 'He Who Cums', 'Liz\'s cat', 'Beemo', 'the British', 'bisexuals', 'papi', 'a bloody fucker', 'an actual chimp',
	'shawty', 'I', 'hawaiian green bean pizza', 'Ronald Reagan', 'Nicolas Cage', 'Queen Elizabeth', 'Nickelback', 'Keanu Reeves', 'Democrats', 'Republicans', 'donald johnald tronald', 'donald john president', 'the fall guy', 'Disney Pixar\'s Cars™️ Pope Pinion IV',
	'kacey', 'olm', 'olmyra', 'chris', 'jed sheeran', 'nick', 'zach', 'zavala', 'ikora', 'cayde', 'banshee-44', 'tess everis', 'hawthorne', 'calus', 'osiris', 'the crow', 'the nine', 'the traveler', 'variks', 'an actual nigerian prince trying to give you money','donny jr', 'ana bray', 'mara sov', 'xur', 'ada-1', 'oryx', 'a single dreg', 'uncle roger', 'my left nut', 'god', 'your bitchy aunt', 'your qanon uncle', 'Q himself', 'froggy chair', 'socialists', 'nazis', 'communists', 'John Bungie', 'Big Oil', 'Big Pharma', 'ross from friends', 'patrick star', 'squidward', 'chandler', 'the shit stain in your underwear', 'a crusty sock', 'a cockroach', 'seinfeld', 'the bean quean', 'the far left', 'the far right', 'centrists', 'ben shapiro', 'jordan peterson', 'hillary clinton', 'a taint hair', 'osama bin laden', 'the mailman', 'hamburger helper', 'a used condom', 'rotisserie chicken', 'your lazy coworker', 'Todd Howard', 'amogus', 'sus guy', 'jim halpert', 'popcat', 'shmedium', 'cheesy bread', 'some dumb binch', 'the CEO of Robinhood', 'AOC', 'ted cruz', 'j cole', 'elmer fudd', 'a cum stain', 'the inventor of Worms the video game', 'justin timberlake', 'some guy', 'a rando', 'that one friend who never interacts in discord', 'the pogchamp guy', 'some chud on parler', 'an idiot who got banned from twitter', 'mark zuckerberg\'s lizard offspring', 'prince philip', 'prince philip (in dust form)', 'your best friend', 'the guy', 'robert downey jr', 'morgan freeman', 'a friendly neighborhood cat', 'a birb', 'some ducklings', 'the person reading this', 'abby shapiro', 'a gamer gril', 'a butterfly, floating peacefully', 'Hasbulla', 'the taliban', 'that one guy with an eyepatch', 'chet','brad', 'steven crowder', 'the vitamin D council', 'the fish oil triumvirate'];

// what
var things = ['your stupid ass', 'your smart ass', 'poop', 'in n out double double', 'french fries', 'a coffee', 'hand lotion', 'nothing', 'alcohol', 
	      'hand sanitizer', 'yeast', 'magnets', 'a solved rubiks cube', 'piss from the piss drawer', 'sad minion memes', 'sharp objects', 'a cat', 'an ICE detention center', 
	      'a human child', 'a bullet', 'a rose', 'a gun', 'a bomb', 'a silent fart that smells really bad', 'a loud fart that goes unnoticed', 
	      'a shit you dont have to wipe', 'a bottle of vodka', 'a field mouse', 'a barn cat', 'a 1999 Toyota Corolla', 'a semi truck full of eggs', 
	      'the true meaning of Christmas', 'last year\'s cum sock (reborn)', 'last year\'s cum sock (deceased)', 'the source of Kacey\'s power', 'the vomit coffin',
	      'the manifestation of your innermost fears', 'the incarnation of guilt', 'a lesser manifestation of evil', 'the origin of cum', 'an erect penis', 'a flaccid penis',
	      'a docile, but friendly penis', 'an aggressive penis', 'nothing. It\'s nothing. Stop fucking asking!', 'an old pioneer survivalist strategy', 'my left shoe', 
	      'a rock', 'a boulder', 'bees', 'hot sauce', 'scotch tape', 'a breathmint', 'a facemask', 'a half eaten bar of chapstick', 'some scrap metal', 'a used condom', 
              'a trashbag full of cum', 'a rusty bicycle', 'blood', 'tears of the natives', 'a crusty keyboard', 'a half eaten burrito', 'a mug of cold coffee', 
              'a nigerian prince in your spam folder', 'a job offer', 'nasal spray', 'a bidet that shoots milk', 'an old toothbrush', 'a pen that ran out of ink', 
              'tupperware full of moldy leftovers', 'a white flag', 'fake news', 'the failed coup attempt perpetrated by fascist Drumpf supporters on the United States capitol on Jan 6, 2021',
              'Microsoft Outlook 2013', 'lifesavers gummies', 'a kit kat bar', 'a newborn chimp', 'an adult boar', 'a dead cockroach', 'a horny dog', 'The Beast',
              'a succulent that you overwatered', 'a shard of glass', 'a honeycomb', 'a half eaten sandwich', 'the worst, most disgusting, carnal fantasy you\'ve ever had',
	      'a shit you definitely should have wiped', 'a shit you wish you didn\'t wipe', 'a protein bar that is well past the expiration date', 'a pair of shit-stained underwear',
              'an asshole', 'a really nice business card', 'an electric fly swatter', 'a stress ball that oozes blood', 'a molotov cocktail', 'an AK-47', 'a dirty old shoe', 'a hairball from the shower drain',
              'a single atom', 'a greasy nude man', 'a puddle of cooking oil', 'a piss disc mid-air', 'a t-shirt cannon', 'a volleyball with a face', 'in n out fries', 'cheam creems', 'spinch', 'ranibow sprimkle', 'chichen nuggest', 'mcdonald\'s sprite', 'chick fil a sauce', 'poopy doopy wee wee haha', 'a jar of honey', 'a comfortable sweater', 'an ugly, scratchy sweater', 'a water balloon full of vinegar', 'a can of pringles but they are all broken', 'a dead pig', 'dirty stripper shoes', 'super glue', 'a pen that ran dry ages ago', 'an spicey meatbole', 'a laptop with sticky keys', 'underwear lint','a sundress','a funko pop of your least favorite anime character', 'a security camera'];

// when
var times = ['right now', 'right this second :gun:', 'in a few minutes', 'in half an hour', 'in an hour', 'in a few hours', 'tonight', 'today', 'tomorrow', 'the day after tomorrow', 'exactly 30 minutes from now', 'in one week',
     'never', 'at an uncertain point in the annals of history', 'at tooth-hurty :tooth: :toothbrush:', 'time is merely a construct', 'TIME IS MERELY A CONSTRUCT', 'at six, gordon!', 'at 4:20 XDDDDDDD', 'on 4/20 XDDDDDDD',
     'when hell freezes over', 'when rush limbaugh died', 'when marvel vs capcom 4 comes out', 'when james stops bitching about sauce', 'when final fantasy 7 remake is finished', 'when team fortress 3 comes out',
     'when bernie sanders is elected', 'when you fucking do something about it yourself', 'when the imposter stops being sus', 'at twelve bong', 'when half life 3 comes out', 'yesterday', 'before you were born',
     'last tuesday', 'when daft punk breaks up... oh', 'whenever that franz dude got shot', 'at dinner time', 'when yandere simulator comes out', 'Bungie goes bankrupt', 'when Papa Biden gives me the stimmy wimmy uwu',
     'when James embraces the void', 'when the void calls me back', 'when Duman brings me the wine', 'whe Johoise brings me the wine', 'when the people revolt', 'the heat death of my anus', 'the heat death of your anus',
     'at the beginning of the mass ejaculation event (tbd)', 'in the middle of the mass ejaculation event', 'at the end of the mass ejaculation event', 'in 34 minutes and 19 seconds', 'at around tree fiddy', 'when ICP discovers how magnets work', 'when your shit smells like roses', 'when we are all vaccinated', 'when drumpf dies while taking a shit', 'in 3 days', 'in 7 weeks', 'in 2 months', 'in 5 years', 'one year from today this very minute', 'when i discover who the FUCK invented beans', 'when i die', 'in a little bit...', 'i am not sure, really', 'eventually', 'shortly, just wait!', 'never..', 'when you least expect it..', 'when you admit you have a problem', 'when they admit they have a problem', 'while you are sleeping', 'next time you fart', 'immediately', 'when you get off your ASS', '2 years from yesterday', 'next week', 'next sunday at 11am', 'next wednesday at 4:19pm', 'tomorrow morning'];

// where
var locations = ['the Grand Canyon', 'a sex dungeon',  'my sex dungeon', 'the moon', 'the Epstein island', 'a gulag', 'Big Ben', 'Ireland', 'the bottom of the Atlantic Ocean', 'Ohio', 'Deep Stone Crypt', 'a Garfield comic',
	'Mystery Flesh Pit National Park, Texas', 'Hell', 'Heaven', 'Purgatory', 'Limbo (The outer border of Hell, not the game)', 'Limbo (The game, not the outer border of Hell)', 'de_dust2', '2Fort', 'gm_construct',
	'Taco Bell:tm:', 'Mcdonalds:tm:', 'a strip club', 'my basement', 'a basement', 'a haunted house', 'my arms', 'my arms, bridal style', 'the Piss Drawer:tm:', 'Northern Undead Asylum', 'Anor Londo', 'Firelink Shrine',
	'the cum sock', 'Lavender Town', 'Yharnam', 'Blood Gulch', 'Brazil', 'the alley behind Tescos', 'Gondor','the New Califonia Republic', 'the New California Republic', 'Kekistan', 'Shangri-La', 'Wakanda', 'Duckburg', 'Mos Eisley', 'Castle Rock',
	'City 17', 'Night City', 'Raccoon City', 'Skyrim', 'Jame\'s bedroom', 'the toilet', 'the cum hamper', 'the piss drawer', 'my rectum', 'your ear', '6 feet underground', 'under AOC\'s feet', 'Atlantis', 'among the trees', 'North Korea',
	'screaming from within the vomit coffin', 'within Shaq\'s intercranial space', 'flailing endlessly through innumerable, spontaneous cycles of death and rebirth', 'within the fibers of Mario\'s mustache',
        'the bathroom at work', 'the trough urinal at the baseball stadium', 'ronald reagan\'s grave'];

// why
var reasons = ['said the earth is flat', 'has a girthy balloon shlong', 'h', 'momma fat', 'said chemtrails are turning people gay',
	'Epstein didn\'t kill himself', 'be shoppin', 'is coming to town', 'is watching you', 'happens for a reason',
	'doesn\'t care about black people', 'benefits the military-industrial complex', 'has never had a dream',
	'isn\'t real', 'thinks 2pac is still alive', '\'s anus is bleeding', 'has been farting alone in flaccid chat for 6 hours', 'said it in secret chat', 
	'ate the burger king foot lettuce', 'is going to kick your ass, and i\'m going to help him', 'is a lizard', 'forgot the question',
	'is an alcoholic', 'wills it to be so.', 'profited off the Iraq war', 'opinions only get worse', 'says GHIF', 'is COOOOOOOOOOOMING', 
	'is a :clown:', 'going to lose subscriber', 'told malarkey', ', dey suffer', 'hates white pipo', 'is SO BEEFY!!', 'killed hooters', 'dont trust you :sob:',
	'is in love with the coco :weary:', 'didn\'t hit that MF LIKE AND SUBSCRIBE BUTTON', 'said poopie is funny', 'said UH OH, stinky', 'rotted', 'is a figment of your imagination',
	'is once again asking you to shut the fuck up', 'is ignoring your pings', 'SUKA BLYAT', 'is a TABLE', 'hardly knows her!', 'can\'t read', 'shidded',
	'has a smol pebis', 'is cooming', 'has abandoned us', 'calls it oven when you of in the cold food of out hot eat the food',
	'has a salty six inch that isn\'t big enough for the both of us', 'is the king of being wrong', 'decreed it', 'does not rove da rord',
	'never reveals her age', 'can has cheesburger', pungent, 'once said 7 eleven hot dogs aren\'t that bad', 'thinks taco bell is mexican food', 
	'thinks del taco is better than taco bell', 'thinks ketchup doesn\'t belong on eggs', 'bought another iPhone', 'is the reason rotisserie chicken from albertsons is so cheap...',
	'says italian food is better than any other food', 'has a perfect fat pussy', 'went to five or six stores instead of just one', 'is afraid to leave his stoop', 'is a republican',
	'joined a pyramid scheme','shouldn\'t be allowed to vote','said squirt is pee','\`shidded and farded and cummed\`', 'INVENTED BEANS', 'is stored in the ass',
	'is stored in the balls', 'deleted it because they did not like it', 'is stored in the soul', 'never returned backdoor sluts 4 to blockbuster :flushed:', 'because la habra 300 bowl is',
	'doesn\'t wash their ass', 'is a registered sex offender in 38 states', 'leg so hot it fry an eg', 'slings a fat hog', 'peed in the sink', 'has a worryingly skinny pussy',
	'has coronavirus', 'went tits up in the stock market', 'was left off bad n boujee', 'got its lime :beers:', 'needs kammies', 'is a masochist',
	'has gone mental, absolutely bonkers', 'never really loved you anyway', 'is secretly an alt-right youtuber with a cartoon animal avatar in a suit',
	'wants to wear your skin', 'smells like gun-girl\'s undies', 'is locked in an ICE internment center', 'doesn\'t care about black people',
	'need drinky', 'is a fuckcrustable', 'is a massive fucktardian cunt waffle of epic proportions', 'got a tutorial from jeff','has dementia','forgot to','has died','worships satan',
	'has 3 nipples','smells like shit','drank redbull and didn\'t get wings', 'really needs a sorking', 'cums first', 'wasn\'t invited to the Roman orgy', 'is off his rocker, innit?',
	'has nipple piercings', 'creamed in the trash', 'do kinda be vibin tho', 'is tokin n strokin, bruv', 'did black face 10 years ago', 'smokes cigarettes without the filters', 'confused ham for string beans', 'thinks green beans belong on pizza',
	'sniffs cocks', 'pood and pidded', 'came in the shower', 'farted at work', 'hates minorities','is too beautiful for this earth','is a binch','sucks','tried to fart but accidentally shit','once slapped a nun','is a ghost','prefers boned wings','is a degenerate','is wanted by INTERPOL','shits standing up','is an undercover FBI agent', 'doesnt wipe', 'hides snacks in their foreskin', 'has ashy skin', 'has no teeth', 'invented green bean pizza', 'draws furries for a living', 'yiffs in their free time', 'is secretly a chud', 'loves the pungent copypasta','types with two fingers', 'goes to sink-pissers anonymous', 'is addicted to crack', 'is addicted to their own farts', 'is a nice person, actually', 'eats with their mouth open', 'microwaves cat food in the office', 'thinks the earth is flat', 'is an antivaxxer', 'is in a coma. wake up please!', 'is illegal', 'only wipes if people are watching', 'is the reason there is always piss on the toilet seat', 'clogged the toilet', 'is the zodiac killer', 'wishes they could feel pain', 'has diarrhea', 'is gassy', 'is a bigg dummy', 'has a sex tape', 'is ben shapiro\'s wife', 'sucks eggs', 'walks too slowly in public', 'is Q', 'crop dusted some old guy reading the paper', 'shouldn\'t have trusted that fart', 'flew to cancun', 'is le epic redditor extraordinaire mlady', 'eats kool aid pickles', 'denies the holocaust', 'is the imposter', 'is lookin pretty sus ngl', 'is amogus', 'has night vision', 'isn\'t allowed to fart', 'will NOT be coming back to this establishment','spilled the cum jar','cannot be arsed to care', 'is a serial killer', 'is stinky', 'is your real dad', 'is cursed to edge for eternity'];

var ballsizes = ['large', 'small', 'medium', 'puny', 'gigantic', 'average', 'incongruous', 'nice :thumbsup:', ':b:ig', 'immense', 'voluptuous', 'h',
    'bigger than I\'d like :/', 'smaller than I\'d like :/', 'vast', 'globular', 'eternal', '*just right*', 'normal', '¡Sabado Gigante!', 'narrow', 'wide', 'petite', 'insignificant', 
    'short', ':ok:', 'smallish', 'XXL', 'XXS', 'big-boned', 'king size', 'FAT', 'mediocre', 'unexceptional', 'immeasurable', 'trivial', 'intermediate', 'passable', 
    'regular', 'tainted', 'common', '12 inches', `${huh}`, '1 foot', '5 & 1/2 centimeters', 'futuristic', 'macho', '4 yards', '2 meters', ':fire::100::fire::100::fire::100:','thicc',
    'microscopic', 'gargantuan', ':flushed:', 'assertive', 'reptilian', 'ghastly', 'delightful', 'debonair', 'homely', 'nonexistent','left: 15cm, right: 1cm', '1mm','1 in.', '3cm',
    'about that of a golf ball', 'Epstein didn\'t kill himself', 'too big to handle', 'just right', 'ordinary', 'unwieldy', 'embarrassing', pungent, 'cubic', 'shriveled', 'that of a BEAN',
    'six of one, half dozen of the other', 'an acre', 'US Men\'s 11', 'UK Women\'s 7 & 1/2', 'a lima bean', 'unusual', 'gamer sized :video_game:', 'amassed',
    'in South Carolina until 10/12','husky', 'big and tall', 'fine', 'sizeable', 'beach ball', ':chart_with_upwards_trend:', ':chart_with_downwards_trend:',
    'boomer-sized', 'minute', 'old-fashioned', 'frail', 'nutty', 'broad', 'crooked', 'euclidean', 'obtuse', 'portable', 'stubby', 'insufficient',
    'plump', 'corn-fed', 'flabby', 'opulent', 'liberal', 'confusing', 'questionable', 'lacking self-confidence', 'uncertain', 'meager',
    'lacking quality', 'free', 'enslaved', 'distinguished', 'vegan', 'poignant'];

var allEmoji = ["🅰️","🅱️","🅾️","🅿️","🆎","🆑","🆒","🆓","🆔","🆕","🆖","🆗","🆘","🆙","🌂","🌃","🌄","🌅","🌆","🌇","🌈","🌉","🌊","🌋","🌌",
	"🌍","🌐","🌑","🌒","🌕","🌙","🌚","🌛","🌜","🌝","🌞","🌟","🌠","🌡️","🌤️","🌥️","🌦️","🌧️","🌨️","🌩️","🌪️","🌫️","🌬️","🌭","🌮","🌯","🌰","🌱","🌲","🌳","🌴","🌵","🌶️","🌷","🌸","🌹","🌺","🌻","🌼","🌽","🌾","🌿","🍀","🍁",
	"🍂","🍃","🍄","🍅","🍆","🍇","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍏","🍐","🍑","🍒","🍓","🍔","🍕","🍖","🍗","🍘","🍙","🍚","🍛","🍜","🍝","🍞","🍟","🍠","🍡","🍢","🍣","🍤","🍥","🍦","🍧","🍨","🍩","🍪","🍫","🍬","🍭",
	"🍮","🍯","🍰","🍱","🍲","🍳","🍴","🍵","🍶","🍷","🍸","🍹","🍺","🍻","🍼","🍽️","🍾","🍿","🎀","🎁","🎂","🎃","🎄","🎅","🎆","🎇","🎈","🎉","🎊","🎋","🎌","🎍","🎎","🎏","🎐","🎑","🎒","🎓","🎖️","🎗️","🎙️","🎚️","🎛️","🎞️",
	"🎟️","🎠","🎡","🎢","🎣","🎤","🎥","🎦","🎧","🎨","🎩","🎪","🎫","🎬","🎭","🎮","🎯","🎰","🎱","🎲","🎳","🎴","🎵","🎶","🎷","🎸","🎹","🎺","🎻","🎼","🎽","🎾","🎿","🏀","🏁","🏌️","🏍️","🏎️","🏏","🏐","🏑","🏒","🏓","🏔️",
	"🏕️","🏖️","🏗️","🏘️","🏙️","🏚️","🏛️","🏜️","🏝️","🏞️","🏟️","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏧","🏨","🏩","🏪","🏫","🏬","🏭","🏮","🏯","🏰","🏳️‍🌈","🏴","🏵️","🏷️","🏸","🏹","🏺","🐀","🐈","🐉","🐊","🐋","🐌","🐍","🐎",
	"🐏","🐐","🐑","🐒","🐓","🐔","🐕‍🦺","🐕","🐖","🐗","🐘","🐙","🐚","🐛","🐜","🐝","🐞","🐟","🐠","🐡","🐢","🐣","🐤","🐥","🐦","🐧","🐨","🐩","🐪","🐫","🐬","🐭","🐮","🐯","🐰","🐱","🐲","🐳","🐴","🐵","🐶","🐷","🐸",
	"🐹","🐺","🐻","🐼","🐽","🐾","🐿️","👀","👁‍🗨","👁️","👃","👄","👅","👆","👈","👋","👌","👍","👏","👐","👑","👒","👓","👔","👕","👖","👗","👘","👙","👚","👛","👜","👝","👞","👟","👠","👡","👢","👣","👤","👥","👹","👺",
	"👻","👼","👽","👾","👿","💀","💃","💄","💅","💆","💇‍♀️","💇‍♂️","💇","💈","💉","💊","💋","💌","💍","💎","💏","💐","💑","💒","💓","💔","💕","💖","💗","💘","💙","💚","💛","💜","💝","💞","💟","💠","💡","💢","💣","💤",
	"💥","💦","💧","💨","💩","💪","💫","💬","💭","💮","💯","💰","💱","💲","💳","💴","💵","💶","💷","💸","💹","💺","💻","💼","💽","💾","💿","📀","📁","📂","📃","📄","📅","📆","📇","📈","📉","📊","📋","📌","📍","📎","📏",
	"📐","📑","📒","📓","📔","📕","📖","📗","📘","📙","📚","📛","📜","📝","📞","📟","📠","📡","📢","📣","📤","📥","📦","📧","📨","📩","📪","📫","📬","📭","📮","📯","📰","📱","📲","📳","📴","📵","📶","📷","📸","📹","📺",
	"📻","📼","📽️","📿","🔀","🔁","🔂","🔃","🔄","🔅","🔆","🔇","🔈","🔉","🔊","🔋","🔌","🔍","🔎","🔏","🔐","🔑","🔒","🔓","🔔","🔕","🔖","🔗","🔘","🔙","🔚","🔛","🔜","🔝","🔞","🔟","🔠","🔡","🔢","🔣","🔤","🔥","🔦",
	"🔧","🔨","🔩","🔪","🔫","🔬","🔭","🔮","🔯","🔰","🔱","🔲","🔳","🔴","🔵","🔶","🔷","🔸","🔹","🔺","🔻","🔼","🔽","🕉️","🕊️","🕋","🕌","🕍","🕎","🕐","🕯️","🕰️","🕵️‍♀️","🕵️‍♂️","🕵️","🕶️","🕷️","🕸️","🕺","🖇️","🖐️","🖤",
	"🖥️","🖨️","🖱️","🖲️","🖼️","🗂️","🗃️","🗄️","🗑️","🗒️","🗓️","🗜️","🗝️","🗞️","🗡️","🗣️","🗨️","🗯️","🗳️","🗺️","🗻","🗼","🗽","🗾","🗿","😀","😁","😂","😃","😄","😅","😆","😇","😈","😉","😊","😋","😌","😍","😎","😏","😐","😑",
	"😒","😓","😔","😕","😖","😗","😘","😙","😚","😛","😜","😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳","😴","😵","😶","😷","😸","😹","😺","😻","😼",
	"😽","😾","😿","🙀","🙁","🙂","🙃","🙄","🙅‍♀️","🙅‍♂️","🙅","🙆‍♀️","🙆‍♂️","🙆","🙇‍♀️","🙇‍♂️","🙇","🙈","🙉","🙊","🙋‍♀️","🙋‍♂️","🙋","🙌","🙍‍♀️","🙍‍♂️","🙍","🙎‍♀️","🙎‍♂️","🙎","🙏","🚀","🚁","🚂","🚃","🚄",
	"🚅","🚆","🚇","🚈","🚉","🚊","🚋","🚌","🚍","🚎","🚏","🚐","🚑","🚒","🚓","🚔","🚕","🚖","🚗","🚘","🚙","🚚","🚛","🚜","🚝","🚞","🚟","🚠","🚡","🚢","🚣","🚤","🚥","🚦","🚧","🚨","🚩","🚪","🚫","🚬","🚭","🚮","🚯",
	"🚰","🚱","🚲","🚳","🚵‍♀️","🚵‍♂️","🚵","🚶‍♀️","🚶‍♂️","🚶","🚷","🚸","🚹","🚺","🚻","🚼","🚽","🚾","🚿","🛀","🛁","🛂","🛃","🛄","🛅","🛌","🛍️","🛎️","🛏️","🛐","🛑","🛒","🛕","🛠️","🛡️","🛢️","🛣️","🛤️","🛥️",
	"🛩️","🛫","🛬","🛰️","🛳️","🛴","🛵","🛶","🛷","🛸","🛹","🛺","🛻","🛼","🟠","🟡","🟢","🟣","🟤","🟥","🟦","🟧","🟨","🟩","🟪","🟫","🤍","🤏","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗","🤘","🤙","🤚","🤛","🤝","🤞","🤟","🤠",
	"🤡","🤢","🤣","🤤","🤥","🤦‍♀️","🤦‍♂️","🤦","🤧","🤨","🤩","🤪","🤫","🤬","🤭","🤮","🤯","🤿","🥀","🥁","🥂","🥃","🥄","🥅","🥇","🥈","🥉","🥊","🥋","🥌","🥍","🥎","🥏","🥐","🥑","🥒","🥓","🥔","🥕","🥖","🥗","🥘",
	"🥙","🥚","🥛","🥜","🥝","🥞","🥟","🥠","🥡","🥢","🥣","🥤","🥥","🥦","🥧","🥨","🥩","🥪","🥫","🥬","🥭","🥮","🥯","🥰","🥱","🥲","🥳","🥴","🥵","🥶",
	"🧑","🧕","🧚","🧜‍♀️","🧝‍♀️","🧝‍♂️","🧝","🧞‍♀️","🧞‍♂️","🧞","🧟‍♀️","🧠","🧡","🧢","🧣","🧤","🧥","🧦","🧧","🧨","🧩","🧪","🧫","🧬","🧭","🧮","🧯","🧰","🧱","🧲","🧳","🧴","🧵","🧶","🧷","🧸","🧹","🧺","🧻",
	"🧼","🧽","🧾","🧿","🩰","🩱","🩲","🩳","🩴","🩸","🩹","🩺","🪀","🪁","🪂","🪐","🪑","🪒","🪓","🪔","‼️","⁉️","™️","ℹ️","↔️","⏰","⏱️","⏲️","⏳","☀️","☁️",
	"☂️","☃️","☄️","☎️","☑️","☔️","☕️","☘️","☝️","☠️","☢️","☣️","☦️","☪️","☮️","☯️","☸️","☹️","☺️","♀️","♂️","♟️","♠️","♣️","♥️","♦️","♨️","♻️","♾","♿️","⚒️",
	"⚓️","⚔️","⚕️","⚖️","⚗️","⚙️","⚛️","⚜️","⚠️","⚡️","⚧️","⚪️","⚫️","⚰️","⚱️","⚽️","⚾️","⛄️","⛅️","⛈️","⛏️","⛑️","⛓️","⛔️","⛰️","⛱️","⛳️","⛴️","⛷️","⛺️","✂️","✅","✈️","✉️",
	"✊","✋","✌️","✍️","✏️","✒️","✔️","✖️","✝️","✡️","✨","✳️","✴️","❄️","❇️","❌","❎","❓","❗️","❣️","❤️","➕","➖","➗","➡️","➰","➿","⤴️","⤵️","*⃣","⬅️","⬆️","⬇️","⬛️","⬜️","⭕️"];


// copypasta strings
let wtf = `What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.`;
let cummies = `Just me and my :two_hearts:daddy:two_hearts:, hanging out I got pretty hungry:eggplant: so I started to pout :disappointed: He asked if I was down :arrow_down:for something yummy :heart_eyes::eggplant: and I asked what and he said he'd give me his :sweat_drops:cummies!:sweat_drops: Yeah! Yeah!:two_hearts::sweat_drops: I drink them!:sweat_drops: I slurp them!:sweat_drops: I swallow them whole:sweat_drops: :heart_eyes: It makes :cupid:daddy:cupid: :blush:happy:blush: so it's my only goal... :two_hearts::sweat_drops::tired_face:Harder daddy! Harder daddy! :tired_face::sweat_drops::two_hearts: 1 cummy:sweat_drops:, 2 cummy:sweat_drops::sweat_drops:, 3 cummy:sweat_drops::sweat_drops::sweat_drops:, 4:sweat_drops::sweat_drops::sweat_drops::sweat_drops: I'm :cupid:daddy's:cupid: :crown:princess :crown:but I'm also a whore! :heart_decoration: He makes me feel squishy:heartpulse:!He makes me feel good:purple_heart:! :cupid::cupid::cupid:He makes me feel everything a little should!~ :cupid::cupid::cupid: :crown::sweat_drops::cupid:Wa-What!:cupid::sweat_drops::crown:`;

// easy capitalize func
function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

// require settings file
try {
  settings = require('./settings.json');
} catch (e) {
  console.log(`a settings.json file has not been generated. ${e.stack}`);
  process.exit();
}

// log in bot with settings token
function login() {
  if (settings.token) {
    client.login(settings.token);
  } else {
    console.log('Error logging in: There may be an issue with your settings.json file');
  }
}

// start bot
client.on('ready', () => {
  console.log(`Shaq started with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} servers.\n`);
  realshit = client.emojis.cache.get('487855131996585994');
  wut1 = client.emojis.cache.get('431701745329111041');
  wut2 = client.emojis.cache.get('431701745014669314');
  wut3 = client.emojis.cache.get('431701745236967425');
  eyesleft = client.emojis.cache.get('642179113259499571');
  huh = client.emojis.cache.get('431693012788314132');
  idleE = client.emojis.cache.get('817148372057849866');
  pleadah = client.emojis.cache.get('665307736866684968');
  philipL = client.emojis.cache.get('818651366250643466');
  philipR = client.emojis.cache.get('818650382472314911');
  philipC = client.emojis.cache.get('818649301802156094');
  thinkAss = client.emojis.cache.get('813835069780918304');
  amogusE = client.emojis.cache.get('811734705807294574');
  susE = client.emojis.cache.get('811814942939807754');
  lin = client.emojis.cache.get('869621287700537409');
  owner = settings.james;

  var ballsRand = Math.floor((Math.random() * (99 - 1)));
  client.user.setActivity(`with ${ballsRand} balls.`, { type: 'PLAYING' })

  // check for birthdays
  let birthdays = [
    ['7/14', settings.james],
    ['1/9', settings.ysabel],
    ['11/9', settings.jimmy],
    ['5/27', settings.anthony],
    ['8/2', settings.enrique],
    ['9/1', settings.cody],
    ['10/4', settings.olm],
    ['10/23', settings.tyra],
    ['6/10', settings.john],
    ['10/26', settings.liz],
    ['1/11', settings.kacey]
  ];

  //log current date
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  todayIs = month + "/" + day;
  console.log("Today is: "+ todayIs);

  //find birthday
  var bFound = false;
  var bPerson = "";
  for (let i=0;i<birthdays.length;i++){
  if (birthdays[i][0] == todayIs){ bFound = true; bPerson = birthdays[i][1]; break;}
  }

  if(bFound){ client.channels.cache.get('95702402253983744').send(`:confetti_ball: It is <@${bPerson}>\'s birthday today! :confetti_ball:`);}
})

client.on("messageCreate", async message => {

  if(message.author.bot) return;
  if(message.stickers.has('818597355619483688')){ await message.delete().catch(O_o=>{}); console.log('Shitty pog sticker removed.');}

  //if(message.author.presence.status == 'idle' && idle == 1){
  //  message.react(idleE);
  //  return;
  // }

  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(scanAll == 1)
  {
  let args2 = message.content.trim().split(/ +/g);
   if(args2[0] != settings.prefix){
    for (let a=0; a<args2.length; a++)
    {
     if((args2[a].toLowerCase() == 'amogus'))message.react(amogusE);
     else if((args2[a].toLowerCase() == 'sus')) message.react(susE);
     else if((args2[a].toLowerCase() == 'lin')) message.react(lin);
    }
   }
  }

  if(message.content.indexOf(settings.prefix) !== 0) return;

  let pref = settings.prefix;
  const commandList = ['${pref}b', '${pref}ballsize','${pref}why','${pref}y','${pref}uu','${pref}uuu','${pref}howdy','${pref}8]'];

  function sayTTS(speak){
    message.channel.send({ content: speak, tts: true });
    return;
  }


  // begin commands, search for //(command) to find
  switch(command) {
    case 'ms': if(message.author.id != owner){break;} message.channel.send(new Date().getTime() - message.createdTimestamp + " ms"); break;

    case 'memes':
    case 'memelist':
    case 'commands':
    case 'pics':
    case 'pictures':
    case 'commandlist':
    case 'memelist':
      message.channel.send("> Meme responses:\n`Corn`!\n`breasts` - King of Breasts\n`isthatshaq` - Is that Shaq?\n`beans` - Who invented beans??\n`blacked` - on Xmas day?\n`burrito[mug]` - Put Your Burrito In A Mug\n`yallmindifi` - praise the lord?\n`quean` - BEAN QUEAN\n`thinkin` - About Thos Beans\n`consequences` - There. Will. Be. CONSEQUENCES!\n`killed` - This action will kill you immediately.\n`boomer` - OK BOOMER\n`stfuboomer` - STFU boomer.\n`joker` - Dance\n`smoljoker` - Smol joker.\n`doubt` - Doubt\n`head` - i just want some head\n`chicken` - $5 Rotisserie Chicken Albertson's\n`uwu` - UwU\n`boomeralert` - Boomer alert!\n`brains` - more than 1% of our brains\n`deletethis` - Delete this nephew.\n`discusting` - I have kids on here.\n`bitches` - bitches.... help\n`ganghaps` - ganghaps...\n`drums` - time for the Christmas drums\n`guysdied` - the guys have died.\n`oof` - oof size\n`damn` - Damn.\n`lahabra` - la habra 300 bowl is\n`shouldi` - should i jack off\n`helper` - hamburger helper\n`thinkabout` - much to think about\n`1993` - eat hot chip and lie\n`sickfuck` - Ed you SICK FUCK\n`moe` - moe\n`ben` - ben affleck smoking\n`lfg` - LETS FUCKING GOOO\n`thiskills` - This kills the man\n`squidward` - squidward disappointed\n`milkape` - milkape\n`onions` - la habra 300 bowl onions\n`lisa` - lisa cryptic email\n`sork` - who will like to sork my dick\n`no|idontthinkiwill` - No, I dont think I will\n`robert` - robert flushed\n`eggs` - james eggs\n`patrickchains` - patrick in chains\n`islamic` - i am islamic i do not care\n`islam2` - islam 2\n`fatnuts` - remember my balls\n`thenperish` - jame perish\n`trash` - trash cowboy\n`david` - david can't argue\n`wishthatwereme` - god i wish that were me\n`linus` - linus shit eating grin\n`godiwishthatwerelinus` - linus wishing it were him\n`joe` - mighty joe young in tree\n`milk` - the milk testing man\n`humor` - is that an attempt at humor?\n`tim` - tim allen carl marx\n`tommy` - needy drinky\n`suckdry` - when she keeps suckin");
      message.channel.send("`didiask` - oh... did i ask?\n`hitdabricks` - just leave!\n`jeb` - Jeb wins all 538\n`fred` - fred i love lucy\n`eels` - eels\n`bussy` - it can squirt\n`living` - i have never enjoyed living in the world\n`cheam` - cheam creems\n`jose` - jose staring at you\n`doit` - palpatine do it\n`peanut` - heehoo peanut monke\n`monkey` - did not mean to post that monke\n`icecream` - snowflakes why is ice cream mean\n`misogyny` -  your misogyny is showing\n`no2/pointno` - dr manhattan saying no\n`finally` - finally, anything\n`zany` - not me being goofy i-\n`shroom` - origin of shroom wojak\n`borntodie` - world is a fuck\n`sickos` - YES");
      break;

    case 'plex':
      const plexEmoji = client.emojis.cache.get('628993764173807636');
      message.channel.send(`${plexEmoji} IT HAS BEEN 0 DAYS SINCE THE LAST PLEX REFERENCE. ${plexEmoji}`);
      break;

    case 'uwu':
      var uwus = ["(●´∀｀●)","(n˘v˘•)¬","(((( ;°Д°))))","(*~▽~)","(◕‿◕✿)","＼(^▽^＠)ノ"," ლ(╹◡╹ლ)","♥（ﾉ´∀`）","⊙ω⊙",
         "（＠￣∇￣＠）／","(☆^O^☆)", "(★^O^★)", "(☆^ー^☆)", "(´ω｀★)", "＼（Ｔ∇Ｔ）／","ヽ(´ー`)ﾉ", "( ＾∇＾)", 
         "＼( ｀.∀´)／", "(●⌒∇⌒●)", "o(≧∇≦o)", "ヽ(｀◇´)/", "(｡♥‿♥｡)", "(✿ ♥‿♥)", "♥╣[-_-]╠♥",
         "(*´ー`)ノ", "ヽ(‘ー`)ノ", "ヽ(ー_ー )ノ", "ヽ(´～｀；）", "┐(‘～`；)┌", "(∩︵∩)", "(╯︵╰,)", 
         "(╥_╥)", "(╯︵╰,)", "((((；゜Д゜))) ","ヾ(。￣□￣)ﾂ", "ヾ(￣0￣； )ノ", "ヾ(。￣□￣)ﾂ",
         "(~_~;)", "((*゜Д゜)ゞ”", "(･_-｡ )", "⊙﹏⊙", "ミ●ミ", "(-’๏_๏’-)", "(⊙…⊙ )",
         "（ ＾＾）人（＾＾ ）", "(〃⌒▽⌒)八(〃⌒▽⌒〃)八(⌒▽⌒〃)","☆-(ノﾟДﾟ)八(ﾟДﾟ )ノ", "( ｡･_･｡)人(｡･_･｡ )",
         "ヽ(*^ｰ^)人(^ｰ^*)ノ", "(・_・”)／＼(・_・”)", "└(^o^ )Ｘ( ^o^)┘", "ヾ(-_-;)","ヾ( ‘ – ‘*)",
         "(σ-`д･´)", "(｀Д´*)", "（=｀〜´=）", "(ﾒ｀ﾛ´)/", "Ψ(｀▽´)Ψ", "^(#｀∀´)_Ψ",
         "ヘ(_ _ヘ)", "(ﾉ￣д￣)ﾉ", "(;-_-)ノ", "o(-_-;*)", "ﾍ(;´Д｀ﾍ)","(ノ#-_-)ノ", "（~～~）",
         "( ^.^)ノ", "┌（★ｏ☆）┘ └（★ｏ★）┐", "♪(┌・。・)┌", "(＊0＊;)", "(u_u)", "(✖╭╮✖)",
         "(º_º)", "٩(×̯×)۶", "(ñ_ñ)"," (。・・)_且 且_(ﾟ◇ﾟ；)ノﾞ", "(＃´ー´)旦 且_(・_・ ) ",
         " ー( ´ ▽ ` )ﾉ", "ヽ(๏∀๏ )ﾉ ", "(◑‿◐)", "ლ(́◉◞౪◟◉‵ლ)", "(*~▽~)", "(∩▂∩)",
         "(¬‿¬)", "(n˘v˘•)¬", "(;*△*;)","(∩︵∩)", "(╯︵╰,)", "(╥_╥)", "(╯︵╰,)",
         "＼(=^‥^)/’`", "( =①ω①=)", "d(=^･ω･^=)b", "(=ＴェＴ=)", "(=;ェ;=)", "(=ｘェｘ=)",
         "(=；ェ；=)", "(=｀ェ´=)","(⊙_◎)", "ಠ_ರೃ", " (ﾉ_ _)ﾉ", "( °̥̥̥˟°̥̥̥ )", "(ㅇㅅㅇ❀)","≖‿≖"];

      var uwuRand = Math.floor((Math.random() * (uwus.length - 1)));
      message.channel.send(uwus[uwuRand]);
      break;

    case 'breasts':
      message.channel.send({files: ["img/kingofbreasts.jpg"]});
      break;
    case 'discusting':
      message.channel.send({files: ["img/discusting.png"]});
      break;
    case 'guysdied':
    case 'theguys':
    case 'theguyshavedied':
    case 'died':
      message.channel.send({files: ["img/guysdied.png"]});
      break;
    case 'pogress':
      message.channel.send({files: ["img/pogress.png"]});
      break;
    case 'thiskills':
    case 'killstheman':
    case 'thiskillstheman':
      message.channel.send({files: ["img/thiskills.png"]});
      break;
    case 'bitches':
    case 'bitcheshelp':
      message.channel.send({files: ["img/bitcheshelp.jpg"]});
      break;
    case 'ganghaps':
      message.channel.send({files: ["img/ganghaps.jpg"]});
      break;
    case 'nephew':
    case 'deletethis':
      message.channel.send({files: ["img/deletenephew.png"]});
      break;
    case 'brains':
    case 'brain':
      message.channel.send({files: ["img/brains.png"]});
      break;
    case 'sork':
    case 'sorkmydick':
      message.channel.send({files: ["img/sork.png"]});
      break;
    case 'lisa':
    case 'lisasimpson':
      message.channel.send({files: ["img/lisa.png"]});
      break;
    case 'ben':
    case 'bensmoke':
    case 'benalcony':
      message.channel.send({files: ["img/ben.png"]});
      break;
    case 'chicken':
      message.channel.send({files: ["img/5chicken.png"]});
      break;
    case 'helper':
      message.channel.send({files: ["img/helper.jpg"]});
      break;
    case 'lahabra':
    case 'lahabra300':
    case 'lahabra300bowl':
    case '300bowl':
      message.channel.send({files: ["img/lahabra.png"]});
      break;
    case 'onion':
    case 'onions':
      message.channel.send({files: ["img/onions.jpg"]});
      break;
    case 'shouldi':
      message.channel.send({files: ["img/shouldi.jpg"]});
      break;
    case 'oof':
      message.channel.send({files: ["img/oof.jpg"]});
      break;
    case 'damn':
      message.channel.send({files: ["img/damn.jpg"]});
      break;
    case 'jeff':
    case 'tutorials':
    case 'jefftutorials':
      message.channel.send({files: ["img/jefftutorials.png"]});
      break;
    case '1993':
    case 'hotchip':
      message.channel.send({files: ["img/1993.jpg"]});
      break;
    case 'thinkabout':
    case 'muchtothink':
    case 'muchtothinkabout':
    case 'muchthink':
    case 'much':
    case 'think':
    case 'tothink':
    case 'pictureofthetweetbybillyraycyruswherehesaysmuchtothinkaboutandlookskindasad':
      message.channel.send({files: ["img/muchtothink.jpg"]});
      break;
    case 'squidward':
    case 'squidlook':
    case 'squid':
      message.channel.send({files: ["img/squidward.png"]});
      break;
    case 'milkape':
      message.channel.send({files: ["img/milkape.png"]});
      break;
    case 'isthatshaq':
      message.channel.send({files: ["img/sarahshaq.png"]});
      message.channel.send({files: ["img/isthatshaq.png"]});
      break;
    case 'beans':
      message.channel.send({files: ["img/inventedbeans.png"]});
      break;
    case 'moe':
      message.channel.send({files: ["img/moe.jpg"]});
      break;
    case 'boomer':
      message.channel.send({files: ["img/okboomer.png"]});
      break;
    case 'blacked':
      message.channel.send({files: ["img/blacked.png"]});
      break;
    case 'drums':
      message.channel.send({files: ["img/christmasdrums.jpg"]});
      break;
    case 'joker':
      message.channel.send({files: ["img/joker.jpg"]});
      break;
    case 'smoljoker':
      message.channel.send({files: ["img/smoljoker.png"]});
      break;
    case 'head':
      message.channel.send({files: ["img/head2.jpg"]});
      break;
    case 'burritomug':
    case 'burrito':
      message.channel.send({files: ["img/burritomug.png"]});
      break;
    case 'yallmindifi':
    case 'praisethelord':
      message.channel.send({files: ["img/praisethelord.gif"]});
      break;
    case 'quean':
      message.channel.send({files: ["img/quean.png"]});
      break;
    case 'thinkin':
    case 'thinkinaboutbeans':
    case 'beanthink':
    case 'beanthought':
    case 'thinkingabout':
    case 'beanthinkin':
    case 'thinkbeans':
    case 'beanthoughts':
    case 'thinking':
      message.channel.send({files: ["img/thinkinaboutbeans.png"]});
      break;
    case 'consequences':
      message.channel.send("https://youtu.be/FSt1ptsOjL0");
      break;
    case 'doubt':
      message.channel.send({files: ["img/doubt.png"]});
      break;
    case 'killed':
    case 'immediately':
      message.channel.send({files: ["img/immediatelykillyou.png"]});
      break;
    case 'stfuboomer':
      message.channel.send({files: ["img/stfuboomer.jpg"]});
      break;
    case 'boomeralert':
      message.channel.send({files: ["img/boomeralert.gif"]});
      break;
    case 'sickfuck':
    case 'ed':
      message.channel.send({files: ["img/ed.png"]});
      break;
    case 'lfg':
      message.channel.send({files: ["img/letsfuckinggo.jpg"]});
      break;
    case 'gun':
    case 'ishouldbuy':
    case 'fascist':
    case 'fascistslob':
      message.channel.send({files: ["img/buygun.png"]});
      break;
    case 'snoopwho':
      message.channel.send({files: ["img/snoopwho.gif"]});
      break;
    case 'no':
    case 'idontthinkiwill':
    case 'captainamericabuthesoldandhessayingnoidontthinkiwill':
      message.channel.send({files: ["img/idontthinkiwill.png"]});
      break;
    case 'robert':
      message.channel.send({files: ["img/robert.jpg"]});
      break;
    case 'eggs':
    case 'jeggs':
      message.channel.send({files: ["img/jeggs.png"]});
      break;
    case 'david':
      message.channel.send({files: ["img/davidedit.png"]});
      break;
    case 'white':
    case 'brian':
    case 'letsengage':
      message.channel.send ({files: ["img/david.png"]});
      break;
    case 'fajitas':
    case 'sadwife':
    case 'shreddedcheese':
    case 'fajita':
      message.channel.send ({files: ["img/fajitas.jpg"]});
      break;
    case 'patrickchain':
    case 'patrickchains':
    case 'patrickbound':
    case 'patrick':
    case 'crucifyme':
    case 'patrickmock':
      message.channel.send ({files: ["img/patrickchain.png"]});
      break;
    case 'islamic':
    case 'islam':
    case 'donotcare':
    case 'islamicbrother':
      message.channel.send ({files: ["img/islamic.jpg"]});
      break;
    case 'islam2':
    case 'islamic2':
      message.channel.send ({files: ["img/islam2.png"]});
      break;
    case 'fatnuts':
    case 'remembermyballs':
      message.channel.send ({files: ["img/fatnuts.jpg"]});
      break;
    case 'thenperish':
    case 'perish':
    case 'jameperish':
      message.channel.send ({files: ["img/thenperish.jpg"]});
      break;
    case 'trash':
    case 'trashboy':
    case 'belongsinthetrash':
    case 'trashcowboy':
      message.channel.send ({files: ["img/trashboy.png"]});
      break;
    case 'iwish':
    case 'wish':
    case 'godiwish':
    case 'godiwishthat':
    case 'wishthatwereme':
    case 'godiwishthatwereme':
      message.channel.send ({files: ["img/wereme.jpg"]});
      break;
    case 'linus':
    case 'shiteater':
    case 'wellberightback':
      message.channel.send ({files: ["img/linus.jpg"]});
      break;
    case 'godiwishthatwerelinus':
    case 'wishthatwerelinus':
    case 'godiwishthatwereshit':
      message.channel.send ({files: ["img/godiwishlinus.png"]});
      break;
    case 'e':
    case 'markiplier':
      message.channel.send ({files: ["img/e.jpg"]});
      break;
    case 'joe':
    case 'joeyoung':
    case 'mightyjoeyoung':
      message.channel.send ({files: ["img/joe.png"]});
      break;
    case 'milk':
    case 'milktesting':
    case 'milktestingman':
      message.channel.send ({files: ["img/milk.jpg"]});
      break;
    case 'attempthumor':
    case 'humor':
      message.channel.send ({files: ["img/humor.jpg"]});
      break;
    case 'yikes':
    case 'yeeeikes':
    case 'yeeeeikes':
    case 'yeeikes':
      message.channel.send ({files: ["img/yikes.png"]});
      break;
    case 'tim':
    case 'carlmarx':
    case 'timallen':
      message.channel.send ({files: ["img/tim.png"]});
      break;
    case 'tommy':
    case 'tommyneedy':
    case 'drinky':
      message.channel.send ({files: ["img/tommy.png"]});
      break;
    case 'suckdry':
    case 'keepsuckin':
    case 'whenyounutandshekeepssuckin':
    case 'whenyounutandshekeepssucking':
    case 'nut':
    case 'keepsucking':
    case 'nutbutkeepsucking':
      message.channel.send ({files: ["img/suckdry.png"]});
      break;
    case 'cummies':
      message.channel.send(`${cummies}`);
      break;
    case 'oven':
      let ovenMessage='why do they call it oven when you of in the cold food of out hot eat the food';
      sayTTS(ovenMessage);
      break;
    case 'mormon':
    case 'mormonism':
      message.channel.send('https://youtu.be/1YcC-pK5zMg');
      break;
    case 'goblin':
      message.channel.send('https://youtu.be/TvgsGBzuurU');
      break;
    case 'biden':
    case 'bidensmile':
      message.channel.send ({files: ["img/bidensmile.jpg"]});
      break;
    case 'biden2':
      message.channel.send ({files: ["img/bidenmagik.png"]});
      break;
    case 'eg':
      message.channel.send ({files: ["img/eg.jpg"]});
      break;
    case 'oiI':
    case 'oii':
    case 'oil':
      message.channel.send ('https://twitter.com/marthastewart/status/326365867111772160');
      break;
    case 'fatbitch':
    case 'ineedafatbitch':
    case 'dawkins':
      message.channel.send ('https://twitter.com/RichardDawkins/status/389432783304548352');
      break;
    case 'scenario':
    case 'situation':
    case 'notagoodscenario':
    case 'notagoodsituation':
    case 'goodscenario':
    case 'itsnotagoodscenario':
    case 'itsnotagoodsituation':
      message.channel.send ({files: ["img/scenario.png"]});
      break;
    case 'oldladygun':
    case 'grandmagun':
    case 'shut':
    case 'oldwomangun':
      message.channel.send ({files: ["img/oldladygun.png"]});
      break;
    case 'didiask':
    case 'ask':
    case 'ohdidiask':
      message.channel.send ({files: ["img/didiask.jpg"]});
      break;
    case 'hitdabricks':
    case 'bricks':
    case 'justleave':
    case 'leave':
      message.channel.send ({files: ["img/bricks.jpg"]});
      break;
    case 'jeb':
    case 'jebbush':
    case 'jebwins':
      message.channel.send ({files: ["img/jeb.jpeg"]});
      break;
    case 'fred':
      message.channel.send ({files: ["img/fred.jpeg"]});
      break;
    case 'eels':
      message.channel.send ({files: ["img/eels.png"]});
      break;
    case 'bussy':
      message.channel.send ({files: ["img/bussy.jpg"]});
      break;
    case 'bread':
    case 'worsebread':
      message.channel.send ('https://twitter.com/gloomfather/status/1141347662333140994?s=20');
      break;
    case 'livingintheworld':
    case 'living':
    case 'neverenjoyedliving':
    case 'ihaveneverenjoyedlivingintheworld':
      message.channel.send ({files: ["img/livingintheworld.jpg"]});
      break;
    case 'cheamcreems':
    case 'cheam':
    case 'cheem':
    case 'creems':
      message.channel.send ({files: ["img/cheam.jpg"]});
      break;
    case 'jose':
      message.channel.send ({files: ["img/jose.png"]});
      break;
    case 'doit':
      message.channel.send ({files: ["img/doit.gif"]});
      break;
    case 'pb':
    case 'peanutbutter':
      message.channel.send ({files: ["img/pb.png"]});
      break;
    case 'peanut':
    case 'heehoo':
    case 'heehoopeanut':
      message.channel.send ({files: ["img/peanut.jpg"]});
      break;
    case 'monkey':
      message.channel.send ({files: ["img/monkey.png"]});
      break;
    case 'icecream':
    case 'snowflake':
      message.channel.send ({files: ["img/icecream.png"]});
      break;
    case 'misogyny':
    case 'misogynyisshowing':
    case 'misogynyshowing':
      message.channel.send ({files: ["img/mysogyny.png"]});
      break;
    case 'nopoint':
    case 'pointno':
    case 'no2':
      message.channel.send ({files: ["img/nopoint.png"]});
      break;
    case 'anything':
    case 'finallyanything':
    case 'finally':
      message.channel.send ({files: ["img/anything.png"]});
      break;
    case 'spinch':
      message.channel.send ({files: ["img/spinch.jpg"]});
      break;
    case 'zany':
    case 'notmebeing':
    case 'goofy':
      message.channel.send ({files: ["img/zany.jpg"]});
      break;
    case 'shroom':
    case 'kys':
    case 'shrigma':
      message.channel.send ({files: ["img/shroom.jpg"]});
      break;
    case 'borntodie':
    case 'worldisafuck':
    case 'worldisfuck':
    case 'trashman':
    case 'deadcops':
      message.channel.send ({files: ["img/worldfuck.png"]});
      break;
    case 'sickos':
      message.channel.send ({files: ["img/sickos.png"]});
      break;
    case 'shityourself':
    case 'sys':
      message.channel.send ({files: ["img/shityourself.png"]});
      break;
    case 'corn':
    case 'owned':
    case 'notowned':
      message.channel.send ('https://twitter.com/dril/status/134787490526658561?lang=en');
      break;

// zzzzz endofmeme newest latest recent


// setrole
    case 'setrole':
      let newRole = args.join(" ");
      let roleToChange = message.member.roles.highest;
      roleToChange.setName(newRole);
      message.channel.send(`Role changed to ${newRole}.`);
      console.log(`Role changed.`);
      break;

    case 'disable':
      if (message.author.id != owner) break;
      let commandD = args.join(" ");
      if (commandD == 'idle'){idle=0; message.channel.send('idle disabled.');}
      if (commandD == 'scanall'){scanAll=0; message.channel.send('ScanAll disabled.');}
      if (commandD == 'tts'){ttsE = false; message.channel.send('tts is disabled');}
      break;

    case 'enable':
      if (message.author.id != owner) break;
      let commandE = args.join (" ");
      if (commandE == 'idle'){idle=1; message.channel.send('idle enabled.');}
      if (commandE == 'scanall'){scanAll=1; message.channel.send('ScanAll enabled.');}
      if (commandE == 'tts'){ttsE = true; message.channel.send('tts is enabled');}
      break;

    case 'status':
      if (message.author.id != owner) break;
      let idleStatus = false; if(idle==1){idleStatus = true;}
      let ttsStatus = ttsE;
      let scanAllStatus = false;
      if(scanAll == 1){scanAllStatus = true;}

      message.channel.send(`Idle: ${idleStatus}\nScan all msgs: ${scanAllStatus}\nTTS: ${ttsStatus}`);
      break;

    // poll
/*    case 'poll_deprecated':
      let endOfQuestion = 1 + args.indexOf(';');
      if(args.indexOf(';') == -1){ endOfQuestion = 1 + args.indexOf(':');};
      	if (endOfQuestion == -1 || endOfQuestion === args.length) {
	    message.delete().catch(O_o=>{});
	    message.channel.send('Correct format is: `=poll your question ; option, option, ...` (note the spacing!!)');
	    break;
	    };
      let qLength = endOfQuestion - 1;
      let qArray = args.slice(0,qLength);
      let question = qArray.join(" ");
      let newArgs = args.slice(endOfQuestion);
      let tempString = newArgs.join(' ');
      let pollAnswers = tempString.split(',');
      let pollNum = pollAnswers.length;
	if (pollNum <2){
	    message.delete().catch(O_o=>{});
	    message.channel.send('Correct format is: `=poll ask your question here ; option, option, option, etc` (note the spacing!!)');
	    break;
            };
      let pollTS = new Date().toLocaleString('en-US', {timeZone: 'America/Los_Angeles'});

      for (let w=0;w<pollNum;w++){
        pollAnswers[w] = pollAnswers[w].trim();
      }

      let pollEmoji = allEmoji;
      for (let p = pollEmoji.length -1; p > 0; p--){
        const j = Math.floor(Math.random() * p);
        const temp = pollEmoji[p];
        pollEmoji[p] = pollEmoji[j];
        pollEmoji[j] = temp;
       }

      let color = message.member.displayHexColor;
      let pAuthor = message.author.username + ' asks...';
      let authorAvi = message.author.avatarURL();
      let pollEmbed = new Discord.MessageEmbed()
        .setAuthor(pAuthor)
        .setColor(color)
        .setThumbnail(authorAvi)
        .setTitle(question)
        .setDescription(' ~\n\n')
        .setTimestamp(pollTS);
        for(let k = 0;k<pollNum;k++)
         {
          pollEmbed.addField(pollEmoji[k],pollAnswers[k]);
         }
      message.delete().catch(O_o=>{});
      message.channel.send(pollEmbed).then(pollEmbed => {
       for(let b=0;b<pollNum;b++){
         pollEmbed.react(pollEmoji[b]);
       }
      })
      break;
*/
    case 'vid':
    case 'save':
    case 'link':
      if(!message.content.includes("http")){ message.delete().catch(O_o=>{}); break;}
      let vidTS = new Date().toLocaleString('en-US', {timeZone: 'America/Los_Angeles'});
      let vidChn = message.channel.id;
      let authorTS = `\`` + message.author.username + ` at ` + vidTS + ` in\`` + `<#${vidChn}>\n\n`;
      args.unshift(authorTS);
      let vidMessage = args.join(" ");
      vidMessage.trim();
      client.channels.cache.get('866833451890245682').send(vidMessage); console.log('Video saved.');
    break;

    case 'music':
    case 'song':
      if(!message.content.includes("http")){ message.delete().catch(O_o=>{}); break;}
      let songTS = new Date().toLocaleString('en-US', {timeZone: 'America/Los_Angeles'});
      let songChn = message.channel.id;
      let authorMusicTS = `\`` + message.author.username + ` at ` + songTS + ` in\`` + `<#${songChn}>\n\n`;
      args.unshift(authorMusicTS);
      let songMessage = args.join(" ");
      songMessage.trim();
      client.channels.cache.get('897315648559001620').send(songMessage); console.log('Song saved.');
    break;

    case 'random':
    case 'rand':
    case 'roll':
      let input = args.join(" ");
      let rollTop = 0;
      if(isNaN(input)){ message.delete().catch(O_o=>{}); break;}
      rollTop = parseInt(args[0]);
      message.channel.send("Roll 1 - " + rollTop + " = " + Math.floor((Math.random() * rollTop) + 1) + ".");
      break;

    // howdy
    case 'howdy':
      let cowboyphrases = ['Howdy partner \:cowboy:', 'H\'lo :cowboy:', 'This town ain\'t big enough for the two of us :cowboy:', '_a tumbleweed rolls by_', 'It\'s high noon :cowboy:'];
      let howdyN = Math.floor((Math.random() * (cowboyphrases.length - 1)));
      let howdyMsg = cowboyphrases[howdyN]; sayTTS(howdyMsg);
      break;

    // when
    case 'when':
      var num = Math.floor((Math.random() * (times.length - 1)));
      let whenMsg = capitalize(times[num]) + '.'; sayTTS(whenMsg);

      break;

    // where
    case 'where':
      let randWhere = Math.floor((Math.random() * (locations.length - 1)));
      let whereMsg = capitalize(locations[randWhere]) + '.'; sayTTS(whereMsg);
      break;

    // what
    case 'what':
      var needsIs;
      let whatMsg = "";
      if(args[0]=='is') {needsIs=1;}
    case 'whatis':
      if(args[0]=='is') {args.shift();}
      let what2 = Math.floor((Math.random() * (things.length - 1)));
      if (typeof args[0] === 'undefined') { whatMsg = subject[what2] + '.'; sayTTS(whatMsg); break;}
       for (b=0; b<args.length; b++)
      {
        if(args[b]==="my"){ args[b]="your";}
        else if(args[b].toLowerCase() ==="your"){ args[b]="my";}
        else if(args[b].toLowerCase() ==="i"){ args[b]="you";}
        else if(args[b].toLowerCase() ==="you"){ args[b]="me";}
	else if(args[b].toLowerCase() ==="me"){ args[b]="you";}
      }

      let whatis = args.join(" ");
      while(whatis.charAt(whatis.length-1)=="?"){whatis=whatis.substring(0, whatis.length-1);}
      if(needsIs==1){whatMsg = capitalize(things[what2]) + " is " + whatis + "."; sayTTS(whatMsg); break;}
      else whatMsg = capitalize(things[what2]) + " " + whatis + "."; sayTTS(whatMsg);
      break;

    // say
    case 'say':
      let sayMsg = args.join(" ");
      await message.delete().catch(O_o=>{}); sayTTS(sayMsg);
    break;

    // ballsize bs
    case 'size':
      ballCommand = false;
    case 'ballsize':
    case 'bs':
      var rand = Math.floor((Math.random() * (ballsizes.length - 1)));
      let sayBalls;
      if(typeof args[0] === 'undefined' || args[0].toLowerCase() === "my") {args[0] = ''; let beingSized = args.join(" "); if(beingSized !== ''){beingSized = beingSized += "'s";} if(ballCommand == true){ sayBalls = `Your${beingSized} ball size is ` + ballsizes[rand] +"."; sayTTS(sayBalls);return;} if(ballCommand == false){ sayBalls = `Your${beingSized} size is ` + ballsizes[rand] +"."; sayTTS(sayBalls); return;} ballCommand = true; return;}
      else if(args[0].toLowerCase() === "your" || args[0].toLowerCase() === "shaq's" || args[0].toLowerCase() === "shaqs") {args[0] = "My";}
      else if(args[0].toLowerCase() === "shaq" && typeof args[1] === 'undefined' && ballCommand == true) {sayBalls = "My ball size is " + ballsizes[rand] + "."; sayTTS(sayBalls); ballCommand = true; return;}
      else if(args[0].toLowerCase() === "shaq" && typeof args[1] === 'undefined' && ballCommand == false) {sayBalls = "My size is " + ballsizes[rand] + "."; sayTTS(sayBalls); ballCommand = true; return;}
      let beingSized = args.join(" ");
      if(ballCommand == true){sayBalls = beingSized + "'s ball size is " + ballsizes[rand] + "."; sayTTS(sayBalls);}
      if(ballCommand == false){sayBalls = beingSized + "'s size is " + ballsizes[rand] + "."; sayTTS(sayBalls);}
      ballCommand = true;
      break;

    case 'y':
    case 'why':

	    var randRsn = Math.floor((Math.random() * (reasons.length - 1)));
	    var randSub = Math.floor((Math.random() * (subject.length - 1)));
	    let sayWhy;

	    if(typeof args[0] === 'undefined') {let inquiry = args.join(" "); sayWhy = "Because " + subject[randSub] + " " + reasons[randRsn] + "."; sayTTS(sayWhy); return;}  // blank inquiry
	    else if(args[0].toLowerCase() === "are" || args[0].toLowerCase() === "is" || args[0].toLowerCase() === "am" || args[0].toLowerCase() === "was" || args[0].toLowerCase()  === "has" ||  args[0].toLowerCase() === "did" || args[0].toLowerCase() === "does" || args[0].toLowerCase() === "do" || args[0].toLowerCase() === "have" || args[0].toLowerCase() === "should")
	     {
	    let verb = args[0].toLowerCase();
	    if (verb === "am"){ args[0] = 'are'; }
	    else if (verb === "are"){ args[0] = 'am'; }
	    else if (verb === "does") {args[0] = ''; }
	    else if (verb === "do") {args[0] = ''; }
	    else if (verb === "did") {args[0] = ''; }
	    else if (verb === "is") {args[0] = ''; }

	    for (e=0; e<args.length; e++)
	      {
		if(args[e]==="my"){ args[e]="your";}
		else if(args[e].toLowerCase() ==="your"){ args[e]="my";}
		else if(args[e].toLowerCase() ==="i"){ args[e]="you";}
		else if(args[e].toLowerCase() ==="you"){ args[e]="me";}
		else if(args[e].toLowerCase() ==="me"){ args[e]="you";}

	      }
		  let temp1 = args[0];
		  args[0]=args[1];
		  args[1]=temp1;

		  if (args[1] === ''){args.splice(1,1);}
		  let answer = args.join(" ");
		  while(answer.charAt(answer.length-1)=="?"){answer=answer.substring(0, answer.length-1);}
		  sayWhy= answer + " because " + subject[randSub] + " " + reasons[randRsn] + "."; sayTTS(sayWhy); return;
		}
	      else
		{ if (typeof args[1] === 'undefined') {
		let answer = args[0];
		sayWhy = answer + " because " + subject[randSub] + " " + reasons[randRsn] + "."; sayTTS(sayWhy); return; }
	      for (b=0; b<args.length; b++)
	      {
		if(args[b]==="my"){ args[b]="your";}
		else if(args[b].toLowerCase() ==="your"){ args[b]="my";}
		else if(args[b].toLowerCase() ==="i"){ args[b]="you";}
		else if(args[b].toLowerCase() ==="you"){ args[b]="me";}
		else if(args[b].toLowerCase() ==="me"){ args[b]="you";}

	      }
		  answer = args.join(" ");
		  while(answer.charAt(answer.length-1)=="?"){answer=answer.substring(0, answer.length-1);}
		  sayWhy = answer + " because " + subject[randSub] + " " + reasons[randRsn] + "."; sayTTS(sayWhy); return;
		}
	      return;
      break;


    case 'who':
    case 'whom':
      var randWho = Math.floor((Math.random() * (subject.length - 1)));
      let sayWho;
      if (typeof args[0] === 'undefined') { sayWho = subject[randWho] + '.'; sayTTS(sayWho); break;}
       for (b=0; b<args.length; b++)
      {
        if(args[b]==="my"){ args[b]="your";}
        else if(args[b].toLowerCase() ==="your"){ args[b]="my";}
        else if(args[b].toLowerCase() ==="i"){ args[b]="you";}
        else if(args[b].toLowerCase() ==="you"){ args[b]="me";}
		else if(args[b].toLowerCase() ==="me"){ args[b]="you";}
      }

      let whom = args.join(" ");
      while(whom.charAt(whom.length-1)=="?"){whom=whom.substring(0, whom.length-1);}
      sayWho = subject[randWho] + " " + whom + "."; sayTTS(sayWho);
      break;

    // 8ball 8
    case '8ball':
    case '8':
    case 'can':
    case 'if':
    case 'am':
    case 'may':
    case 'should':
    case 'is':
    case 'would':
    case 'do':
    case 'are':
    case 'were':
    case 'was':
    case 'does':
    case 'did':
    case 'will':
      let eightball = ['It is certain.','As I see it, yes.',':thumbsup:', 'Sure.', 'I guess.', 'No way.', 'Cannot decide...','Possibly??','For the most part.',
        'Kind of.','Certainly.','Certainly not.', 'HELL no.','Most likely.','It is decidedly so.',`${huh}`,'Without a doubt.',
        'Yes - DEFINITELY','You may rely on it.','Outlook is good.','Yes.','Signs point to yes.','Ask again later.',
        'Better not tell you now.','Concentrate and ask again.','Don\'t count on it.','My reply is no.','My sources say no.',
        'Outlook is not good.','Very doubtful.','Thank you Kanye, very cool!', 'Sometimes... (shhh)', 'Why not??', 'Absolutely not.', 'Yes. Now leave me alone.', 'Ehhhh', 'Surely!'];
      var num = Math.floor((Math.random() * (eightball.length - 1)));
      let say8 = capitalize(eightball[num]); sayTTS(say8);
      return;
      break;

    case 'src':
      message.channel.send("https://github.com/the-jame/shaqbot"); break;

    case 'pungent':
      message.channel.send(pungent);
      break;

    // uuu uu u
    case 'uuuuuuuuuuuu':
    case 'uuuuuuuuuuu':
    case 'uuuuuuuuuu':
    case 'uuuuuuuuu':
    case 'uuuuuuuu':
    case 'uuuuuuu':
    case 'uuuuuu':
    case 'uuuuu':
    case 'uuuu':
    case 'uuu':
    case 'uu':
    case 'u':

      let syllables = ['euxeux', 'bu', 'lemlemlem', 'lumlumlum', 'lem', 'lum', 'huehue', 'hue', 'h', 'hhhhhhhhhh', 'eak', 'oom',
        'shaq', 'aqaqaq', 'urts', 'nts', 'anus', 'buenos', 'cumb', 'cummie', 'euxeux', 'ahhhhhnnnnnnnnnnnnnnnnnnnn', 'unnnnnnnnn', 'yeff', 'hhhuuu',
        'rrrrrrrrrrrr', 'uuu','arf','euf','aeeeb', 'ffff', 'uuu', 'uhhh', 'aaaa', 'eeeee', 'iiii', 'oooo', 'v', 'huuuuuuuuuuuuu', 'y', 'ahu', 'abib', 'ebbebb', 'horf', '(nuts)', 'speuxch', 'lum', 'uhh', 'nunnnn','papa','fathhhhhhhhhh', 'asiiiduuu', 'elulux', 'iwueyad', 'blublublub','uhnnnn', 'azzz'];

      let words = ['Posichichayones ', 'from ', 'sucky ', 'keer ', 'keer him ', 'Legolas ', 'jerk me once ', 'jerk me twice ', 'compadre ',
        'papa ', 'daddy ', 'prease ','shame on you '];
      let length = Math.floor(Math.random() * (command.length + 10));
      let str = '';
      for (i=0; i<length; i++)
      {
        let pick = Math.floor((Math.random() * (syllables.length - 1)));
        str+=(syllables[pick]);
      }
      sayTTS(str);
      break;

// how many things there are
    case 'counts':
    case 'count':
      var whoSize = subject.length;
      var whatSize = things.length;
      var whenSize = times.length;
      var whereSize = locations.length;
      var whySize = reasons.length;
      var sizedBalls = ballsizes.length;
      message.channel.send(`There are\n\`${whoSize} people\n${whatSize} things\n${whenSize} times\n${whereSize} locations\n${whySize} reasons\n${sizedBalls} ballsizes\`\nin the shaqverse.`);
      break;

    case 'ping':
      if (message.guild.id != settings.beans) {message.channel.send("Sorry, this only works in the home server!"); break;} // does not work outside our server
      let toPing = '';
      let pinged = args[0].toLowerCase();
      switch(pinged){

          case 'jim':
          case 'jimmy':
          case 'jambi':
          case 'jimb':
              case 'jimbi':
          case 'sunder': toPing = settings.jimmy; break;

          case 'jam':
          case 'james':
          case 'jame':
          case 'thejame': toPing = settings.james; break;

          case 'enrique':
          case 'reegie':
          case 'reeg': toPing = settings.enrique; break;

          case 'chino':
          case 'cody':
          case 'chin':
          case 'xhinon': toPing = settings.cody; break;

          case 'ton':
          case 'anthony':
          case 'mug': toPing = settings.anthony; break;

          case 'brett':
          case 'kitty':
          case 'kittykatt': toPing = settings.brett; break;

          case 'liz':
          case 'lizz':
          case 'lizzz':
          case 'elizabeth': toPing = settings.liz; break;

          case 'tyra':
          case 'moomoo': toPing = settings.tyra; break;

          case 'john': toPing = settings.john; break;

          case 'kacey':
          case 'kc': toPing = settings.kacey; break;

          case 'olm':
          case 'olmyra': toPing = settings.olm; break;

          case 'ysabel':
          case 'ysa': toPing = settings.ysabel; break;

          case 'men': toPing = settings.men; break;

          default: toPing = "invalid"; break;
            }

      if (toPing === "invalid") {message.channel.send("No user by that name."); break;}
      let neck = `${wut2}`;
      let wholeNeck = '';

      let neckLen = Math.floor((Math.random() * (32)));
      for (i=0; i<neckLen; i++)
      {
        wholeNeck += neck;
      }

      message.channel.send(`${wut1}${wholeNeck}${wut3}` + `<@${toPing}>` + ` ${eyesleft}`);
      break;

  case 'lol':
  case 'laugh':
      setTimeout(()=> {
      clearTimeout(laughing);
      }, 12000);
      message.channel.send(`:smile:`)
        .then((msg)=> {
        laughing = setInterval(function() {if(msg.content.includes('slight')) msg.edit(':smile:'); else msg.edit(':slight_smile:');}, 1200)
     }); break;

  case 'pleading':
  case 'plead':
     setTimeout(()=> {
     clearTimeout(pleading);
     }, 6400);
     message.channel.send(`:pleading_face:`)
     .then((msg)=> {
     pleading = setInterval(function() {if(msg.content.includes(`${pleadah}`)) msg.edit(`:pleading_face:`); else msg.edit(`${pleadah}`);}, 400)
     }); break;

  case 'asscrack':
    philipLeft = `${philipL} ${thinkAss}`;
    philipRight = `${philipR} ${thinkAss}`;
    philipCenter = `:coffin: ${thinkAss}`;

    message.channel.send(philipLeft)
      .then((msg) => {
        setTimeout(function() {
          msg.edit(philipRight)
        }, 1400);
        setTimeout(function() {
          msg.edit(philipLeft)
        }, 1800);
	setTimeout(function() {
          msg.edit(philipRight)
        }, 1200);
        setTimeout(function() {
          msg.edit(philipLeft)
        }, 1700);
	setTimeout(function() {
          msg.edit(philipRight)
        }, 900);
        setTimeout(function() {
          msg.edit(philipLeft)
        }, 1100);
	setTimeout(function() {
          msg.edit(philipRight)
        }, 1300);        
	setTimeout(function() {
          msg.edit(philipLeft)
        }, 1100);
	setTimeout(function() {
          msg.edit(philipRight)
        }, 1200);
	    // final stage
        setTimeout(function() {
           msg.edit(philipCenter)
        }, 3200)
      }); break;

  case 'look':
  case 'stretch':
  case 'neck':

      let finalNeck = '';
      let neck2 = `${wut2}${wut2}`;
      let lookAt = args.join(" ");

      setTimeout(()=> {
      clearTimeout(elongate);
      }, 15000);

      message.channel.send(`${wut1}${wut2}${wut3} ${lookAt}`)
        .then((msg)=> {
        elongate = setInterval(function(){ for(i=0;i<2;i++){finalNeck +=neck2;} msg.edit(`${wut1}${finalNeck}${wut3} ${lookAt}`);}, 1200)
      });
  break;
  }

});

login();
