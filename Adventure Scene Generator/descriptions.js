const make = require('./classes.js')

// Descriptions for Desert Biome

const desertDes1 = [
  'you find yourself standing before a wide, empty desert. ',

  'you find yourself on the edge of a desert, a patch of desolation on the Damned World.',

  "all traces of life have been replaced by a veritable ocean of sand, rising and falling in frozen waves, shimmering in the heat.  Did your feet bring you here, or did someone change the world while you weren't paying attention?",

  "there appears an enormous desert, an uninhabitable wasteland of sand and dust."

]

const desertDes2 = [
  'There are no signs of life.  It appears that nothing has stepped into or crawled out of this sandy expanse in quite a while.  Nothing moves and everything moves, rippling in the heat...',

  "You take stock of the situaiton.  A few scrawny trees stand at the edge of the dunes, host to a wake of vultures.  The black creatures watch you with interest. You surmise that many have gone into this desert before you, only to end up in the belly of these birds.  Then again, maybe there's just nothing else for the them to look at...", 

  "A chill settles into you, despite the heat.  Asside from a few pitiful creatures skittering under rocks, the ocean of sand is devoid of life.  Here and there, bone-dry scrub twist like desicated corpses under the heat of the sun.  Not for the first time, you find yourself questioning your life choices...",

  "Across this dusty expanse, cacti twist into the sky.  Surely there is some water or nutrition to be had from them, but something in their fearsome appearance tells you they are not to be messed with.  Still, there are no other signs of life as far as the eye can see...",

  "Before you lies a maze of scrub, dried as hard as bones and twisted in impossible shapes.  Tiny creatures flit under skeletal shadows.  There must be some way through, but is it worth the crossing?  Have you really chosen this path, or has it chosen you?"
]

// Descriptions for Forest Biome

const forestDes1 = [
  'you find yourself within a lush, sun-dappled forest',

  'you find yourself in a deep, ancient forest, with sunbeams slanting through the giant branches and enormous trees like the columns of a cathedral.',

  'you come upon a peaceful wood, racous with the chatter of birds.',

  'your path has lead you to a forest, webbed with shadow and roofed in a canopy of green.'
]

const forestDes2 = [
  'As tranquil as it seems, you know what the forests of the Damned World really are.  They are the engines of life, where babies are born alive from the ground, where the dead wake up full of memories and regret, and where the monsters hide in the shadows to feast on the spoils.  A forest is no refuge in the Damned World...',

  "Still, your shoulders tighten, and you strain your ears for the sound of a footstep. This place is not as safe as it seems, for the forests are where monsters are born, and where they dwell.  You should not linger long here...",

  "Behind you and to your left:  the sound of a snapping twig.  Are the birds getting heavier, or is there something else in these woods?  Something stalking you unawares?  Something that could hear your thoughts from a mile away...",

  "You are so tired, and the forest floor is soft with ferns and moss.  This would be just the place to lie down and rest for an hour, or a day.  Yet this is not your first time in the forests of the Damned World.  If the monsters haven't already caught your scent, they will soon.  You have no choice but to keep moving...",

  'In the stillness, a deer emerges from the underbrush.  It is unafraid and walks right up to you, staring at you intently.  It has the strangest expression on its face, as if it has known you for a long time.  Suddenly, a voice erupts into your mind as loud as thought.  "YOU ARE NOT SAFE HERE", the deer says and, just as suddenly, disappears into the woods.  Clearly, this is no ordinary forest, and it would be unwise to stay...'  
]

// Description for Ancient Grove Biome

const groveDes1 = [
  'you find yourself surrounded by the remains of an ancient city, the likes of which you haven\'t seen in this lifetime.',

  'you arouse from your thoughts to find yourself in the main thoroughfare of what once must have been a great city.',

  'you realize that those heaps of rubble around you are actually the ruins of an ancient settlement, maybe even a city.',    
]

const groveDes2 = [
  'Amid piles of ruble, throngs of vines overarched by trees, you find walls made of something not quite like stone and not quite like metal.  You brush the dirt off one carved relief, only to see the figures of ghosts with lizard faces staring back at you with preternatureal understanding.',

  'Broad avenues of smooth stones lead to ancient zigurats rising from the grass and the trees.  You climb to the top of one to survey the view.  The ancient staircase is line with figures in an inhuman script, as well as reliefs of humans in all manner of torment.  From above, the city is a sea of green, punctuated by stone.',

  'Everywhere, houses -- temples, palaces maybe -- lie in heaps.  Tucked against the rise of a hill, thick with vines and underbrush, you find the face of a long forgotten ruler, perhaps a god.  The statue towers over you; it is remarkable that it was invisible just a moment before.  Many people must have lived and died here, and great evil must have befallen them before the trees and the vines took this place.',

  'A minute ago, you were walking through the scrub, the wild and tangled hinterlands of the Damned World.  Now here you are, walking between the columns of a temple rising among the trees to lofty pediments hosting colonies of birds.  The structures are made of a mineral unfamiliar to you; even in the shadows, you can see it glowing.  There is something altogether holy in this place -- and unsettling.',

  'Soon you begin to find the bones.  Sometimes in piles, as if they had collected their remains, sometimes arranged in rows, sometimes in the unnatural positions of their deaths.  As you make your way deeper into the city, into the ancient stone thoroughfares and the houses in which these ghosts once dwelt, you begin the see the signs of terrible tragedy.  Skeletons huddled together for warmth, or for comfort.  Whatever fate had come for them, it had left this place inviolate.  Not even the monsters would come to gnaw their bones'
]
// Several descriptions for Objects of Interest that may
// be encountered within biomes

const treeDes = [
  "On second thought, there does a appear to be a tree -- one solitary tree, standing straight and alone in the middle of nowhere. It's a hundred feet tall and nearly as wide   How has it survived?  Why is it there?",

  'You rub your eyes -- are they playing tricks on you?  Is that a tree in the middle of this place?  It must be a hundred feet tall, if it\'s a foot...',

  'Yet even in the midst of this desolation, you make out the form of a tree.  Can it be?  A green tree in the middle of this barren place?  This bears investigating.'
]

const doorDes = [
  "Strangely enough, amist the wild and untrodden forms of this place, you find a door -- just a solitary door, upright, square and even.  To be clear, there is no building, no wall.  You easily walk around it to see the other side.  The door is blue, unlike any blue you have ever seen.  The air around the door buzzes with energy.",

  "From the corner of your eye, you spy something straight and square and out-of-place.  It is a door, a door in the middle of nowhere.  In fact, nowhere is where it appears to lead -- there is no wall or building behind it, just a door and a handle that burns strangely in your brain.  What would happen should you open it?",

  "On second thought, there appears to be something else in this place.  A door, erected square and true.  It appears to lead to nothing but empty air, but there is something about it's blood-red color and wrought-iron handle that might indicate otherwise."
] 

const wreckDes = [
  "Strolling through the place, you come across a hulk of metal poking up from the ground.  It is an old landship, wrecked and abandoned.  The soldiers must have come through here in one of their many wars against the monster hoards.  Nothing much left of them now, but there may be something useful lying about.",

  "As you walk along, eyes straining for some exit to this place, you nearly stumble over something metal jutting out of the the dirt.  It is the torn-out frame of a landship, long-abandoned.  No sign of the soldiers who once drove piloted it; not even their corpses remain with the wreck.  Still, they may have left something -- it is worth investigating. ",

  "Scanning your surroundings, your keen eyes turn up the hulk of an old abandoned landship, bristling with cannon, tracks torn off and turned nearly on its side, detritus of the ongoing war between the monsters and the soldiers who come from the east to fight them back.  Certainly not the first of these wrecks you've found; the wars have been going on as long as you've been on this Damned World.  Maybe the soldiers have left something useful?"
]

const shrineDes = [
  "Here, lost among the leaves and the shadows, you find a few stones, shaped by human hands and piled into an alter.  It is one of the old places, the shrines devoted to the *modrasca*, the mother trees.  Sure enough, you can see the shapes of the familiar wooden runes or \"lots\" carved into the stone.  You can almost hear the whispers of the old mother trees trying to tell you something.",

  "Walking briskly, mindful of the danger, you almost trip over a lot wall of stones half-buried in the underbrush.  In fact, there are two walls, no more than a foot high in most places, and between them a path.  You follow the path to find one of the old mother trees (or modrasca) who lived in this woods long before people ever found their way to the damned world.  The locals say there is a way to commune with the wisdom of the old mother trees, but you're from down south, and know little of such things.",

  'On closer inspection, one of the trees is actually not a tree but a statue, carved into wood and left to rot in this forgotten place.  It is an image of Alfred, the first of L\'Perditio, the father of the pioneers and the first King of Damnation.  Cleverly carved, his face radiates equinamity in the face of danger.  There may be more hiding in this place, some of it dangerous, no doubt.  \"Alfred give me strenth,\" you mutter.'
]

const burialDes = [
  'There, among the rocks and the rubble, you find the remains of a shipburial.  Lifting away a few stones, you uncover a long-prowed ship much like the viking vessels of the Earth from your former life.  In the center, the rainments of a king or queen, strung together with bone and a few strands of senew.',

  'You stumble upon a cairn built out of large stones, some heavier than you can lift.  However, just pushing aside a few of the smaller stones reveals the glitter of gold and steel.  There is much in this grave that could be useful, but disturbing it even a little has left you feeling unsettled.',

  'Fate (or is it chance?) draws you to a half-buried doorway.  Drawing aside the stone door, you are greeted with the odor of incence and dessication.  In the half-light are the things that were left for the dead.  Something in you tells you to turn away, but fate has led you to this place, hasn\'t it?'
]

// Before we build biomes, we construct objects of
// interest to find within them.  

const tree = new make.ObjectOfInterest('Tree', treeDes);
const door = new make.ObjectOfInterest('Door', doorDes);
const wreck = new make.ObjectOfInterest('Wreck', wreckDes);
const shrine = new make.ObjectOfInterest('Shrine', shrineDes);
const burial = new make.ObjectOfInterest('Burial', burialDes);
/* At last, we build the Biomes we will need for the Damned   
   World.  Later, we will export them all at once.  */

const desert = new make.Biome('Desert', 3, desertDes1, desertDes2, [tree, door, wreck]);
const forest = new make.Biome('Forest', 5, forestDes1, forestDes2, [door, wreck, shrine]);
const grove = new make.Biome("Ancient Grove", 2, groveDes1, groveDes2, [shrine, wreck, burial]);

module.exports.biomes = [desert, forest, grove]