import {Dimensions} from 'react-native';
import HomeInActiveIcon from '@assets/icons/navigation/home-inactive.svg';
import HomeActiveIcon from '@assets/icons/navigation/home-active.svg';
import LibraryInActiveIcon from '@assets/icons/navigation/library-inactive.svg';
import LibraryActiveIcon from '@assets/icons/navigation/library-active.svg';
import NotificationInActiveIcon from '@assets/icons/navigation/notification-inactive.svg';
import NotificationActiveIcon from '@assets/icons/navigation/notification-active.svg';
import ProfileInActiveIcon from '@assets/icons/navigation/profile-inactive.svg';
import ProfileActiveIcon from '@assets/icons/navigation/profile-active.svg';
import ArrowLeftIcon from '@assets/icons/arrow-back.svg';
import SortIcon from '@assets/icons/sort.svg';
import SortUpIcon from '@assets/icons/sort-up.svg';
import TopTabIndicatorIcon from '@assets/icons/top-tab-indicator.svg';
import BackgroundBtn from '@assets/icons/bg-btn.svg';
import ArrowRightIcon from '@assets/icons/arrow-right.svg';
import DoneAllIcon from '@assets/icons/done-all.svg';
import NotificationICon from '@assets/icons/notification-icon.svg';
import RemoveIcon from '@assets/icons/remove.svg';
import InfoWarningIcon from '@assets/icons/info-warning.svg';
import EditIcon from '@assets/icons/edit.svg';
import NeopLogoIcon from '@assets/icons/neop-logo.svg';
import EyeIcon from '@assets/icons/eye.svg';
import EyeFillIcon from '@assets/icons/eye-fill.svg';
import StarFillIcon from '@assets/icons/star-fill.svg';
import ChervonDownIcon from '@assets/icons/ChervonDown';
import BookMarkIcon from '@assets/icons/bookmark.tsx';
import LikeIcon from '@assets/icons/like';
import ExchangeIcon from '@assets/icons/exchange.svg';
import PlayIcon from '@assets/icons/play.svg';
import SendFillIcon from '@assets/icons/send-fill.svg';
import MenuIcon from '@assets/icons/MenuIcon';
import SubtractIcon from '@assets/icons/Subtract';
import LineHeightIcon from '@assets/icons/line-height.svg';
import MarginIcon from '@assets/icons/margin.svg';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ASSETS = {
  IMAGES: {
    NotificationSettingImage: require('@assets/images/notification-setting.png'),
    SettingImage: require('@assets/images/setting.png'),
    LogoutSettingImage: require('@assets/images/logout-setting.png'),
  },
  ICONS: {
    HomeActiveIcon,
    HomeInActiveIcon,
    LibraryActiveIcon,
    LibraryInActiveIcon,
    NotificationInActiveIcon,
    NotificationActiveIcon,
    ProfileActiveIcon,
    ProfileInActiveIcon,
    ArrowLeftIcon,
    SortIcon,
    SortUpIcon,
    TopTabIndicatorIcon,
    BackgroundBtn,
    ArrowRightIcon,
    DoneAllIcon,
    RemoveIcon,
    NotificationICon,
    InfoWarningIcon,
    EditIcon,
    NeopLogoIcon,
    MenuIcon,
    EyeIcon,
    EyeFillIcon,
    StarFillIcon,
    ChervonDownIcon,
    BookMarkIcon,
    LikeIcon,
    SubtractIcon,
    MarginIcon,
    LineHeightIcon,
    ExchangeIcon,
    PlayIcon,
    SendFillIcon,
  },
};
const COLORS = {
  empty: 'rgba(255,255,255,0.01)',
  lightmode: {
    primary: {
      50: '#FEFBEC',
      100: '#FDF9E3',
      200: '#FCF5D1',
      400: '#F8E790',
      500: '#F8DE5E',
      600: '#EBBC5D',
      800: '#AA8143',
    },
    secondary: {
      50: '#F0F9F9',
      100: '#E5F4F5',
      200: '#CFEBED',
      400: '#81CBD0',
      500: '#50B7BE',
      600: '#4AA8AF',
      800: '#306D71',
    },
    netrual: {
      0: '#FFFFFF',
      25: '#FAFAFA',
      50: '#F1F2F3',
      100: '#E1E2E5',
      200: '#C4C6CD',
      300: '#A3A5AE',
      500: '#626576',
      700: 'rgba(34, 38, 43, 1)',
      900: '#090A0B',
    },
    success: {
      50: '#EEFAF5',
      500: '#12B76A',
      700: '#0E9154',
    },
    warning: {
      50: '#FDF8EA',
      500: '#EAAA08',
      700: '#C48F07',
    },
    error: {
      50: '#FDF1F3',
      500: '#E01839',
      700: '#A9122B',
    },
  },
};
const COMMIC = new Map([
  [
    1,
    {
      createdAt: new Date(),
      title: `Chapter 1: The Divine Root Conceives and the Spring Breaks Forth 
As the Heart's Nature Is Cultivated, the Great Way Arises`,
      content: `
Before Chaos was divided, Heaven and Earth were one; 
All was a shapeless blur, and no men had appeared. 
Once Pan Gu destroyed the Enormous Vagueness 
The separation of clear and impure began. 
Living things have always tended towards humanity; 
From their creation all beings improve. 
If you want to know about Creation and Time, 
Read Difficulties Resolved on the Journey to the West. 
In the arithmetic of the universe, 129,600 years make one cycle. Each cycle can be divided into twelve phases: I, II, III, IV, V, VI, VII, VIII, IX, X, XI and XII, the twelve branches. Each phase lasts 10,800 years. 
Now within a single day, the positive begins at the time I; at II the cock crows; at III it is not quite light; at IV the sun rises; V is after breakfast; and at VI one does business. VII is when the sun reaches noon; at VIII it is slipping towards the West; IX is late afternoon; the sun sets at X; XI is dusk; and at XII people settle down for the night. 
If you compare this with the big numbers, then at the end of Phase XI Heaven and Earth were still one, and no beings had appeared. 5,400 years later came the beginning of Phase XII, when all was darkness and there were still no people or other creatures; for this reason it was called Chaos. Another 5,400 years later Phase XII was drawing to a close and a new cycle was about to begin. As Phase I of the new era approached, gradually there was light. As Shao Yong said, 
"When winter reaches the mid−point of Phase I 
The heart of Heaven does not move. 
Where the Positive first appears 
Nothing has yet come to life." 
At this time, Heaven first had a foundation. 5,400 years later, in the middle of Phase I, the light and pure rose upwards, and sun, moon, stars, and constellations were created. These were called the Four Images. Hence the saying that heaven began in I. 
Another 5,400 years later, when Phase I was nearing its end and Phase II was imminent, things gradually solidified. As the Book of Changes says, "Great is the Positive; far−reaching is the Negative! All things are endowed and born in accordance with Heaven." This was when the earth began to congeal. After 5,400 more years came the height of Phase II, when the heavy and impure solidified, and water, fire, mountains, stone, and Earth came into being. These five were called the Five Movers. Therefore it is said that the Earth was created in Phase II. 
After a further 5,400 years, at the end of Phase II and the beginning of the Phase III, living beings were created. In the words of the Book of the Calendar, "The essence of the sky came down and the essence of earth went up. Heaven and Earth intermingled, and all creatures were born." Then Heaven was bright and Earth was fresh, and the Positive intermingled with the Negative. 5,400 years later, when Phase III was at its height, men, birds and beasts were created. Thus the Three Powers−−Heaven, Earth and Man−−now had their set places. Therefore it is said that man was created in Phase III. 
Moved by Pan Gu's creation, the Three Emperors put the world in order and the Five Rulers laid down the moral code. The world was then divided into four great continents: The Eastern Continent of Superior Body, the Western Continent of Cattle−gift, the Southern Continent of Jambu and the Northern Continent of Kuru. This book deals only with the Eastern Continent of Superior Body. Beyond the seas there is a country called Aolai. This country is next to an ocean, and in the middle of the ocean is a famous island called the Mountain of Flowers and Fruit. This mountain is the ancestral artery of the Ten Continents, the origin of the Three Islands; it was formed when the clear and impure were separated and the Enormous Vagueness was divided. It is a really splendid mountain and there are some verses to prove it: 
It stills the ocean with its might, 
It awes the jade sea into calm. 
It stills the ocean with its might: 
Tides wash its silver slopes and fish swim into its caves. 
It awes the jade sea into calm: 
Amid the snowy breakers the sea−serpent rises from the deep. 
It rises high in the corner of the world where Fire and Wood meet; 
Its summit towers above the Eastern Sea. 
Red cliffs and strange rocks; 
Beetling crags and jagged peaks. 
On the red cliffs phoenixes sing in pairs; 
Lone unicorns lie before the beetling crags. 
The cry of pheasants is heard upon the peaks; 
In caves the dragons come and go. 
There are deer of long life and magic foxes in the woods; 
Miraculous birds and black cranes in the trees. 
There are flowers of jade and strange plants that wither not; 
Green pine and bluish cypress ever in leaf, 
Magic peaches always in fruit. 
Clouds gather round the tall bamboo. 
The wisteria grows thick around the mountain brook 
And the banks around are newly−coloured with flowers. 
It is the Heaven supporting pillar where all the rivers meet, 
The Earth's root, unchanged through a myriad aeons. 
There was once a magic stone on the top of this mountain which was thirty−six feet five inches high and twenty−four feet round. It was thirty−six feet five inches high to correspond with the 365 degrees of the heavens, and twenty−four feet round to match the twenty−four divisions of the solar calendar. On top of it were nine apertures and eight holes, for the Nine Palaces and the Eight Trigrams. There were no trees around it to give shade, but magic fungus and orchids clung to its sides. Ever since Creation began it had been receiving the truth of Heaven, the beauty of Earth, the essence of the Sun and the splendour of the Moon; and as it had been influenced by them for so long it had miraculous powers. It developed a magic womb, which burst open one day to produce a stone egg about the size of a ball. 
When the wind blew on this egg it turned into a stone monkey, complete with the five senses and four limbs. When the stone monkey had learned to crawl and walk, he bowed to each of the four quarters. As his eyes moved, two beams of golden light shot towards the Pole Star palace and startled the Supreme Heavenly Sage, the Greatly Compassionate Jade Emperor of the Azure Vault of Heaven, who was sitting surrounded by his immortal ministers on his throne in the Hall of Miraculous Mist in the Golden−gated Cloud Palace. When he saw the dazzling golden light he ordered Thousand−mile Eye and Wind−accompanying Ear to open the Southern Gate of Heaven and take a look. The two officers went out through the gate in obedience to the imperial command, and while one observed what was going on the other listened carefully. Soon afterwards they reported back: 
"In obedience to the Imperial Mandate your subjects observed and listened to the source of the golden light. We found that at the edge of the country of Aolai, which is East of the ocean belonging to the Eastern Continent of Superior Body, there is an island called the Mountain of Flowers and Fruit. A magic stone on the top of this mountain produced a magic egg, and when the wind blew on this egg it turned into a stone monkey which bowed to each of the four quarters. When he moved his eyes, golden light shot towards the Pole Star Palace; but now that he is eating and drinking, the golden light is gradually dying." 
In his benevolence and mercy the Jade Emperor said, "Creatures down below are born of the essence of heaven and earth: there is nothing remarkable about him." On his mountain the monkey was soon able to run and jump, feed from plants and trees, drink from brooks and springs, pick mountain flowers and look for fruit. He made friends with the wolves, went around with the 
tigers and leopards, was on good terms with the deer, and had the other monkeys and apes for relations. At night he slept under the rockfaces, and he roamed around the peaks and caves by day. As the saying so rightly goes, "There is no calendar in the mountains, and when winter's over you don't know the time of year." On hot mornings he and all the other monkeys would play under the shade of some pines to avoid the heat. Just look at them all: 
Climbing trees, picking flowers, looking for fruit; 
Throwing pellets, playing knucklebones; 
Running round sandy hollows, building stone pagodas; 
Chasing dragonflies and catching locusts; 
Worshipping the sky and visiting Bodhisattvas; 
Tearing off creepers and weaving straw hats; 
Catching fleas then popping them with their teeth and fingers; 
Grooming their coats and sharpening their nails; 
Beating, scratching, pushing, squashing, tearing and tugging; 
Playing all over the place under the pine trees; 
Washing themselves beside the green stream. 
After playing, the monkeys would go and bathe in the stream, a mountain torrent that tumbled along like rolling melons. There is an old saying, "Birds have bird language and, animals have animal talk." 
All the monkeys said to each other, "I wonder where that water comes from. We've got nothing else to do today, so wouldn't it be fun to go upstream and find its source?" With a shout they all ran off, leading their children and calling to their brothers. They climbed up the mountain beside the stream until they reached its source, where a waterfall cascaded from a spring. They saw 
One white rainbow arching, 
A thousand strands of flying snow, 
Unbroken by the sea winds, 
Still there under the moon. 
Cold air divides the greeny crags, 
Splashes moisten the mountainside; 
A noble waterfall cascades, 
Hanging suspended like a curtain. 
The monkeys clapped their hands and explained with delight, "What lovely water. It must go all the way to the bottom of the mountain and join the waves of the sea." 
Then one monkey made a suggestion: "If anyone is clever enough to go through the fall, find the source, and come out in one piece, let's make him our king." When this challenge had been shouted three times, the stone monkey leapt out from the crowd and answered at the top of his voice, "I'll go, I'll go." Splendid monkey! Indeed: 
Today he will make his name; 
Tomorrow his destiny shall triumph. 
He is fated to live here; 
As a King he will enter the Immortals' palace. 
Watch him as he shuts his eyes, crouches, and springs, leaping straight into the waterfall. When he opened his eyes and raised his head to look round, he saw neither water nor waves. A bridge stood in front of him, as large as life. He stopped, calmed himself, took a closer look, and saw that the bridge was made of iron. The water that rushed under it poured out through a fissure in the rocks, screening the gateway to the bridge. He started walking towards the bridge, and as he looked he made out what seemed to be a house. It was a really good place. He saw: 
Emerald moss piled up in heaps of blue, 
White clouds like drifting jade, 
While the light flickered among wisps of coloured mist. 
A quiet house with peaceful windows, 
Flowers growing on the smooth bench; 
Dragon pearls hanging in niches, 
Exotic blooms all around. 
Traces of fire beside the stove, 
Scraps of food in the vessels by the table. 
Adorable stone chairs and beds, 
Even better stone plates and bowls. 
Three or four sprigs of plum blossom, 
A few pines that always attract rain, 
All just like a real home. 
He took a good, long look and then scampered to the middle of the bridge, from where he noticed a stone tablet. On the tablet had been carved in big square letters: HAPPY LAND OF THE MOUNTAIN OF FLOWERS AND FRUIT, CAVE HEAVEN OF THE WATER CURTAIN. The stone monkey was beside himself with glee. He rushed away, shut his eyes, crouched, and leapt back through the waterfall. 
"We're in luck, we're in luck," he said with a chuckle. All the other monkeys crowded round him asking, "What's it like in there? How deep is the water?" 
"There's no water, none at all," replied the stone monkey. "There's an iron bridge, and on the other side of the bridge there's a house that must have been made by Heaven and Earth." 
"How ever could you see a house there?" the other monkeys asked. The stone monkey chuckled again. 
"The water here comes under the bridge and through the rocks, and it hides the gateway to the bridge from view. There are flowers and trees by the bridge, and a stone house too. Inside the house are stone rooms, a stone stove, stone bowls, stone plates, stone beds, and even stone benches. In the middle of it all is a tablet which says 'Happy Land of the Mountain of Flowers and Fruit, Cave Heaven of the Water Curtain'. It's just the place for us to settle down in−−there's room there for thousands. Let's all move in, then we won't have to put up with any more nonsense from heaven. In there 
We can hide there from the wind, 
And shelter from the rain, 
With nothing to fear from frost and snow, 
And never a rumble of thunder. 
The coloured mists glow bright 
And the place smells lucky. 
The pine and bamboo will always be beautiful, 
And rare flowers blossom every day." 
The other monkeys were all so delighted to hear this that they said, "You go first and take us with you." 
The stone monkey shut his eyes, crouched, and leapt in again, shouting, "Follow me in, follow me in." The braver monkeys all jumped through. The more timid ones peered forward, shrank back, rubbed their ears, scratched their cheeks, shouted, and yelled at the top of their voices, before going in, all clinging to each other. After rushing across the bridge they all grabbed plates and snatched bowls, bagged stoves and fought over beds, and moved everything around. Monkeys are born naughty and they could not keep quiet for a single moment until they had worn themselves out moving things around. 
The stone monkey sat himself in the main seat and said, "Gentlemen, A man who breaks his word is 
worthless. Just now you said that if anyone was clever enough to come in here and get out again in one piece, you'd make him king. Well, then. I've come in and gone out, and gone out and come in. I've found you gentlemen a cave heaven where you can sleep in peace and all settle down to live in bliss. Why haven't you made me king?" On hearing this all the monkeys bowed and prostrated themselves, not daring to disobey. 
They lined up in groups in order of age and paid their homage as at court, all acclaiming him as the "Great King of a Thousand Years." The stone monkey then took the throne, made the word "stone" taboo, and called himself Handsome Monkey King. There is a poem to prove it that goes: 
All things are born from the Three positives; 
The magic stone was quick with the essence of sun and moon. 
An egg was turned into a monkey to complete the Great Way; 
He was lent a name so that the elixir would be complete. 
Looking inside he perceives nothing because it has no form, 
Outside he uses his intelligence to create visible things. 
Men have always been like this: 
Those who are called kings and sages do just as they wish. 
Taking control of his host of monkeys, apes, gibbons and others, the Handsome Monkey King divided them into rulers and subjects, assistants and officers. In the morning they roamed the Mountain of Flowers and Fruit and in the evening they settled down for the night in the Water Curtain Cave. They made a compact that they would not join the ranks of the birds or go with the running beasts. They had their own king, and they thoroughly enjoyed themselves. 
In spring they picked flowers for food and drink, 
In summer they lived off fruit. 
In autumn they gathered tares and chestnuts, 
They got through the winter on Solomon's−seal. 
The Handsome Monkey King's innocent high spirits could not, of course, last three or four hundred years. One day he suddenly felt depressed during a banquet with his monkey host, and he started to weep. The startled monkeys crowded round, bowed to him and asked, "What's the matter, Your Majesty?" 
"Although I'm happy now," the Monkey King replied, "I'm worried about the future. That's what's getting me down." 
The other monkeys laughed and said, "Your Majesty is being greedy. We have parties every day; we live in a mountain paradise, in an ancient cave in a divine continent. We are spared the rule of unicorns, the domination of phoenixes, and the restraints of human kings. We are free to do just as we like−−we are infinitely lucky. Why make yourself miserable worrying about the future?" 
To this the Monkey King replied, "Yes, we don't have to submit to the laws and regulations of human kings, and we don't live in terror of the power of birds and beasts. But the time will come when we are old and weak, and the underworld is controlled by the King of Hell. When the time comes for us to die, we won't be able to go on living among the Blessed, and our lives will have been in vain." All the monkeys covered their faces and wept as everyone of them thought about death. 
Suddenly a gibbon jumped out from their ranks and shrieked in a piercing voice, "If Your Majesty is thinking so far ahead, this is the beginning of enlightenment. Now of the Five Creatures, there are only three that do not come under the jurisdiction of the King of Hell." 
"Do you know which they are?" asked the Monkey King. 
"Yes," the ape replied. "They are the Buddhas, the Immortals and the Sages. They are free from the Wheel of Reincarnation. They are not born and they do not die. They are as eternal as Heaven and Earth, as the mountains and the rivers." 
"Where do they live?" the Monkey King asked. 
"Only in the human world," the ape replied, "in ancient caves on magic mountains." The Monkey King was delighted to hear this. 
"I shall leave you all tomorrow," he said, "and go down the mountain. If I have to, I'll roam the corners of the oceans and go to the edge of the sky to find these three kinds of beings and discover the secret of eternal youth that will keep us out of the clutches of the King of Hell for ever." Goodness! Because of these words he was to learn how to be free from the Wheel of Reincarnation and become the Great Sage Equaling Heaven. 
All the monkeys clapped with approval and said, "Great! Great! Tomorrow we'll climb all over the mountain and get lots of fruit to give Your Majesty a really big banquet to send you off." 
The next day the monkeys set out to pick magic peaches, gather rare fruits, dig out yams, and cut 
Solomon's−seal. Magic fungus and fragrant orchid were collected, and everything was set on the stone benches and the stone tables, with fairy wine and dishes. You could see 
Golden pills and pearl pellets, 
Bursting red and plump yellow. 
The golden pills and pearl pellets were winter cherries, beautiful and sweet; 
The bursting red and plump yellow were ripe plums, tasty and sharp. 
Fresh, sweet−fleshed longans with thin skins. 
Fiery lichees with tiny stones in a red sack. 
Branch after branch of crab−apples, 
Yellow−skinned loquats with their leaves on. 
Rabbit−head pears and chicken−heart jujubes 
To quench your thirst, remove your cares, and sober you up. 
Fragrant peaches and tender apricots, 
As sweet and luscious as jade wine. 
As sharp as glistening yogurt. 
Ripe melons with red coats and black seeds, 
Big, four−sectioned persimmons with yellow skins. 
Cinnabar pips shining like fire−crystal pearls. 
With firm round flesh like golden agate. 
Walnuts and gingko fruits to eat with tea; 
Coconuts and grapes to make into wine. 
Dishes loaded with pine cones, yew−nuts, filberts, and crab−apples; 
Tangerines, sugar−cane and oranges covering the table. 
Tender boiled Solomon's−seal. 
Pounded china−root and Job's tears. 
Simmered in soup in a stone−pot. 
Although we humans have rare delicacies to eat, 
We are no happier than those monkeys in the mountains. 
The host of monkeys ushered the Handsome Monkey King to the seat of honour and sat down below him according to age. Each of them took it in turns to bring him wine, flowers, and fruit, and they drank hard for a whole day. The next morning the Handsome Monkey King got up early and ordered, "Children, tear down some old pines and make me a raft. Find a bamboo pole to punt with and load it up with fruit. I'm going." He went aboard the raft all by himself, pushed off with all his might, and floated off towards the waves of the ocean. He intended to sail with the wind and cross over to the Southern Jambu Continent. 
The heaven−born monkey, whose conduct was so noble, 
Left his island to drift with heaven's winds. 
He sailed oceans and seas to find the Way of Immortality, 
Deeply determined to do a great deed. 
The predestined one should not have vulgar longings; 
He can attain the primal truth without care or worry. 
He is bound to find a kindred spirit, 
To explain the origins and the laws of nature. 
He had chosen just the right time for his journey. After he boarded his raft the Southeasterly wind blew hard for days on end and bore him to the Northwestern shore of the Southern Continent. Testing the depth of the water with his pole he found that it was shallow, so he abandoned the raft and jumped ashore. He saw humans by the coast, fishing, hunting geese, gathering clams, and extracting salt. He went up to them, leaping around and making faces, which so scared them that they dropped their baskets and nets and fled in all directions as fast as they could. The Monkey King grabbed one of them who was a poor runner, stripped him of his clothes, and dressed himself in them like a human. He swaggered through the provinces and prefectures, learning human behavior and human speech in the market places. Whether he was eating his breakfast or going to bed at nigh he was always asking about Buddhas, Immortals and Sages, and seeking the secret of eternal youth. He observed that the people of the world were too concerned with fame and fortune to be interested in their fates. 
When will the struggle for fame and fortune end? 
Toiling from morning till night, never pleasing yourself. 
Those who ride donkeys long for stallions, 
The Prime Minister always wants to be a prince. 
They only worry about having to stop work to eat or dress; 
They never fear that the King of Hell will come to get them. 
When trying to ensure their sons and grandsons inherit their wealth and power, 
They have no time to stop and think. 
Although he asked about the way of the Immortals, the Monkey King was unable to meet one. He spent eight or nine years in the Southern Jambu Continent, going through its great walls and visiting its little counties. When he found that he had reached the Great Western Ocean he thought that there must be Sages and Immortals on the other side of it, so he made himself another raft like the last one, and floated across the Western Ocean until he came to the Western Continent of Cattle−gift. He went ashore and made extensive and lengthy enquiries until one day he came upon a high and beautiful mountain, thickly forested on its lower slopes. Not fearing wolves, and undaunted by tigers or leopards, he climbed to the summit to see the view. It was indeed a fine mountain: 
A thousand peaks brandishing halberds, 
Screens ten thousand measures tall. 
In the sunlight the mountain haze is lightly touched with blue; 
After the rain the black rocks look coldly green. 
Withered creepers coil round ancient trees, 
And the old ford marks the bounds of the mysterious. 
Strange flowers and precious plants, 
Flourishing in all four seasons, rivaling fairyland. 
The nearby cry of a hidden bird, 
The clear running of a spring. 
Valley upon valley of mushroom and orchid, 
Lichen grows all over the cliffs. 
The range rises and dips in dragon−like majesty. 
Surely there mush be lofty hermits here. 
As he was looking at the view the Monkey King heard a human voice coming from the depths of the forest. He rushed into the trees, and when he cocked his ear to listen he heard a song: 
"Watching the chess game I cut through the rotten, 
Felling trees, ding, ding, 
Strolling at the edge of the cloud and the mouth of the valley, 
I sell firewood to buy wine, 
Cackling with laughter and perfectly happy. 
I pillow myself on a pine root, looking up at the moon. 
When I wake up it is light. 
Recognizing the old forest 
I scale cliffs and cross ridges, 
Cutting down withered creepers with my axe. 
When I've gathered a basketful 
I walk down to the market with a song, 
And trade it for three pints of rice. 
Nobody else competes with me, 
I don't speculate or try sharp practice, 
Couldn't care less what people think of me, 
Calmly lengthening my days. 
Are Taoists and Immortals, 
Sitting quietly and expounding the Yellow Court." 
The Monkey King was overjoyed to hear this, and he said with glee, "So this is where the Immortals have been hiding." He bounded deeper into the woods for a closer look and saw that the singer was a woodcutter cutting firewood. He was wearing the most unusual clothes: 
On his head he wore a hat 
Woven from the first skin shed by new bamboo shoots. 
Were made of yam from the wild cotton−tree. 
Was of silk from an old silkworm. 
The straw sandals under his feet 
Had straps torn from rotten sago trees. 
In his hand he held a steel axe 
On his back he carried a hempen rope 
At climbing pines and felling dead trees, 
Who was a match for this woodcutter? 
The Monkey King went closer and called to him. "Old Immortal, your disciple greets you." 
The woodcutter dropped his axe in astonishment and turned round to say, "No, no. I don't even have enough to eat or drink, so how can I possibly let you call me an Immortal?" 
"If you're not an Immortal," the Monkey King said, "why do you talk like one?" 
"I don't talk like an Immortal," the woodcutter said. 
"At the edge of the wood just now," the Monkey King replied, "I heard you say, 'The people I meet are Taoists and Immortals, sitting quietly and expounding the Mantingfang.' The Mantingfang contains the truth about the Way, so if you're not an Immortal, what are you?" The woodcutter laughed. 
"It's quite true that the song is called 'The Fragrance of the Mantingfang,' and an Immortal who lives near my hut taught me it. He said he saw how hard I had to work and how I was always worried, so he made me sing this song when things were getting me down. It lightens my cares and makes me forget my weariness. I was singing it just now because I had some problems on my mind, and I never imagined that you would be listening." 
"If you've got an Immortal for a neighbour, you ought to learn from him how to cultivate your conduct and get him to teach you a recipe for eternal youth." 
"I've had a hard life," the woodcutter replied. "My mother and father brought me up till I was about eight, and just when I was beginning to know about life my father died. My mother remained a widow, and I had no brothers or sisters. As I was the only child I had to look after my mother morning and night. Now she is old that I can't possibly leave her. Our land is so overgrown that I can't grow enough to feed and clothe both of us, so I have to cut a couple of bundles of firewood to sell in the market for a handful of coppers to buy the few pints of rice that I cook for myself and for my mother. That's why I can't cultivate my conduct." 
"From what you say," the Monkey King replied, "you're a filial son and a gentleman−−you're bound to be rewarded for it one day. But I'd be grateful if you could show me where that Immortal lives, so that I can go and pay him my respects." 
The woodcutter said, "It's not far from here. This mountain is the Spirit Tower Heart Mountain, and in it there is the Cave of the Setting Moon and the Three Stars. In that cave lives an Immortal called the Patriarch Subhuti. I don't know how many disciples he has trained−−there are thirty or forty of them cultivating their conduct with him at the moment. If you take that path South for two or three miles you'll reach his home." 
The Monkey King tugged at the woodcutter and said, "Take me there, Elder Brother. If I get anything out of this, I won't forget your kindness." 
"You idiot," the woodcutter replied, "didn't you understand what I told you just now? If I went with you I wouldn't be able to earn my living, and who would look after my poor old mother then? I've got to get on with my woodcutting. Go by yourself." 
After hearing this the Monkey King had to take his leave. He came out of the forest and found the path, which led up a mountain slope for two or three miles, when he saw the cave. He pulled himself up to his full height to take a look, and it was a really magnificent place: 
Misty clouds scattered colours, 
Sun and moon shimmered bright. 
A thousand ancient cypresses, 
Ten thousand lofty bamboos. 
A thousand ancient cypresses, 
A soft green drawing the rain from the sky. 
Ten thousand lofty bamboos, 
And a misty valley is azure blue. 
Outside the gate rare flowers spread brocade; 
Beside the bridge wafts the scent of jade flowers. 
Rocky crags jut, glossy with green moss; 
On overhanging cliffs blue lichen grows. 
Sometimes the call of the crane is heard 
And often you see the phoenix soar. 
Echoes beyond the Ninth Heaven and the Milky Way. 
The brilliance of its wings colours the clouds. 
Black apes and white deer can be just made out; 
Golden lions and jade elephants prefer to keep hidden. 
If you look closely at this happy land, 
You will see that it rivals paradise. 
He saw that the doors of the cave were shut fast, and that everything was still, with no signs of any people. He turned round and noticed that there was a stone tablet about thirty feet high and eight feet wide at the top of the cliff. On it was carved in enormous letters: SPIRIT−TOWER HEART MOUNTAIN, CAVE OF THE SETTING MOON AND THE THREE STARS. The Monkey King exclaimed with delight, "The people here really are honest. The mountain and the cave do exist." He took a good long look, but did not dare to knock on the door. He climbed to the and of a pine branch and ate some pine seeds to amuse himself. Before long the doors of the cave opened with a creak, and an immortal boy came out. In the nobility of his bearing and the exceptional purity of his features he was completely different from an ordinary boy. 
His hair was bound with a pair of silken bands, 
His flowing gown had two capacious sleeves. 
His face and body were naturally distinguished; 
His mind and appearance were both empty. 
For many years a guest beyond the world of things, 
An eternal child amid the mountains, 
Untouched by any speck of dust, 
He let the years go tumbling by. 
When this boy had come out he shouted, "Who's making that row out here?" 
The Monkey King scampered down the tree, went up to him, and said with a bow, "Immortal child, I am a disciple who has come to ask about the Way and study under the Immortal. The last thing I'd do would be to make a row here?" The boy laughed. 
"So you've come to ask about the Way, have you?" 
"Yes," the Monkey King replied. 
"Our master has just got up," the boy said, "and has now mounted the dais to expound the Way. Before he had started to explain about origins he told me to open the door. He said, 'There is someone outside who wants to cultivate his conduct. Go and welcome him.' I suppose he must have meant you." 
"Yes, he meant me," the Monkey King said with a smile. 
"Come with me," the boy said. 
The Monkey King straightened his clothes and followed the boy deep into the depths of the cave. He saw majestic pavilions and towers of red jade, pearl palaces and gateways of cowry, and countless rooms of silence and secluded cells leading all the way to a jasper dais. He saw the Patriarch Subhuti sitting on the dais and thirty−six minor Immortals standing below it. 
A golden Immortal of great enlightenment, free from filth, 
Subhuti, the marvel of the Western World. 
Neither dying nor born, he practices the triple meditation, 
His spirit and soul entirely benevolent. 
In empty detachment he follows the changes; 
Having found his true nature he lets it run free. 
As eternal as Heaven, and majestic in body, 
The great teacher of the Law is enlightened through aeons. 
As soon as the Handsome Monkey King saw him he bowed low and knocked his head on the ground before him many times, saying, "Master, master, your disciple pays his deepest respects." 
"Where are you from?" the Patriarch asked. "You must tell me your name and address before you can become my pupil." 
"I come from the Water Curtain Cave in the Flowers and Fruit Mountain in the land of Aolai in the Eastern Continent of Superior Body," replied the Monkey King. 
"Throw him out," the Patriarch roared. "He's a liar and a cheat, and even if he tried cultivating his conduct he would get nowhere." 
The Monkey King desperately kept hitting his head on the ground and said, "Your disciple spoke the truth. I promise I wasn't lying." 
The Patriarch asked, "If you were speaking the truth, why did you say that you came from the Eastern Continent of Superior Body? Between here and the Eastern Continent there are two seas and the Southern Jambu Continent, so how could you possibly have come here from there?" 
The Monkey King, still kowtowing, replied, "I sailed across seas and oceans, crossed frontiers and wandered through many countries for over ten years before I arrived here." 
"So you came here by stages," the Patriarch remarked. "What is your surname?" 
"I'm not surly," the Monkey King replied. "If people call me names it doesn't bother me, and if they hit me I don't get angry. I'm just polite to them and that's that. I've never been surly." 
"I didn't ask if you were surly. I wanted to know the surname you inherited from your parents." 
"I didn't have any parents," the Monkey King replied. 
"If you had no parents, did you grow on a tree?" 
"I grew not on a tree but in a stone," the Monkey King replied. "All I remember is that there was a magic stone on the top of the Flower and Fruit Mountain, and that one year the stone split open and I was born." 
Concealing his delight at searing this, the Patriarch remarked, "In other words, you were born of Heaven and Earth. Walk around for a moment and let me have a look at you." The Monkey King leapt to his feet and shambled round a couple of times. 
The Patriarch smiled and said, "Though you have rather a base sort of body, you look like one of the rhesus monkeys that eat pine seeds, and I ought to give you a surname that fits your appearance and call you Hu ('Macaque'). The elements that make up the character Hu are 'animal,' 'old' and 'moon'. What is old is ancient, and the moon embodies the Negative principle, and what is ancient and Negative cannot be transformed. But I think I would do much better to call you Sun ('Monkey'). Apart from the 'animal' element, the character Sun has one part implying male and one part suggesting a baby, which fits in with my basic theories about children. Your surname will be Sun." 
When the Monkey King heard this he kowtowed with delight and said, "Great! Great! Now I have a surname. I am eternally grateful to you for your mercy and compassion, master. I beg you to give me a personal name to go with my new surname, then it will be much easier to address me." 
"There are twelve words within my sect," said the Patriarch, "which I give as names. You belong to the tenth generation of my disciples." 
"What are these twelve words?" asked the Monkey King. 
"Broad, great, wisdom, intelligence, true, likeness, nature, sea, bright, awakened, complete and enlightenment. If we work out the generations of disciples, then you should have a name with Wu ('Awakened') in it. So we can give you the Dharma−name Sun Wukong, which means 'Monkey Awakened to Emptiness'. Will that do?" 
"Marvellous, marvellous," said the smiling Monkey King. "From now on my name will be Sun Wukong." Indeed: 
When the Great Vagueness was separated there were no surnames; 
To smash foolish emptiness he had to be awakened to emptiness. 
If you want to know what success he had in cultivating his conduct, you must listen to the explanation in the next installment. 

`,
    },
  ],
  [
    2,
    {
      createdAt: new Date(),
      title: `Chapter 2: He Becomes Aware of the Wonderful Truth of Enlightenment 
By Killing the Demon He Realizes His Spirit−Nature 
`,
      content: `s
The story goes on to tell how after being given a name the Handsome Monkey King jumped for joy and bowed to Subhuti to express his thanks. The Patriarch then ordered the others to take Sun Wukong out through the double doors and teach him how to sprinkle and sweep the floor, answer orders, and deport himself properly. All the Immortals went out in obedience to this command. When Sun Wukong was outside the doors he bowed to all his spiritual elder brothers and laid out his bed on the verandah. The next morning and every following day he studied language and deportment under his spiritual elder brothers, expounded the scriptures, discussed the Way, practiced calligraphy, and burnt incense. When he had any spare time he would sweep the grounds, dig the vegetable patch, grow flowers, tend trees, look for kindling, light the fire, carry water, and fetch soy. Everything he needed was provided. Thus six or seven years slipped by in the cave without his noticing them. One day the Patriarch took his seat on the dais, called all the Immortals together, and began to explain the Great Way. 
Heavenly flowers fell in profusion, 
While golden lotuses burst forth from the earth. 
Brilliantly he expounded the doctrine of the Three Vehicles, 
Setting forth ten thousand Dharmas in all their details. 
As he slowly waved his whisk, jewels fell from his mouth, 
Echoing like thunder and shaking the Nine Heavens. 
He showed that the Three Beliefs are basically the same. 
In explaining a single word he brought one back to the truth, 
And taught the secrets of avoiding birth and understanding one's nature. 
As Monkey sat at the side listening to the exposition he was so delighted that he tugged at his ear, scratched his cheek and smiled. He could not help waving his hands and stamping. When the Patriarch noticed this he said to Monkey, "Why are you leaping around like a madman in class instead of listening to the lesson?" 
"Your disciple is listening to the exposition with all his attention," Monkey replied, "but your marvellous words made me so happy that I started jumping around without realizing what I was doing. Please forgive me." 
To this the Patriarch replied, "If you really understand my marvellous words, then answer this question. How long have you been in my cave?" 
"You disciple was born stupid," Monkey replied, "so I've no idea how long I've been here. All I know is that whenever the fire in the stove goes out I go to the other side of the mountain to collect firewood and there I see a hill covered with fine peach trees. I've had seven good feeds of peaches there." 
"That hill is called Tender Peach Hill. If you have eaten there seven times you must have been here seven years. What sort of Way do you want to learn from me?" 
"That depends what you teach me, master. As long as there's a whiff of Way to it, your disciple will learn it." 
"There are three hundred and sixty side−entrances to the Way, and they all lead to a True Result," the Patriarch said. "Which branch would you like to study?" 
"I will do whatever you think best, master," replied Monkey. 
"What about teaching you the Way of Magic Arts?" 
"What does 'the Way of Magic Arts' mean?" 
"Magic arts," the Patriarch replied, "include summoning Immortals, using the magic sandboard, and divining by milfoil. With them one can learn how to bring on good fortune and avert disaster." 
"Can you become immortal this way?" asked Monkey. 
"No, certainly not," replied the Patriarch. 
"Shall I teach you the Way of Sects?" the Patriarch asked. 
"What are the principles of the Sects?" said Monkey. 
"Within the branch of Sects, there is Confucianism, Buddhism, Taoism, the study of the Negative and Positive, Mohism, medicine, reading scriptures and chanting the name of a Buddha. You can also summon Immortals and Sages with this branch." 
"Can you attain immortality that way?" asked Monkey. 
"To try and attain immortality that way," the Patriarch replied, "is like 'putting a pillar in the wall.'" 
"Master," Monkey said, "I'm a simple chap and I can't understand your technical jargon. What do you mean by 'putting a pillar in the wall?'" 
"When a man builds a house and wants to make it strong he puts a pillar in the wall. But when the day comes for his mansion to collapse the pillar is bound to rot." 
"From what you say," Monkey observed, "it's not eternal. No. Shan't learn it." 
"Shall I teach you the Way of Silence?" the Patriarch then asked. 
"What True Result can be got from Silence?" said Monkey. 
"It involves abstaining from grain, preserving one's essence, silence, inaction, meditation, abstaining from speech, eating vegetarian food, performing certain exercises when asleep or standing up, going into trances, and being walled up in total isolation." 
"Is this a way of becoming immortal?" Monkey asked. 
"It's like building the top of a kiln with sun−dried bricks," the patriarch replied. 
"You do go on, master," said Sun Wukong. "I've already told you that I can't understand your technical jargon. 
What does 'building the top of a kiln with sun−dried bricks' mean?" 
"If you build the top of a kiln with sun−dried bricks they may make it look all right, but if they have not been hardened with fire and water, then they will crumble away in the first heavy rainstorm." 
"There's nothing eternal about that either, then," replied Monkey. "No. Shan't learn that." 
"Shall I teach you the Way of Action then?" the Patriarch asked. 
"What's that like?" Monkey asked. 
"It involves acting and doing, extracting the Negative and building up the Positive, drawing the bow and loading the crossbow, rubbing the navel to make the subtle humors flow, refining elixirs according to formulae, lighting fires under cauldrons, consuming 'Red lead,' purifying 'Autumn Stone,' and drinking women's milk." 
"Can doing things like that make me live for ever?" Monkey asked. 
"To try and attain immortality that way is like 'lifting the moon out of water.'" 
"What does 'lifting the moon out of water' mean?" 
"The moon is in the sky," the Patriarch replied, "and only its reflection is in the water. Although you can see it there, you will try in vain to lift it out." 
"No. Shan't learn that," Monkey exclaimed. 
When the Patriarch heard this he gasped and climbed down from his dais. Pointing at Sun Wukong with his cane he said, "You won't study this and you won't study that, so what do you want, you monkey?" He went up to Monkey and hit him three times on the head, then went inside with his hands behind his back and shut the main door, abandoning them all. The class was shocked, and they all blamed Sun Wukong. 
"You cheeky ape, you've no idea how to behave. The master was teaching you the Way, so why did you have to argue with him instead of learning from him? Now you've offended him we don't know when he'l come out again." They were all very angry with him and regarded him with loathing and contempt. But Sun Wukong was not bothered in the least, and his face was covered with smiles. 
The Monkey King had understood the riddle, and had the answer hidden away in his mind. So he did not argue with the others but bore it all without a word. When the Patriarch hit him three times he had been telling him to pay attention at the third watch; and when he went inside with his hands behind his back and shut the main door he had told the Monkey King to go in through the back door and be taught the Way in secret. 
The delighted Sun Wukong spent the rest of that day with the others in front of the Three Stars Cave, looking at the sky and impatient for night to come. At dusk he went to bed like all the others, pretended to close his eyes, control ed his breathing, and calmed himself down. Nobody beats the watches or cal s out the hour in the mountains, so he had no way of knowing the time except by regulating the breath going in and out of his nose. When he reckoned that it was about the third watch he got up very quietly, dressed, and slipped out through the front door away from the others. When he was outside he looked up and saw 
The moon was bright and clear and cold, 
The vast space of the eight points was free from dust. 
Deep in the trees a bird slept hidden, 
While the water flowed from the spring. 
Fireflies scattered their lights 
And a line of geese was stretched across the clouds. 
It was exactly the third watch, 
The right time to ask about the Way. 
Watch the Monkey King as he follows the old path to the back door, which he found to be ajar. "The Patriarch has left the door open, so he real y intends to teach me the Way," he exclaimed in delight. He tiptoed toward, went in sideways through the door, and walked over to the Patriarch's bed, where he saw the Patriarch sleeping curled up, facing the inside of the room. Not daring to disturb him, Sun Wukong knelt in front of the bed. Before long the Patriarch woke up, stretched out both his legs, and mumbled to himself: 
"It's hard, hard, hard. The Way is very obscure, Don't make light of the Gold and the Cinnabar. 
To teach miraculous spells to any but the Perfect Man, Is to tire the voice and dry the tongue in vain." 
Sun Wukong said in reply, "Master, your disciple has been kneeling here for a long time." 
When the Patriarch heard that it was Sun Wukong who was speaking he pul ed some clothes on, sat up cross-legged, and shouted, "It's that monkey. 
Why have you come into my room instead of sleeping out in front?" 
"Master, you told me publicly in front of the altar yesterday that your disciple was to come in here through the back gate at the third watch as you were going to teach me the Way. That is why I made so bold as to come to pay my respects beside my master's bed." 
The Patriarch was very pleased to hear this and said to himself, "This wretch was indeed born of Heaven and Earth. Otherwise he wouldn't have been able to understand my cryptic message." 
Sun Wukong said, "There is no third pair of ears in this room; your disciple is the only other person here. I hope, master, that in your great mercy you wil teach me the Way of Immortality. If you do, I'l always be grateful to you." 
"You are predestined," the Patriarch said, "so I shall be happy to tel you. 
Since you understood my cryptic message, come over here and listen careful y while I teach you the miraculous Way of Immortality." Sun Wukong kowtowed with gratitude and knelt before the bed, listening with all his attention. The Patriarch said: 
"True spells, revealing secrets and a;l powerful, Are the only sure way of protecting one's life. 
They all come from essence, vapour, and spirit, Must never be divulged, and be stored in the body, Then the Way I teach you will flourish of itself. 
Many are the benefits of learning spells: 
They give protection from evil desires and make one pure. 
Make one pure with a dazzling radiance 
Like a bright moon shining on a cinnabar tower. 
The moon contains a Jade Rabbit, the sun a Golden Crow, The Tortoise and the Snake are always intertwined. 
Always intertwined, then life is firm, 
And one can plant golden lotuses in fire. 
Grasp al the Five Elements and turn them upside down, And when you are successful you can become a Buddha, or an Immortal." 
The Patriarch's explanation went to the root of things, and Sun Wukong's heart was filled with bliss as he commit ed the spells to memory. He bowed to the Patriarch to express his deep gratitude and went out of the back door to look. He saw that there was a trace of white in the East, while the golden light of the moon was shining in the West. He went to the front door by the old path, pushed it open gently, and went in. 
He sat down where he had been sleeping earlier, shook his bedding and said loudly, "It's dawn, it's dawn. Get up." The others were all asleep, unaware of Sun Wukong's good fortune.At daybreak he got up and muddled through the day, while secretly keeping to what he had been told. In the afternoon and evening he regulated his breathing. 
After three years had passed in this way the Patriarch once more sat on his lecturing throne and expounded the Dharma to the students. He recounted famous sayings and parables, and discussed external phenomena and external appearances. 
Without warning he asked, "Where is Sun Wukong?" Sun Wukong went forward, knelt down and replied, "Your disciple is present." 
"What Way have you cultivated since coming here?" 
"Your disciple is now fairly well conversant with the Dharma," Sun Wukong replied, "and my Source is getting gradual y stronger." 
"If you are conversant with the Dharma and you know about the Source," the Patriarch replied, "and if the spirit has already flowed into you, then you must beware of the 'Three Disasters.'" 
Sun Wukong thought for a long time, then he said, "Patriarch, you're talking rubbish. I have often heard that the Way is lofty and its power mighty, that it is as eternal as Heaven, that it can overcome fire and water, and prevent all illnesses from arising, so how could there be "Three Disasters?'" 
To this the Patriarch replied, "This is not the ordinary Way: it involves seizing the very creation of Heaven and Earth, and encroaching on the hidden workings of the sun and moon. Once the elixir is made, devils and spirits cannot tolerate it.Although it will preserve the youthfulness of your face and prolong your life, in five hundred years' time Heaven will strike you with a thunderbolt. You must be clear-sighted in nature and mind, so that you can hide from it before it comes. If you succeed in avoiding it you will live as long as Heaven; and if you don't, it will kill you.Another five hundred years later Heaven will burn you with fire. This fire will be not heavenly fire or ordinary fire but 'hidden fire'. It will burn you from the soles of your feet to the crown of your head; your five viscera will be reduced to ashes, your four limbs will be destroyed, and a thousand years of asceticism will have been so much wasted time. Yet another five hundred years later a wind will blow at you. It will not be the North, South, East, or West wind, nor will it be a warm, fragrant wind from the Northwest; nor will it be the kind of wind that blows among flowers, willows, pine, and bamboo. It will be what is called a 'monster wind'. It will blow through the crown of your head down into your six entrails. It will go through the Cinnabar Field below your navel and penetrate your nine orifices. Your flesh and your bones will be destroyed and your body will disintegrate. So you must avoid all three of these disasters." 
"That would be easy," the Patriarch replied, "but for the fact that you are different from other people—which means that I can't." 
"I have a head that faces the sky and feet standing on earth," said Sun Wukong. "I have nine orifices and four limbs, five viscera and six entrails. 
How am I different from anyone else?" 
"Although you are quite like other people, your cheeks are too smal ." Now the Monkey had a funny face, with cheeks that caved inwards and a sharp chin. 
Sun Wukong felt it with his hand and replied with a laugh, "Master, you didn't take everything into account. Although I'm a bit short of jaw, I've got more dewlap than other people to make up for it." 
"Very well then," the Patriarch said, "which would you prefer to learn: the thirty−six heavenly transformations or the seventy−two earthly ones?"\ 
"Your disciple wants to get as much out of it as he can, so I would like to learn the seventy-two earthly ones." 
"If that's what you want," the Patriarch replied, "come here and I'll teach you the spells." Thereupon he whispered into Sun Wukong's ear, and who knows what miraculous spells he taught him? The Monkey King was the sort of person who understands everything once he is told a tiny part, and he learned the spells on the spot. He practiced and trained until he had mastered all seventy−two transformations. One day the Patriarch and all his disciples were enjoying the sunset outside the Three Stars Cave. 
The Patriarch asked Sun Wukong, "Have you succeeded yet?" 
Sun Wukong replied, "Thanks to your infinite mercy, master, your disciple's results have been perfect, and I can now rise on the clouds and fly." 
"Let me see you try a flight," the Patriarch said. Sun Wukong used his skill to perform a series of somersaults that carried him fifty or sixty feet into the air, then walked around on the clouds for about as long as it takes to eat a meal. 
He covered about a mile altogether before landing in front of the Patriarch, folding his arms across his chest, and saying, "Master, that's flying and soaring in the clouds." The Patriarch laughed. 
"That's not soaring on the clouds−−it's just climbing up them. There is an old saying that 'an Immortal visits the Northern Sea in the morning and Cangwu in the evening'. But to take as long as you did just to go a mile doesn't count as climbing on the clouds." 
"How can it be possible to visit the Northern Sea in the morning and Cangwu in the evening?" Sun Wukong asked. 
"All cloud−soarers start off from the Northern Sea early in the morning, visit the Eastern, Western and Southern Seas, and then come back to Cangwu; Cangwu is what the Northern Sea is called in the Lingling language. When you can go beyond all four seas in a single day you can regard yourself as a cloud−soarer." 
"But that must be very difficult," Sun Wukong observed. 
"Where there's a will there's a way," the Patriarch replied. 
"Nothing by halves, master," replied Sun Wukong with bows and kowtows, "I beg of you in your great mercy to teach me the art of cloud−soaring. I promise that I will always be grateful." 
"Immortals take off with a stamp of their feet," said the Patriarch, "but you do it differently−−just now I saw you pull yourself up. As that is the way you do it, I'll show you how to do it your own way and teach you the 'somersault cloud.'" Sun Wukong bowed again, imploring him to do so, and the Patriarch taught him the spell. 
"For this kind of cloud," the Patriarch said, "you make the magic by clasping your hands in the special way, recite the words of the spell, clench your fist, shake yourself, and jump. With one somersault you can go sixty thousand miles." When the others heard this they all exclaimed with a laugh. 
"Lucky old Sun Wukong. With magic like this he could be−a messenger delivering official letters and reports, and he'd never go short of a meal." When it was dark the Patriarch and his pupils returned to the cave. That night Sun Wukong moved his spirit, practiced the technique, and mastered the cloud somersault. From then on he was free from all restraint and he enjoyed the delights of immortality, drifting around as he pleased. 
On a day when spring was giving way to summer, and all the students had been sitting under some pine trees listening to lectures for a long time, they said, "Sun Wukong, in what life did you earn your present destiny? The other day our teacher whispered to you how to do the transformations to avoid the Three Disasters. Can you do them all yet?" 
"It's true, brothers," said Sun Wukong with a grin, "I can do them all. In the first place, it's because our master taught me; and in the second place, it's because I practiced them hard day and night." 
"This would be a good time for you to give us a demonstration." At this suggestion Sun Wukong braced his spirit to show off his skill."What's it to be, brothers? Tell me what you'd like me to turn myself into." 
"Turn into a pine tree," they all said. Sun Wukong clenched his fist, said the magic words, shook himself, and changed into a pine tree. It was truly 
Green and misty throughout the four seasons, 
Raising its upright beauty to the clouds. 
Not in the least like a demon monkey, 
Every inch a tree that withstands frost and snow. 
When the students saw it they clapped their hands and chuckled aloud, saying, "Good old monkey, good old monkey." They did not realize that the row they were making had disturbed the Patriarch, who rushed out through the door, dragging his stick behind him. 
"Who's making a row out here?" he asked. The students hurriedly pulled themselves together, straightened their clothes and went over to him. Sun Wukong, who had now resumed his real appearance, said from the forest, "Master, we were holding a discussion here, and there were no outsiders making a din." 
"Yelling and shouting like that," the Patriarch angrily roared, "is no way for those cultivating their conduct to behave. If you are cultivating your conduct, the subtle vapours escape when you open your mouth, and when you wag your tongue, trouble starts. What was all the laughing and shouting about" 
"Just now Sun Wukong did a transformation for fun. We told him to turn himself into a pine tree, and he did. We all praised and applauded him, which was why we disturbed you with the noise, master. We beg you to forgive us." 
The Patriarch sent them all away except for Sun Wukong, to whom he said, "Come here. Is that a way to use your spirit? To change into a pine tree? Is this a skill you should be showing off in front of people? If you saw somebody else doing that, wouldn't you ask him to teach you? If other people see you doing it, they're bound to ask you to teach them, and if you want to keep out of trouble you'll have to do so; otherwise they may do you harm, and then your life will be in danger." 
Sun Wukong kowtowed and said, "Please forgive me, master." 
"I shan't punish you," the Patriarch replied, "but you'll have to go." Sun Wukong's eyes filled with tears. 
"Master, where am I to go?" 
"Go back to where you came from." Sun Wukong had a sudden awakening, and he said, "I came from the Water Curtain Cave on the Mountain of Flowers and Fruit in the country of Aolai in the Eastern Continent of Superior Body." 
"If you hurry back there," the Patriarch replied, "you will be able to preserve your life. If you stay here it will be absolutely impossible to do so." Sun Wukong accepted his punishment. 
"Yes, master," he said. "I've been away from home for twenty years and I do miss the old days and my children and grandchildren. But when I remember that I have not yet repaid your enormous generosity to me, I can't bring myself to go." 
"What sort of kindness would you be doing me if you stayed? I'll be happy enough if you keep me out of any disasters you cause." 
Seeing that there was nothing else for it, Sun Wukong bowed and took leave of him, saying good−bye to all the other students. 
"Now that you're going," the Patriarch said, "I'm sure that your life will not be a good one. Whatever disasters you cause and crimes you commit, I forbid you under any circumstances to call yourself my disciple. If you so much as hint at it I'll know at once, and I'll tear off your monkey skin, chop up your bones, and banish your soul to the Ninth Darkness. I won't let you out for ten thousand aeons." 
"I promise never to give away a single letter of your name," said Sun Wukong. "I'll just say that I taught myself." 
Sun Wukong took his leave and went away. Making the spell by clasping his fist he jumped head over heels, summoned a somersault cloud, and went back to the Eastern Continent. Within two hours he saw the Water Curtain Cave on the Mountain of Flowers and Fruit. The Handsome Monkey King was so pleased that he said to himself: 
"When I left here my mortal flesh and bones were heavy, 
But now I have the Way my body's light. 
No one in the world has real determination, 
To the firm will, the hidden becomes clear. 
When I last crossed the seas the waves got in my way, 
But now on my return the journey's easy. 
The parting words still echo in my ears; 
When will I see The Eastern Ocean again?" 
Sun Wukong put away his cloud and headed straight to the Mountain of Flowers and Fruit. As he followed the path there he heard the call of the cranes and the cries of the apes. The crane calls echoed beyond the Milky Way, and the ape cries were pathetically sad. 
Sun Wukong shouted, "Children, I'm back." 
Big monkeys and little monkeys came bounding in their thousands and tens of thousands from caves in the cliffs, from the grass and flowers, and down from the trees. They all crowded round the Handsome Monkey King, kowtowed and said, "Your Majesty, you're a cool one. How could you stay away for so long, abandoning us all here? We've been desperate for you to come back. A demon has been mistreating us terribly. He's occupied our Water Curtain Cave, and we've been fighting for our lives with him. Recently he's been stealing our things and carrying off many of our youngsters. We've had to stay awake all night to guard our families. Thank goodness you've come back! Another year without you, Your Majesty, and every one of us would be under his control, cave and all." 
Sun Wukong was furious, "Who is this demon? What an outrage! Tell me everything about him, and then I'll go and give him what's coming to him." 
The monkey host kowtowed again and said, "Your Majesty, the wretch calls himself the Demon King of Confusion. He lives North of here." 
"How far away is his lair?" Sun Wukong asked. 
"He comes and goes in cloud and mist with wind and rain, or thunder and lightning, so we don't know how far it is." 
"If that's how it is," Sun Wukong replied, "then don't worry. Just keep yourselves amused while I go and find him." 
The splendid Monkey King jumped up into the air, and as he somersaulted towards the North he saw a high and precipitous mountain. It was a fine sight: 
Perpendicular peaks jutting straight up, 
Deep−sunk winding streams. 
The perpendicular peaks jutting straight up pierced the sky; 
The deep−sunk winding streams led to the underworld. 
On pairs of cliffs the plants compete in strangeness; 
Elsewhere pine vies in greenness with bamboo. 
To the left are docile dragons, 
To the right are tame tigers. 
Iron oxen ploughing are a common sight, 
Golden coins are always sown as seeds. 
Hidden birds sing beautifully, 
Red phoenixes stand in the sun. 
Racing over stones, the clear waves 
Twist and bend in a vicious torrent. 
Many are the famous mountains in the world, 
And many the flowers that bloom and wither on them. 
But this scenery is eternal, 
Unchanging through the four seasons. 
It is truly the mountain from which the Three Worlds spring, 
The Cave in the Belly of the Water that nourishes the Five Elements 
As the Handsome Monkey King stood gazing in silence at this view, he heard voices. When he went down the mountainside to look he found the Cave in the Belly of the Water facing the cliff. Several minor demons were dancing around in front of the cave doors, and they ran away as soon as they saw Sun Wukong. 
"Wait a moment," Sun Wukong said. "I want you to take a message for me. I am the King of the Water Curtain Cave in the Mountain of Flowers and Fruit that lies due South of here. I've come to find that Demon of Confusion of yours, or whatever he's called, the one who's been mistreating my children and grandchildren, and have it out with him." 
The minor demons scuttled into the cave and reported, "A disaster, Your Majesty." 
"What do you mean, disaster?" the demon king asked. 
"There's a monkey outside the cave," the minor demons reported, "who says that he's the King of the Water Curtain Cave on the Mountain of Flowers and Fruit. He says that you have been bullying his children and grandchildren, and that he's come specially to find you to have it out with you." The demon king laughed. 
"Those monkey devils are always going on about a king of theirs who renounced the world to cultivate his conduct; I suppose it must be him who's here now. Did you see how he was dressed or what weapons he was carrying?" 
"He hasn't got any weapons. He's bareheaded, and he's wearing a red gown belted with a yellow silk sash, and a pair of black boots. He isn't dressed like a monk, or a layman, or an Immortal. He's bare−handed and empty−fisted, and he's standing outside the doors yelling." 
"Bring me my armour and weapons," said the demon king when he heard this. The minor demons produced them at once, and when he had donned his armour he went out of the door with all the demons, his sword in his hand. 
"Who is the King of the Water Curtain Cave?" he roared. Sun Wukong took a quick look at him and saw that 
On his head he wore a dark golden helmet, 
On his body he wore a black silk gown, 
Below that he wore black metal armour, 
Girt with a leather belt. 
On his feet he wore patterned boots, 
As splendid as a field−marshal's. 
His waist was ten feet round, 
And his height was thirty cubits. 
In his hand he held a sword, 
With gleaming point and edge. 
He called himself the Demon King of Confusion 
And his appearance was truly dazzling. 
"You insolent demon," shouted the Monkey King. "Your eyes may be big but you can't see who I am." 
The demon king laughed at him. "You don't even stand four feet from the ground, you're still in your twenties, and you've got no weapon in your hand. What sort of mad courage makes you challenge me to a fight?" 
"You insolent demon," retorted Sun Wukong, "how blind you are. You may think I'm small, but I can grow easily enough. You may think I'm unarmed, but I could pull the moon down from the sky with my two hands. Don't worry, old Sun Wukong will sock you one." Sun Wukong gave a jump and leapt into the air, taking a swing at his face. 
The demon king put out his hand to stop him and said, "Look how big I am, you dwarf. If you use your fists, I'll use my sword. But I'd only make myself look ridiculous if I killed you with a sword. Wait till I've put my sword down and then I'll give you a display of boxing." 
"Well said," exclaimed Sun Wukong, "spoken like a man. Come on then." The demon king dropped his guard to throw a punch, and Sun Wukong rushed in towards him, punching and kicking. When he spread out his hand it was enormous, and when he clenched his fist it was very hard. Sun Wukong hit the demon king in the ribs, kicked his backside, and smashed several of his joints. The demon king seized his steel sword that was as big as a plank, and swung it at Sun Wukong's skull. Sun Wukong dodged the blow, and the sword only split air. Seeing how ugly the demon king had turned, Sun Wukong used his magic art of getting extra bodies. He pulled out one of his hairs, popped it in his mouth, chewed it up, and blew it out into the air, shouting, "Change!" It turned into two or three hundred little monkeys, who all crowded round him. 
Sun Wukong now had an immortal body, and there was no magic transformation of which he was not capable. Since he had followed the Way he could change each of the eighty−four thousand hairs on his body into anything he wanted. The little monkeys were too quick and nimble for sword or spear. 
Look at them, leaping forwards and jumping backwards, rushing up and surrounding the demon king, grabbing him, seizing him, poking him in the backside, pulling at his feet, punching him, kicking him, tearing his hair out, scratching at his eyes, twisting his nose, all picking him up together and throwing him to the ground. They went on until they had beaten him to a pulp. Sun Wukong snatched his sword from him, told the little monkeys to get out of the way, and brought it down on the crown of his head, splitting it into two. 
Then he led his forces charging into the cave, where they exterminated all the demons, big and small. He shook his hair and put it back on his body. The monkeys who did not go back on his body were the little monkeys the demon king had carried off from the Water Curtain Cave. Sun Wukong asked them how they had got there. 
There were thirty of forty of them, and they replied with tears in their eyes, "It was after Your Majesty went off to become an Immortal. He has been fighting with us for the last two years. He brought us all here by force. All the things here−−the stone bowls and plates−−were stolen from our cave by that beast." 
"If it's our stuff, take it all out," said Sun Wukong. He then set fire to the Cave in the Belly of the Water and burnt it to a cinder. 
"Come back with me," he ordered the monkeys. 
"Your Majesty," they replied, "when we came here all we could hear was the wind howling in our ears as it blew us here, so we don't know the way. How are we ever going to get back?" 
"There's nothing at all to that spell he used," said Sun Wukong. "I can do it too, as now I only have to know the smallest bit about something to understand it completely. Shut your eyes and don't worry." 
Splendid Monkey King. He recited a spell, took them riding on a hurricane, then brought the cloud down to the ground. 
"Open your eyes and look, children," he shouted. As soon as the monkeys' feet touched the ground they recognized their home. In their delight they all ran along the familiar path to the cave, and the monkeys who had stayed in the cave all crowded in as well. They divided themselves into age−groups and bowed in homage to the Monkey King. Wine and food was laid out to celebrate, and they asked him how he had defeated the demon king and saved their children. When Sun Wukong had told them the whole story the monkeys were full of admiration. 
"Where did you learn such arts, Your Majesty?" they asked insistently. 
"When I left you," Sun Wukong replied, "I followed the waves and the currents, and drifted across the Eastern Ocean to the Southern Jambu Continent. Here I taught myself to take human form and to wear these clothes and boots. I swaggered around for eight or nine years, but I never found the Way, so I sailed across the Western Ocean to the Western Continent of Cattle−gift. After long enquiries I was lucky enough to meet a venerable Immortal, who taught me the True Result, which makes me as immortal as heaven, and the great Dharma Gate to eternal youth." The monkeys all congratulated him and exclaimed that his like could not be found in a billion years. 
Sun Wukong laughed and said, "Children, we should congratulate ourselves on having a surname." 
"What is Your Majesty's surname?" the monkey masses asked. 
"My surname is now Sun, and my Buddhist name is Wukong." 
The monkeys all clapped their hands with joy and said, "Your Majesty is Old Sun, and we are Second Sun, Third Sun, Thin Sun, Little Sun−−a family of Suns, a nation of Suns, a den of Suns." They all offered Old Sun their respects, with big plates and small bowls of coconut toddy, grape wine, magic flowers, and magic fruit. 
The whole household was happy. My word! 
By uniting themselves with a single surname 
They are waiting to be transferred to the Register of Immortals. 
If you don't know how this ended and want to know about the rest of their lives there, then listen to the explanation in the next installment. 

`,
    },
  ],
  [
    3,
    {
      createdAt: new Date(),
      title: `Chapter 3: The Four Seas and Thousand Mountains All Submit 
In the Ninth Hell the Tenth Category Is Struck Off the Register 
`,
      content: `
We have related how the Handsome Monkey King returned home in glory, bringing a large sword he had captured when he killed the Demon King of Confusion. From then on they practiced the military arts every day. He asked the little monkeys to cut down bamboo to make spears, carve swords out of wood, and learn to use banners and whistles. They learned to advance and retreat, and build a camp with a stockade round it. 
They spent a lot of time playing at this. 
Once Sun Wukong was sitting in his seat of meditation when he wondered: "What would happen to us if our games were taken for the real thing? What if it alarmed some human monarch or gave offence to some king of birds or beasts? They might say that we were having military training for a rebellion, and attack us with their armies. You would be no match for them with your bamboo spears and wooden swords. We must have really sharp swords and halberds. What are we to do about it?" 
When the monkeys heard this they all said with alarm, "Your Majesty has great foresight, but there's nowhere we can get them." When it was the turn of four older monkeys to speak−−two bare−bottomed apes and two 
gibbons−−they came forward and said, "Your Majesty, if you want sharp weapons they can be very easily obtained." 
"How could it be easy?" asked Sun Wukong. 
"To the East of our mountain," they replied, "there is a lake some seventy miles wide that is the boundary of the country of Aolai. That country has a princely capital, and huge numbers of soldiers and civilians live in the city. It must have workshops for gold, silver, bronze and iron. If you went there, Your Majesty, you could either buy arms or get them made; then you could train us to use them in the defense of our mountain. This would give us long−term security." Sun Wukong was delighted with the suggestion. 
"Wait here while I go there," he said. 
Splendid Monkey King! He leapt on to his somersault cloud, crossed the seventy miles of lake, and saw that on the other side there was indeed a city wall, a moat, streets, markets, ten thousand houses, a thousand gates, and people coming and going in the sunlight. 
"There must be ready−made weapons here," Sun Wukong thought, "and getting a few by magic would be much better than buying them." So he made a magic with his fist and said the words of the spell, sucked in some air from the Southeast, and blew it hard out again. It turned into a terrifying gale carrying sand and stones with it. 
Where the thunderclouds rise the elements are in chaos; 
Black fogs thick with dust cloak the earth in darkness. 
Boiling rivers and seas terrify the crabs and fish; 
As trees are snapped off in mountain forests tigers and wolves flee. 
No business is done in any branch of commerce; 
And no one is working at any kind of trade. 
In the palace the king has gone to his inner quarters; 
And the officials in front of the steps have returned to their offices. 
The thrones of princes are all blown over; 
Towers of five phoenixes are shaken to their foundations. 
Where the storm blew, the prince of Aolai fled in terror, and gates and doors were shut in the streets and markets. Nobody dared to move outside. Sun Wukong landed his cloud and rushed straight through the gates of the palace to the arsenal and the military stores, opened the doors, and saw countless weapons: swords, pikes, sabres, halberds, battleaxes, bills, scimitars, maces, tridents, clubs, bows, crossbows, forks, and spears were all there. 
At the sight of them he said happily, "How many of these could I carry by myself? I'd better use the magic for dividing up my body." 
Splendid Monkey King. He plucked a hair from his body, chewed it up, spat it out, made the magic with his fist, said the words of the spell, and shouted "Change!" It turned into hundreds and thousands of little monkeys, who rushed wildly about grabbing weapons. The strong ones took six or seven each and the weaker ones two or three, and between them they removed the lot. He climbed back up on the clouds, called up a gale by magic, and took all the little monkeys home with him. 
The monkeys big and small of the Mountain of Flowers and Fruit were playing outside the gates of the cave when they heard the wind. At the sight of countless monkey spirits flying through the air they fled and hid. A moment later the Handsome Monkey King landed his cloud, put away his mists, shook himself, replaced his hair, and threw all the weapons into a pile beside the mountain. 
"Children," he shouted, "come and get your weapons." When the monkey masses looked they saw Sun Wukong standing by himself on some level ground, and they all rushed over to him to kowtow and asked what had happened. Sun Wukong told them the whole story of how he had raised the gale and taken the weapons. After all the monkeys had thanked him they snatched sabres, grabbed swords, seized battleaxes, fought for pikes, drew bows, stretched crossbows, shouted, yelled, and so amused themselves for the rest of the day. 
The next day they paraded as usual. Sun Wukong assembled all the monkey host, and they numbered over forty−seven thousand. This had alarmed all the strange beasts of the mountain−−wolves, monsters, tigers, leopards, deer, muntjacs, river−deer, foxes, wild cats, badgers, raccoons, lions, elephants, horses, orangutans, bears, stags, wild boar, mountain cattle, antelopes, rhinoceroses, little dogs, huge dogs. The kings of various kinds of monsters, seventy−two in all, all came to pay homage to the Monkey King. They offered tribute every year and attended court in each of the four seasons. They also took part in drill and paid their seasonal grain levies. Everything was so orderly that the Mountain of Flowers and Fruit was as secure as an iron bucket or a wall of bronze. The kings of the monsters sent gongs, drums, coloured flags, helmets, and armour in great abundance, and every day there were military exercises. 
One day, amid all this success, the Handsome Monkey King suddenly said to the other monkeys, "You are now expert in the bow and crossbow, and highly skilled in other weapons; but this sword of mine is too clumsy for my liking. What shall I do about it?" 
The four veteran monkeys came forward and submitted a suggestion: "Your Majesty is an Immortal, so mortals' weapons are not good enough for you. We wonder if Your Majesty is able to travel underwater." 
"Since hearing the Way," Sun Wukong replied, "I have mastered the seventy−two earthly transformations. My somersault cloud has outstanding magical powers. I know how to conceal myself and vanish. I can make spells and end them. I can reach the sky and find my way into the earth. I can travel under the sun or moon without leaving a shadow or go through metal or stone freely. I can't be drowned by water or burned by fire. 
There's nowhere I cannot go." 
"If Your Majesty has these magical powers, the stream under our iron bridge leads to the Dragon palace of the Eastern Sea. If you are willing to go down there, go and find the Dragon King and ask him for whatever weapon it is you want. Wouldn't that suit you?" 
"Wait till I get back," was Sun Wukong's delighted reply. 
Splendid Monkey King. He leapt to the end of the bridge and made a spell with his fist to ward off the water. 
Then he dived into the waves and split the waters to make way for himself till he reached the bed of the Eastern Sea. On his journey he saw a yaksha demon who was patrolling the sea. 
The yaksha barred his way and asked, "What sage or divinity are you, pushing the waters aside like that? 
Please tell me so that I can make a report and have you properly received." 
"I am the Heaven−born Sage Sun Wukong from the Mountain of Flowers and Fruit, and your old Dragon King's close neighbour. How is it you don't know me?" 
When the yaksha heard this he hurried back to the crystal palace and reported, "Your Majesty, Sun Wukong, the Heaven−born Sage from the Mountain of Flowers and Fruit who says he is your neighbour, is coming to your palace." Ao Guang, the Old Dragon King of the Eastern Sea, leapt to his feet and went out to meet Sun Wukong with his dragon sons and grandsons, his prawn soldiers, and his crab generals. 
"Come in, exalted Immortal," he said, taking Sun Wukong into the palace where they introduced themselves, seated him in the place of honour, and offered him tea. Then the Dragon King asked him, "Exalted Immortal, when did you find the Way, and what magic arts did you acquire?" 
"After my birth," said Sun Wukong, "I renounced the world and cultivated my conduct, and thus obtained an immortal and indestructible body. Recently I have trained my sons and grandsons to guard our cave, but unfortunately I have not yet found my self a weapon. I have long heard that my illustrious neighbour enjoys the delights of a jade palace with gate−towers of cowry, and I was sure that you must have some magic weapons to spare, so I have come especially to beg one of you." 
Not wishing to refuse this request, the Dragon King sent Commander Perch to fetch a large sword and offer it to Sun Wukong. 
"I don't know how to use a sword," said Sun Wukong, "so could I ask you to give me something else?" The Old Dragon King then sent Colonel Mackerel and Guard Commander Eel to fetch a nine−pronged spear. 
Sun Wukong leapt down from his seat, took it, tried it out, then flung it down, saying, "It's too light, far too light; and it doesn't suit me. I beg you to give me another." 
The Dragon King smiled as he said, "Exalted Immortal, don't you see that this weighs three thousand six hundred pounds?" 
"It doesn't suit me, it doesn't suit me at all," protested Sun Wukong. 
The Dragon King, feeling frightened now, ordered Provincial Commander Bream and Garrison Commander Carp to bring out a patterned heavenly halberd for warding off spells that weighed seven thousand two hundred pounds. 
As soon as he saw it Sun Wukong bounded forward to take it. He tried a few postures and thrusts with it then stuck it in the ground between them. "Still too light, far too light." 
The Dragon King, now really terrified, said, "Exalted Immortal, that halberd is the heaviest weapon in my palace." 
"As the old saying goes," said Sun Wukong with a grin, "'Never think the dragon king has no treasures.' Have another look, and if you find anything satisfying I'll give you a good price for it." 
"I really have nothing else," the Dragon King replied. 
As he was speaking, his dragon wife and dragon daughters came in from the back of the palace and said, 
"Your Majesty, by the look of him this sage must be really somebody. The piece of miraculous iron that anchors the Milkey Way in place has been shining with a lovely rosy glow for the last few days, and creating a most auspicious atmosphere. Perhaps it has started to shine to greet this sage." 
"That piece of miraculous iron is one of the nails that Yu the Great used to fix the depths of rivers and seas when he brought the waters under control," said the Dragon King. "What use could it be?" 
"Never mind whether it's useful or not," his wife replied. "Just give it to him and let him do with it as he pleases. At least you'll get him out of the palace." 
The Dragon King did as she suggested and described the piece of iron to Sun Wukong, who said, "Bring it out and let me see." 
"It can't be moved. You will have to go and look at it yourself, exalted Immortal." 
"Where is it? Take me there," said Sun Wukong. 
The Dragon King took him into the middle of the sea treasury, where all of a sudden they could see ten thousand rays of golden light. Pointing at it, the Dragon King said, "That's it, where all the light is coming from." 
Sun Wukong hitched up his clothes and went to give it a feel. He found that it was an iron pillar about as thick as a measure for a peck of grain and some twenty feet long. Seizing it with both hands he said, "It's too thick and too long. If it were a bit shorter and thinner it would do." As soon as these words were out of his mouth this precious piece of iron became several feet shorter and a few inches thinner. 
Sun Wukong tossed it in his hands, remarking that it would be even better if it were thinner still. The precious iron thereupon became even thinner. Sun Wukong was taking it out of the sea treasury to have a look at it when he saw that it had two gold bands round it, while the middle part was made of black iron. There was a line of inlaid writing near the bands which said that it was the AS−YOU−WILL COLD−BANDED CUDGEL: WEIGHT 13,500 POUNDS. 
Sun Wukong was delighted, though he did not show it. "I think that this little darling will do whatever I want." As he walked along he weighed it in his hand and said reflectively, "If it were even smaller still it would be perfect." By the time he had taken it outside it was twenty feet long and as thick as a rice bowl. 
Watch him as he uses his magical powers to try a few routines with it, whirling all round the crystal palace. 
The Old Dragon King was trembling with fright, and the little dragons were scared out of their wits. 
Terrapins, freshwater turtles, seawater turtles and alligators drew in their heads, while fish, shrimps, lobsters and giant turtles hid their faces. 
Holding his treasure in his hands, Sun Wukong sat down in the main hall of the palace of crystal and said with a smile to the Dragon King, "Many thanks, worthy neighbour, for your great generosity." 
The Old Dragon King humbly acknowledged his thanks, and Sun Wukong went on, "This piece of iron will be very useful, but there is one more thing I want to ask." 
"What might that be, exalted Immortal?" asked the Dragon King. 
"If I hadn't got this cudgel, that would be the end of the matter, but as I have got it the problem is that I don't have−the clothes to go with it. What are we to do about it? If you have any armour here, I'd be most obliged if you gave me a suit." The Dragon King said he had not any. 
"'A guest should not have to trouble two hosts,'" said Sun Wukong. "I won't leave without one." 
"Please try some other sea, exalted Immortal−−you may find one there." 
"'It's better to stay in one house than to visit three.' I beg and implore you to give me a suit." 
"I really don't have one," replied the Dragon King. "If I had I would present it to you." 
"If you really haven't, then I'll try this cudgel out on you." 
"Don't hit me, exalted Immortal, don't hit me," pleaded the Dragon King in terror. "Let me see whether my brothers have one that they could give you." 
"Where do your brothers live?" 
"They are Ao Qin, the Dragon King of the Southern Sea, Ao Shun, the Dragon King of the Northern Sea, and Ao Run, the Dragon King of the Southern Sea." 
"I'm damned if I'm going there: as the saying goes, 'Two in the pocket is better than three owing.' So be a good chap and give me one." 
"There is no need for you to go, lofty Immortal," the Dragon King replied, "I have an iron drum and a bronze bell. In an emergency we strike them to bring my brothers here in an instant." 
"In that case," said Sun Wukong, "hurry up and sound them." And indeed an alligator general struck the bell while a terrapin marshal beat the drum. The sound of the bell and the drum startled the other three dragon kings, who had arrived and were waiting together outside within the instant. 
One of them, Ao Qin, said, "Elder Brother, what's up? Why the drum and the bell?" 
"It hurts me to tell you, brother," the Old Dragon King replied. "There's this so−called heaven−born sage from the Mountain of Flowers and Fruit who came here this morning saying that I was his neighbour, then demanded a weapon. I offered him a steel−pronged spear but he said it was too small, and a patterned halberd that he said was too light. Then he picked up the miraculous iron that fastens the Milky Way and tried a few movements with it. Now he's sitting in the palace and demanding a suit of armour, but we haven't got one. 
That's why I used the bell and the drum to call you here. You three must have some armour. Please give him a suit, then we can get rid of him." 
When Ao Qin heard this he said in a fury, "To arms, brothers. Arrest the criminal." 
"No! No! It's out of the question," said the Old Dragon King. "If that iron cudgel of his gets you you're done for, if it hits you die, if it comes close your skin is broken, and if it so much as brushes against you your sinews are smashed." 
Ao Run, the Dragon King of the Western Sea, said, "Second brother, you must not attack him. Instead we should put a suit of armour together for him, then send him away. We can send a memorial about it to Heaven, then Heaven will of course punish him." 
"You're right," said Ao Shun, the Dragon King of the Northern Sea. "I have a pair of lotus−root cloud−walking shoes." 
"I've brought a suit of golden chain mail," said Ao Run, the Dragon King of the Western Sea. 
"And I have a phoenix−winged purple gold helmet," added Ao Qin, the Dragon King of the Southern Sea. The Old Dragon King was very pleased, and he brought them into the palace to meet Sun Wukong and present the equipment to him. 
Sun Wukong put on the golden helmet and the armour and the cloud−walking shoes, then charged out, waving his cudgel and saying to the dragons, "My apologies for disturbing you." The four Dragon Kings were most indignant, but we will not go into their discussions on the protest they sent to Heaven. 
Watch the Monkey King as he parts the waters and goes straight back to the iron bridge, where the four senior apes can be seen waiting for him at the head of the monkey host. Sun Wukong suddenly leapt out of the waves without a drop of water on him and gleaming with gold. 
As he came across the bridge the monkeys were so astonished that they fell to their knees and said, "How splendid you look, Your Majesty, how splendid." Sun Wukong, his face lit up with youthful vigor, climbed up to his throne, thrust his cudgel into the ground in their midst. The foolish monkeys all tried to grab this treasure, but it was as futile as a dragonfly trying to shake an iron tree: they were unable to move it in the slightest. 
Biting their fingers and sticking out their tongues they said, "Grandpa, it's so heavy, how can you possibly lift it?" 
Sun Wukong went over, lifted it with one hand, and laughed as he said to them, "Everything has its rightful owner. This little treasure has been lying in the sea treasury for goodness knows how many thousands of years, but it just happened to start shining this year. The Dragon King thought it was just a piece of ordinary iron, and said it was the miraculous treasure that holds the bed of the Milky Way in place. None of his men could move it, so he had to ask me to go and fetch it myself. It was more than twenty feet long then, and as thick as a peck−measure. When I picked it up I felt that it was too big, and it shrank till it was several times as small. I told it to get even smaller, and it did that too; then I told it to get smaller still, and it got many times smaller again. I hurried out into the light of day to look at it, and I saw that there was an inscription on it that read 'AS−YOU−WILL GOLD−BANDED CUDGEL: WEIGHT 13,500 POUNDS'. Stand aside, and I'll make it change again." 
Holding his treasure in his hand he said, "Shrink, shrink, shrink," and it became as small as an embroidery needle, tiny enough to be hidden in his ear. 
"Your Majesty," the monkeys cried out in astonishment, "bring it out and play with it again." 
So the Monkey King brought it out of his ear again, laid it on the palm of his hand, and said, "Grow, grow, grow." It became as thick as a peck again and twenty feet long. Now that he was really enjoying himself he bounded over the bridge and went out of the cave. Clasping his treasure he used some of his heaven and earth magic, bowed, and shouted, "Grow." 
He became a hundred thousand feet tall; his head was as big as a mountain, his waist like a range of hills, his eyes flashed like lightning, his mouth seemed to be a bowl of blood, and his teeth were as swords and halberds; the cudgel in his hands reached up to the Thirty−third Heaven and down to the Eighteenth Hell. The tigers, leopards and wolves, the beasts of the mountain, and the seventy−two monster kings all kowtowed and bowed in terror, trembling so much that they went out of their minds. A moment later he reverted to his proper size, turned his treasure into an embroidery needle, hid it in his ear, and went back to the cave. The panic−stricken kings of the monsters all came to offer their congratulations. 
There was a great display of banners and drums, and the air resounded to the sound of gongs and bells. Rare delicacies were set out in great quantities, cups brimmed with coconut toddy and the wine of the grape, and the Monkey King feasted and drank with his people for a long time. Then training went on as before. 
The Monkey King named the four senior apes as his four Stalwart Generals: he named the two bare−bottomed apes Marshal Ma and Marshal Liu, and called the two gibbons General Beng and General Ba. He entrusted the stockade, questions of discipline and rewards to these four. Thus freed from cares, he mounted the clouds and rode the mists, wandering round the four seas and enjoying the thousand mountains. He practiced his martial arts, visited many a hero, used his magical powers, and made a wide and distinguished circle of friends. He met with six sworn brothers of his: the Bull Demon King, the Salamander Demon King, the Roc Demon King, the Camel King, the Macaque King, and the Lion King. With him included they made seven. For days on end they talked about politics and war, passed round the goblet, strummed, sang, piped, danced, went off on days out together, and enjoyed themselves in every possible way. A journey of thousands of miles seemed to them to be no more than a walk in the courtyard. It could be said that they traveled a thousand miles in the time it takes to nod one's head, and covered three hundred with a twist of the waist. 
One day he instructed his four Stalwart Generals to arrange a feast for the six other kings. Oxen and horses were slaughtered, sacrifices were made to Heaven and Earth, and the assembled monsters danced, sang, and drank themselves blotto. When he had seen the six kings out and tipped his senior and junior officials Sun Wukong lay himself down under the shade of the pines beside the bridge and was asleep in an instant. The four Stalwart Generals made the others stand round and guard him, and they all kept their voices down. 
In his sleep the Handsome Monkey King saw two men approach him with a piece of paper in their hands on which was written "Sun Wukong." Without allowing any explanations they tied up his soul and dragged it staggering along till they reached a city wall. The Monkey King, who was gradually recovering from his drunken stupor, looked up and saw an iron plate on the wall on which was inscribed WORLD OF 
DARKNESS in large letters. 
In a flash of realization he said, "The World of Darkness is where King Yama lives. Why have I come here?" 
"Your life in the world above is due to end now," his escorts said, "and we were ordered to fetch you." 
To this the Monkey King replied, "I have gone beyond the Three Worlds, and I am no longer subject to the Five Elements. I don't come under King Yama's jurisdiction. How dare you grab me, you idiots?" But the fetchers of the dead just went on tugging at him, determined to drag him inside. 
The Monkey King lost his temper, pulled his treasure out of his ear, and gave it a shake. It became as thick as a rice bowl. It only took a slight movement of his arm to smash the two fetchers of the dead to pulp. He untied his bonds, loosed his hands, and charged into the city whirling his cudgel, so terrifying the ox−headed and horse−faced devils that they fled in all directions for cover. 
All the devil soldiers rushed to the Senluo Palace and reported, "Your Majesty, disaster, disaster! A hairy−faced thunder−god is attacking us out there." 
Stricken by panic, the Ten Kings who sit in the ten palaces, judging the criminal cases of the dead, hurriedly straightened their clothing and went out to look. When they saw his ferocious expression they lined up in order and shouted at the tops of their voices, "Please tell us your name, exalted Immortal." 
"If you don't know who I am," replied the Monkey King, "then why did you send men to bring me here?" 
"We wouldn't dare do such a thing. The messengers must have made a mistake." 
"I am Sun Wukong, the Heaven−born sage of the Water Curtain Cave on the Mountain of Flowers and Fruit. 
"Tell me your names at once if you don't want a bashing." 
To this the ten kings replied, "We are the King of Qinguang, the King of Chujiang, King Songdi, King Wuguan, King Yama, King Impartial, the King of Mount Tai, the Metropolitan King, the King of Biancheng, and the King of the Ever−turning Wheel." 
To this Sun Wukong replied, "You are all kings, and have esoteric understanding, so why don't you know any better? I, Sun Wukong, have cultivated the Way of Immortality and will live as long as Heaven. I've soared beyond the Three Worlds and leapt outside the Five Elements, so why did you send your men to get me?" 
"Please don't be angry, lofty Immortal," the ten kings said. "Many people in the world share the same name, so perhaps the fetchers of the dead went to the wrong place." 
"Nonsense, nonsense. As the saying goes, 'The magistrate may be wrong and the sergeant may be wrong, but the man who comes to get you is never wrong.' Go and get the Register of Life and Death for me to see." The Ten Kings invited him to come into the palace and look through it. 
Sun Wukong went into the Senluo Palace with his club in his hand, and sat down in the middle of the hall facing South. The Ten Kings then ordered the presiding judge to fetch the register, and the judge hastened to his office and brought out five or six documents and ten registers. He looked through them all one by one, but could not find Sun Wukong's name in the sections devoted to hairless creatures, hairy creatures, feathered creatures, insects, or scaly creatures. Then he looked through the monkey section. Now although monkeys looked like men, they were not entered under the humans; although they were like the hairless creatures, they did not live within their boundaries; although they were like running animals, they were not under the jurisdiction of the 
unicorn; and although they were like birds, they were not ruled by the phoenix. There was another register, and Sun Wukong looked through this one himself. Under "Soul No. 1350" was the name of Sun Wukong, the Heaven−born stone monkey, who was destined to live to the age of 342 and die a good death. 
"I won't write down any number of years," said Sun Wukong. "I'll just erase my name and be done with it. 
Bring me a brush." The judge hastily handed him a brush and thick, black ink. 
Sun Wukong took the register, crossed out all the names in the monkey section, and threw it on the floor with the words, "The account's closed. That's an end of it. We won't come under your control any longer." Then he cudgeled his way out of the World of Darkness. The Ten Kings dared not go near him, and they all went to the Azure Cloud Palace to bow in homage to the Bodhisattva Ksitigarbha and discuss the report they would send up to Heaven. But we will not go into this. 
After charging out through the city wall the Monkey King tripped over a clump of grass, tried to regain his balance, and woke up with a start. It had all been a dream. As he stretched himself he heard his four Stalwart Generals and the other monkeys saying, "Your Majesty, time to wake up. You drank too much and slept all night." 
"Never mind about my sleeping. I dreamt that two men came for me. They dragged me to the city−wall of the World of Darkness, where I came round. I showed them my magic powers and went yelling all the way to the Senluo Palace, where I had an argument with those Ten Kings and looked through the Register of Life and Death of us. Wherever there was mention of your names in the register, I crossed them out. We won't come under the jurisdiction of those idiots any more." 
All the monkeys kowtowed to him in gratitude. The reason why from that time on so many mountain monkeys have never grown old is that their names are not on the books of the officials of the Underworld. 
When the Handsome Monkey King had finished telling his story, the four Stalwart Generals informed the other monster kings, who all came to offer their felicitations. A few days later his six sworn brothers also came to congratulate him, and all were delighted to hear how he had struck the names off the books. We will not describe the daily feasts that followed. 
Instead we will describe how one day the Supreme Heavenly Sage, the Greatly Compassionate Jade Emperor of the Azure Vault of Heaven, was sitting on his throne in the Hall of Miraculous Mist in the Golden−gated Cloud Palace, surrounded by his immortal civil and military officials at morning court, when the Immortal Qiu Hongji reported, "Your Majesty, Ao Guang, the Dragon King of the Eastern Sea, has presented a memorial outside the Hall of Universal Brightness, and is awaiting a summons from your Imperial Majesty." 
The Jade Emperor ordered that he be called in, and the Dragon King came to the Hall of Miraculous Mist. 
When he had done obeisance an immortal page came from the side to take his memorial. The Jade Emperor read it through. It ran: 
the Humble Dragon of the Eastern Sea of the Eastern Continent of Superior Body in the Nether Watery Regions 
Reports to the Jade Emperor of the Azure Vault of Heaven 
Recently one Sun Wukong, an immortal fiend born on the Mountain of Flowers and Fruit now living in the Water Curtain Cave, bullied this humble dragon and occupied my watery house by force. He demanded a weapon by displaying magical prowess; he insisted on having armour by showing off his evil powers. He terrified the watery tribe and made the tortoises and alligators flee in terror. The dragon of the Southern Sea trembled, the dragon of the Western Sea was made miserable, the dragon of the Northern Sea had to hang his head and come in submission, and I, your subject Ao Guang, humbled myself before him. We had to present him with a miraculous iron cudgel, a golden phoenix−winged helmet, a suit of chain mail, and a pair of cloud−walking shoes; and we escorted him out politely. 
He continued to show off his martial arts and magic powers, and all he had to say for himself was, "My apologies for disturbing you." There is truly no match for him, and he is uncontrollable. Your subject now presents this memorial, and respectfully awaits your sage decision. I humbly beg that heavenly soldiers be sent to arrest this evil demon, so that the sea and the mountains may be at peace, and the ocean may enjoy tranquillity. 
When the Jade Emperor had read this through he ordered, "Let the Dragon God return to the Sea; we shall send generals to arrest the demon." The Old Dragon King bowed till his head touched the floor and took his leave. 
Then the Venerable Immortal Ge, a heavenly teacher, reported, "Your Majesty, the King of Qinguang, one of the ministers of the Underworld, has come with a memorial from the Bodhisattva Ksitigarbha." A jade girl messenger took the memorial, which the Jade Emperor read through. It ran: The regions of darkness are the negative part of the Earth. Heaven contains gods while the Earth has devils; Positive and Negative are in a constant cycle. Birds and beasts are born and die; male and female alternate. 
Life is created and change takes place; male and female are conceived and born; this is the order of nature, and it cannot be changed. Now the evil spirit, the Heaven−born monkey of the Water Curtain Cave on the Mountain of Flowers and Fruit, is presently giving full rein to his wicked nature, committing murders, and refusing to submit to discipline. He killed the devil messengers of the Ninth Hell with his magic, and he terrified the Ten Benevolent Kings of the Underworld with his power. He made an uproar in the Senluo Palace and crossed some names out by force. He has made the race of monkeys completely uncontrollable, and given eternal life to the macaques. He has annulled the law of transmigration and brought them beyond birth and death. I, impoverished monk that I am, importune the might of Heaven by presenting this memorial. 
I prostrate myself to beg that Heavenly soldiers be despatched to subdue this fiend, bring the positive and Negative back into order, and give lasting security to the Underworld. 
When the Jade Emperor had read this through he ordered, "Let the Lord of Darkness return to the Underworld. We shall send generals to arrest the demon." The King of Qinguang then bowed till his head touched the floor and took his leave. 
His Celestial Majesty then asked all his civil and military officials, "When was this monkey demon born? 
What is his origin, that he should have such powers?" 
Before he had finished speaking, Thousand−mile Eye and Wind−accompanying Ear came forward from the ranks of officials and said, "This demon monkey is the stone monkey who was born of heaven three hundred years ago. At the time nobody paid any attention to him, and we do not know where he refined himself and became an Immortal in recent years, so that he has been able to make the tigers and dragons submit to him and to strike his name off the register of the dead." 
"Which divine general shall be sent down to capture him?" asked the Jade Emperor, and before he had finished speaking the Great White Planet stepped forward, bowed down, and submitted, "All beings in the upper worlds that have nine apertures can become Immortals. This monkey has a body that was created by Heaven and Earth and conceived by the sun and moon. His head touches they sky and his feet stand on the earth; he drinks the dew and eats the mist. How does he differ from humans, if he has succeeded in cultivating the way of immortality and can subdue dragons and tigers? I beg Your Majesty to remember your life−giving mercy and hand down a sage edict of amnesty and enlistment, summoning him to this upper world and inscribing his name on the list of officeholders, thus keeping him here under control. If he obeys Your Majesty's heavenly commands, he can later be promoted; and if he disobeys, he can be arrested. This will both avoid military operations and be a way of winning over an Immortal." 
The Jade Emperor, delighted with the suggestion, ordered that it should be put into effect. He told the Wenqu Star Officer to compose the edict, and commanded the Great White planet to persuade the monkey to accept the amnesty. 
The Great White Planet left Heaven by the Southern Gate, and brought his propitious cloud down by the Water Curtain Cave, where he said to the little monkeys, "I am an envoy from Heaven, and I am carrying a divine edict inviting your great king to the upper world. Go and tell him at once." 
The little monkeys outside conveyed the message by relays into the depths of the cave: "Your Majesty, there's an old man outside carrying a document on his back. He says he's an envoy from Heaven with an invitation for you." The Handsome Monkey King was delighted. 
He said, "I'd been thinking of going up to Heaven to have a look round for the past couple of days, and now a heavenly envoy has come to invite me." 
"Ask him in at once," he shouted, hastily straightening his clothes and going out to meet the envoy. 
The Planet came straight in, stood facing the South, and said, "I am the Great White Planet of the West, and I have come down to earth with an Edict of Amnesty and enlistment from the Jade Emperor to invite you to Heaven to be given office as an Immortal." 
"I am very grateful to you, venerable Planet, for condescending to come here," replied Sun Wukong with a smile; then he told his subjects to prepare a feast to entertain the visitor. 
"I'm afraid I can't delay," replied the Planet, "as I am carrying a divine edict, so may I ask Your Majesty to come back with me now? We can talk at leisure after your glorious elevation." 
"Thank you for coming," said Sun Wukong. "I'm sorry you couldn't take some refreshments before leaving." 
Then he called for his four Stalwart Generals and ordered them, "Give my sons and grandsons a thorough training. When I've had a look round in Heaven, I'll take you all to live with me up there." The four Stalwart Generals accepted their orders, and the Monkey King made his cloud carry him up above the clouds. He was Raised to a high−ranking heavenly office, 
Listed among the courtiers in the clouds. 
If you don't know what office he was given, listen to the explanation in the next installment. 

`,
    },
  ],
  [
    4,
    {
      title: `Chapter 4: Dissatisfied at Being Appointed Protector of the Horses 
Not Content with the Title of Equal of Heaven 
`,
      createdAt: new Date(),
      content: `<ChapterStart>
Chapter 1: The Divine Root Conceives and the Spring Breaks Forth 
As the Heart's Nature Is Cultivated, the Great Way Arises 

Before Chaos was divided, Heaven and Earth were one; 
All was a shapeless blur, and no men had appeared. 
Once Pan Gu destroyed the Enormous Vagueness 
The separation of clear and impure began. 
Living things have always tended towards humanity; 
From their creation all beings improve. 
If you want to know about Creation and Time, 
Read Difficulties Resolved on the Journey to the West. 
In the arithmetic of the universe, 129,600 years make one cycle. Each cycle can be divided into twelve phases: I, II, III, IV, V, VI, VII, VIII, IX, X, XI and XII, the twelve branches. Each phase lasts 10,800 years. 
Now within a single day, the positive begins at the time I; at II the cock crows; at III it is not quite light; at IV the sun rises; V is after breakfast; and at VI one does business. VII is when the sun reaches noon; at VIII it is slipping towards the West; IX is late afternoon; the sun sets at X; XI is dusk; and at XII people settle down for the night. 
If you compare this with the big numbers, then at the end of Phase XI Heaven and Earth were still one, and no beings had appeared. 5,400 years later came the beginning of Phase XII, when all was darkness and there were still no people or other creatures; for this reason it was called Chaos. Another 5,400 years later Phase XII was drawing to a close and a new cycle was about to begin. As Phase I of the new era approached, gradually there was light. As Shao Yong said, 
"When winter reaches the mid−point of Phase I 
The heart of Heaven does not move. 
Where the Positive first appears 
Nothing has yet come to life." 
At this time, Heaven first had a foundation. 5,400 years later, in the middle of Phase I, the light and pure rose upwards, and sun, moon, stars, and constellations were created. These were called the Four Images. Hence the saying that heaven began in I. 
Another 5,400 years later, when Phase I was nearing its end and Phase II was imminent, things gradually solidified. As the Book of Changes says, "Great is the Positive; far−reaching is the Negative! All things are endowed and born in accordance with Heaven." This was when the earth began to congeal. After 5,400 more years came the height of Phase II, when the heavy and impure solidified, and water, fire, mountains, stone, and Earth came into being. These five were called the Five Movers. Therefore it is said that the Earth was created in Phase II. 
After a further 5,400 years, at the end of Phase II and the beginning of the Phase III, living beings were created. In the words of the Book of the Calendar, "The essence of the sky came down and the essence of earth went up. Heaven and Earth intermingled, and all creatures were born." Then Heaven was bright and Earth was fresh, and the Positive intermingled with the Negative. 5,400 years later, when Phase III was at its height, men, birds and beasts were created. Thus the Three Powers−−Heaven, Earth and Man−−now had their set places. Therefore it is said that man was created in Phase III. 
Moved by Pan Gu's creation, the Three Emperors put the world in order and the Five Rulers laid down the moral code. The world was then divided into four great continents: The Eastern Continent of Superior Body, the Western Continent of Cattle−gift, the Southern Continent of Jambu and the Northern Continent of Kuru. This book deals only with the Eastern Continent of Superior Body. Beyond the seas there is a country called Aolai. This country is next to an ocean, and in the middle of the ocean is a famous island called the Mountain of Flowers and Fruit. This mountain is the ancestral artery of the Ten Continents, the origin of the Three Islands; it was formed when the clear and impure were separated and the Enormous Vagueness was divided. It is a really splendid mountain and there are some verses to prove it: 
It stills the ocean with its might, 
It awes the jade sea into calm. 
It stills the ocean with its might: 
Tides wash its silver slopes and fish swim into its caves. 
It awes the jade sea into calm: 
Amid the snowy breakers the sea−serpent rises from the deep. 
It rises high in the corner of the world where Fire and Wood meet; 
Its summit towers above the Eastern Sea. 
Red cliffs and strange rocks; 
Beetling crags and jagged peaks. 
On the red cliffs phoenixes sing in pairs; 
Lone unicorns lie before the beetling crags. 
The cry of pheasants is heard upon the peaks; 
In caves the dragons come and go. 
There are deer of long life and magic foxes in the woods; 
Miraculous birds and black cranes in the trees. 
There are flowers of jade and strange plants that wither not; 
Green pine and bluish cypress ever in leaf, 
Magic peaches always in fruit. 
Clouds gather round the tall bamboo. 
The wisteria grows thick around the mountain brook 
And the banks around are newly−coloured with flowers. 
It is the Heaven supporting pillar where all the rivers meet, 
The Earth's root, unchanged through a myriad aeons. 
There was once a magic stone on the top of this mountain which was thirty−six feet five inches high and twenty−four feet round. It was thirty−six feet five inches high to correspond with the 365 degrees of the heavens, and twenty−four feet round to match the twenty−four divisions of the solar calendar. On top of it were nine apertures and eight holes, for the Nine Palaces and the Eight Trigrams. There were no trees around it to give shade, but magic fungus and orchids clung to its sides. Ever since Creation began it had been receiving the truth of Heaven, the beauty of Earth, the essence of the Sun and the splendour of the Moon; and as it had been influenced by them for so long it had miraculous powers. It developed a magic womb, which burst open one day to produce a stone egg about the size of a ball. 
When the wind blew on this egg it turned into a stone monkey, complete with the five senses and four limbs. When the stone monkey had learned to crawl and walk, he bowed to each of the four quarters. As his eyes moved, two beams of golden light shot towards the Pole Star palace and startled the Supreme Heavenly Sage, the Greatly Compassionate Jade Emperor of the Azure Vault of Heaven, who was sitting surrounded by his immortal ministers on his throne in the Hall of Miraculous Mist in the Golden−gated Cloud Palace. When he saw the dazzling golden light he ordered Thousand−mile Eye and Wind−accompanying Ear to open the Southern Gate of Heaven and take a look. The two officers went out through the gate in obedience to the imperial command, and while one observed what was going on the other listened carefully. Soon afterwards they reported back: 
"In obedience to the Imperial Mandate your subjects observed and listened to the source of the golden light. We found that at the edge of the country of Aolai, which is East of the ocean belonging to the Eastern Continent of Superior Body, there is an island called the Mountain of Flowers and Fruit. A magic stone on the top of this mountain produced a magic egg, and when the wind blew on this egg it turned into a stone monkey which bowed to each of the four quarters. When he moved his eyes, golden light shot towards the Pole Star Palace; but now that he is eating and drinking, the golden light is gradually dying." 
In his benevolence and mercy the Jade Emperor said, "Creatures down below are born of the essence of heaven and earth: there is nothing remarkable about him." On his mountain the monkey was soon able to run and jump, feed from plants and trees, drink from brooks and springs, pick mountain flowers and look for fruit. He made friends with the wolves, went around with the 
tigers and leopards, was on good terms with the deer, and had the other monkeys and apes for relations. At night he slept under the rockfaces, and he roamed around the peaks and caves by day. As the saying so rightly goes, "There is no calendar in the mountains, and when winter's over you don't know the time of year." On hot mornings he and all the other monkeys would play under the shade of some pines to avoid the heat. Just look at them all: 
Climbing trees, picking flowers, looking for fruit; 
Throwing pellets, playing knucklebones; 
Running round sandy hollows, building stone pagodas; 
Chasing dragonflies and catching locusts; 
Worshipping the sky and visiting Bodhisattvas; 
Tearing off creepers and weaving straw hats; 
Catching fleas then popping them with their teeth and fingers; 
Grooming their coats and sharpening their nails; 
Beating, scratching, pushing, squashing, tearing and tugging; 
Playing all over the place under the pine trees; 
Washing themselves beside the green stream. 
After playing, the monkeys would go and bathe in the stream, a mountain torrent that tumbled along like rolling melons. There is an old saying, "Birds have bird language and, animals have animal talk." 
All the monkeys said to each other, "I wonder where that water comes from. We've got nothing else to do today, so wouldn't it be fun to go upstream and find its source?" With a shout they all ran off, leading their children and calling to their brothers. They climbed up the mountain beside the stream until they reached its source, where a waterfall cascaded from a spring. They saw 
One white rainbow arching, 
A thousand strands of flying snow, 
Unbroken by the sea winds, 
Still there under the moon. 
Cold air divides the greeny crags, 
Splashes moisten the mountainside; 
A noble waterfall cascades, 
Hanging suspended like a curtain. 
The monkeys clapped their hands and explained with delight, "What lovely water. It must go all the way to the bottom of the mountain and join the waves of the sea." 
Then one monkey made a suggestion: "If anyone is clever enough to go through the fall, find the source, and come out in one piece, let's make him our king." When this challenge had been shouted three times, the stone monkey leapt out from the crowd and answered at the top of his voice, "I'll go, I'll go." Splendid monkey! Indeed: 
Today he will make his name; 
Tomorrow his destiny shall triumph. 
He is fated to live here; 
As a King he will enter the Immortals' palace. 
Watch him as he shuts his eyes, crouches, and springs, leaping straight into the waterfall. When he opened his eyes and raised his head to look round, he saw neither water nor waves. A bridge stood in front of him, as large as life. He stopped, calmed himself, took a closer look, and saw that the bridge was made of iron. The water that rushed under it poured out through a fissure in the rocks, screening the gateway to the bridge. He started walking towards the bridge, and as he looked he made out what seemed to be a house. It was a really good place. He saw: 
Emerald moss piled up in heaps of blue, 
White clouds like drifting jade, 
While the light flickered among wisps of coloured mist. 
A quiet house with peaceful windows, 
Flowers growing on the smooth bench; 
Dragon pearls hanging in niches, 
Exotic blooms all around. 
Traces of fire beside the stove, 
Scraps of food in the vessels by the table. 
Adorable stone chairs and beds, 
Even better stone plates and bowls. 
Three or four sprigs of plum blossom, 
A few pines that always attract rain, 
All just like a real home. 
He took a good, long look and then scampered to the middle of the bridge, from where he noticed a stone tablet. On the tablet had been carved in big square letters: HAPPY LAND OF THE MOUNTAIN OF FLOWERS AND FRUIT, CAVE HEAVEN OF THE WATER CURTAIN. The stone monkey was beside himself with glee. He rushed away, shut his eyes, crouched, and leapt back through the waterfall. 
"We're in luck, we're in luck," he said with a chuckle. All the other monkeys crowded round him asking, "What's it like in there? How deep is the water?" 
"There's no water, none at all," replied the stone monkey. "There's an iron bridge, and on the other side of the bridge there's a house that must have been made by Heaven and Earth." 
"How ever could you see a house there?" the other monkeys asked. The stone monkey chuckled again. 
"The water here comes under the bridge and through the rocks, and it hides the gateway to the bridge from view. There are flowers and trees by the bridge, and a stone house too. Inside the house are stone rooms, a stone stove, stone bowls, stone plates, stone beds, and even stone benches. In the middle of it all is a tablet which says 'Happy Land of the Mountain of Flowers and Fruit, Cave Heaven of the Water Curtain'. It's just the place for us to settle down in−−there's room there for thousands. Let's all move in, then we won't have to put up with any more nonsense from heaven. In there 
We can hide there from the wind, 
And shelter from the rain, 
With nothing to fear from frost and snow, 
And never a rumble of thunder. 
The coloured mists glow bright 
And the place smells lucky. 
The pine and bamboo will always be beautiful, 
And rare flowers blossom every day." 
The other monkeys were all so delighted to hear this that they said, "You go first and take us with you." 
The stone monkey shut his eyes, crouched, and leapt in again, shouting, "Follow me in, follow me in." The braver monkeys all jumped through. The more timid ones peered forward, shrank back, rubbed their ears, scratched their cheeks, shouted, and yelled at the top of their voices, before going in, all clinging to each other. After rushing across the bridge they all grabbed plates and snatched bowls, bagged stoves and fought over beds, and moved everything around. Monkeys are born naughty and they could not keep quiet for a single moment until they had worn themselves out moving things around. 
The stone monkey sat himself in the main seat and said, "Gentlemen, A man who breaks his word is 
worthless. Just now you said that if anyone was clever enough to come in here and get out again in one piece, you'd make him king. Well, then. I've come in and gone out, and gone out and come in. I've found you gentlemen a cave heaven where you can sleep in peace and all settle down to live in bliss. Why haven't you made me king?" On hearing this all the monkeys bowed and prostrated themselves, not daring to disobey. 
They lined up in groups in order of age and paid their homage as at court, all acclaiming him as the "Great King of a Thousand Years." The stone monkey then took the throne, made the word "stone" taboo, and called himself Handsome Monkey King. There is a poem to prove it that goes: 
All things are born from the Three positives; 
The magic stone was quick with the essence of sun and moon. 
An egg was turned into a monkey to complete the Great Way; 
He was lent a name so that the elixir would be complete. 
Looking inside he perceives nothing because it has no form, 
Outside he uses his intelligence to create visible things. 
Men have always been like this: 
Those who are called kings and sages do just as they wish. 
Taking control of his host of monkeys, apes, gibbons and others, the Handsome Monkey King divided them into rulers and subjects, assistants and officers. In the morning they roamed the Mountain of Flowers and Fruit and in the evening they settled down for the night in the Water Curtain Cave. They made a compact that they would not join the ranks of the birds or go with the running beasts. They had their own king, and they thoroughly enjoyed themselves. 
In spring they picked flowers for food and drink, 
In summer they lived off fruit. 
In autumn they gathered tares and chestnuts, 
They got through the winter on Solomon's−seal. 
The Handsome Monkey King's innocent high spirits could not, of course, last three or four hundred years. One day he suddenly felt depressed during a banquet with his monkey host, and he started to weep. The startled monkeys crowded round, bowed to him and asked, "What's the matter, Your Majesty?" 
"Although I'm happy now," the Monkey King replied, "I'm worried about the future. That's what's getting me down." 
The other monkeys laughed and said, "Your Majesty is being greedy. We have parties every day; we live in a mountain paradise, in an ancient cave in a divine continent. We are spared the rule of unicorns, the domination of phoenixes, and the restraints of human kings. We are free to do just as we like−−we are infinitely lucky. Why make yourself miserable worrying about the future?" 
To this the Monkey King replied, "Yes, we don't have to submit to the laws and regulations of human kings, and we don't live in terror of the power of birds and beasts. But the time will come when we are old and weak, and the underworld is controlled by the King of Hell. When the time comes for us to die, we won't be able to go on living among the Blessed, and our lives will have been in vain." All the monkeys covered their faces and wept as everyone of them thought about death. 
Suddenly a gibbon jumped out from their ranks and shrieked in a piercing voice, "If Your Majesty is thinking so far ahead, this is the beginning of enlightenment. Now of the Five Creatures, there are only three that do not come under the jurisdiction of the King of Hell." 
"Do you know which they are?" asked the Monkey King. 
"Yes," the ape replied. "They are the Buddhas, the Immortals and the Sages. They are free from the Wheel of Reincarnation. They are not born and they do not die. They are as eternal as Heaven and Earth, as the mountains and the rivers." 
"Where do they live?" the Monkey King asked. 
"Only in the human world," the ape replied, "in ancient caves on magic mountains." The Monkey King was delighted to hear this. 
"I shall leave you all tomorrow," he said, "and go down the mountain. If I have to, I'll roam the corners of the oceans and go to the edge of the sky to find these three kinds of beings and discover the secret of eternal youth that will keep us out of the clutches of the King of Hell for ever." Goodness! Because of these words he was to learn how to be free from the Wheel of Reincarnation and become the Great Sage Equaling Heaven. 
All the monkeys clapped with approval and said, "Great! Great! Tomorrow we'll climb all over the mountain and get lots of fruit to give Your Majesty a really big banquet to send you off." 
The next day the monkeys set out to pick magic peaches, gather rare fruits, dig out yams, and cut 
Solomon's−seal. Magic fungus and fragrant orchid were collected, and everything was set on the stone benches and the stone tables, with fairy wine and dishes. You could see 
Golden pills and pearl pellets, 
Bursting red and plump yellow. 
The golden pills and pearl pellets were winter cherries, beautiful and sweet; 
The bursting red and plump yellow were ripe plums, tasty and sharp. 
Fresh, sweet−fleshed longans with thin skins. 
Fiery lichees with tiny stones in a red sack. 
Branch after branch of crab−apples, 
Yellow−skinned loquats with their leaves on. 
Rabbit−head pears and chicken−heart jujubes 
To quench your thirst, remove your cares, and sober you up. 
Fragrant peaches and tender apricots, 
As sweet and luscious as jade wine. 
As sharp as glistening yogurt. 
Ripe melons with red coats and black seeds, 
Big, four−sectioned persimmons with yellow skins. 
Cinnabar pips shining like fire−crystal pearls. 
With firm round flesh like golden agate. 
Walnuts and gingko fruits to eat with tea; 
Coconuts and grapes to make into wine. 
Dishes loaded with pine cones, yew−nuts, filberts, and crab−apples; 
Tangerines, sugar−cane and oranges covering the table. 
Tender boiled Solomon's−seal. 
Pounded china−root and Job's tears. 
Simmered in soup in a stone−pot. 
Although we humans have rare delicacies to eat, 
We are no happier than those monkeys in the mountains. 
The host of monkeys ushered the Handsome Monkey King to the seat of honour and sat down below him according to age. Each of them took it in turns to bring him wine, flowers, and fruit, and they drank hard for a whole day. The next morning the Handsome Monkey King got up early and ordered, "Children, tear down some old pines and make me a raft. Find a bamboo pole to punt with and load it up with fruit. I'm going." He went aboard the raft all by himself, pushed off with all his might, and floated off towards the waves of the ocean. He intended to sail with the wind and cross over to the Southern Jambu Continent. 
The heaven−born monkey, whose conduct was so noble, 
Left his island to drift with heaven's winds. 
He sailed oceans and seas to find the Way of Immortality, 
Deeply determined to do a great deed. 
The predestined one should not have vulgar longings; 
He can attain the primal truth without care or worry. 
He is bound to find a kindred spirit, 
To explain the origins and the laws of nature. 
He had chosen just the right time for his journey. After he boarded his raft the Southeasterly wind blew hard for days on end and bore him to the Northwestern shore of the Southern Continent. Testing the depth of the water with his pole he found that it was shallow, so he abandoned the raft and jumped ashore. He saw humans by the coast, fishing, hunting geese, gathering clams, and extracting salt. He went up to them, leaping around and making faces, which so scared them that they dropped their baskets and nets and fled in all directions as fast as they could. The Monkey King grabbed one of them who was a poor runner, stripped him of his clothes, and dressed himself in them like a human. He swaggered through the provinces and prefectures, learning human behavior and human speech in the market places. Whether he was eating his breakfast or going to bed at nigh he was always asking about Buddhas, Immortals and Sages, and seeking the secret of eternal youth. He observed that the people of the world were too concerned with fame and fortune to be interested in their fates. 
When will the struggle for fame and fortune end? 
Toiling from morning till night, never pleasing yourself. 
Those who ride donkeys long for stallions, 
The Prime Minister always wants to be a prince. 
They only worry about having to stop work to eat or dress; 
They never fear that the King of Hell will come to get them. 
When trying to ensure their sons and grandsons inherit their wealth and power, 
They have no time to stop and think. 
Although he asked about the way of the Immortals, the Monkey King was unable to meet one. He spent eight or nine years in the Southern Jambu Continent, going through its great walls and visiting its little counties. When he found that he had reached the Great Western Ocean he thought that there must be Sages and Immortals on the other side of it, so he made himself another raft like the last one, and floated across the Western Ocean until he came to the Western Continent of Cattle−gift. He went ashore and made extensive and lengthy enquiries until one day he came upon a high and beautiful mountain, thickly forested on its lower slopes. Not fearing wolves, and undaunted by tigers or leopards, he climbed to the summit to see the view. It was indeed a fine mountain: 
A thousand peaks brandishing halberds, 
Screens ten thousand measures tall. 
In the sunlight the mountain haze is lightly touched with blue; 
After the rain the black rocks look coldly green. 
Withered creepers coil round ancient trees, 
And the old ford marks the bounds of the mysterious. 
Strange flowers and precious plants, 
Flourishing in all four seasons, rivaling fairyland. 
The nearby cry of a hidden bird, 
The clear running of a spring. 
Valley upon valley of mushroom and orchid, 
Lichen grows all over the cliffs. 
The range rises and dips in dragon−like majesty. 
Surely there mush be lofty hermits here. 
As he was looking at the view the Monkey King heard a human voice coming from the depths of the forest. He rushed into the trees, and when he cocked his ear to listen he heard a song: 
"Watching the chess game I cut through the rotten, 
Felling trees, ding, ding, 
Strolling at the edge of the cloud and the mouth of the valley, 
I sell firewood to buy wine, 
Cackling with laughter and perfectly happy. 
I pillow myself on a pine root, looking up at the moon. 
When I wake up it is light. 
Recognizing the old forest 
I scale cliffs and cross ridges, 
Cutting down withered creepers with my axe. 
When I've gathered a basketful 
I walk down to the market with a song, 
And trade it for three pints of rice. 
Nobody else competes with me, 
I don't speculate or try sharp practice, 
Couldn't care less what people think of me, 
Calmly lengthening my days. 
Are Taoists and Immortals, 
Sitting quietly and expounding the Yellow Court." 
The Monkey King was overjoyed to hear this, and he said with glee, "So this is where the Immortals have been hiding." He bounded deeper into the woods for a closer look and saw that the singer was a woodcutter cutting firewood. He was wearing the most unusual clothes: 
On his head he wore a hat 
Woven from the first skin shed by new bamboo shoots. 
Were made of yam from the wild cotton−tree. 
Was of silk from an old silkworm. 
The straw sandals under his feet 
Had straps torn from rotten sago trees. 
In his hand he held a steel axe 
On his back he carried a hempen rope 
At climbing pines and felling dead trees, 
Who was a match for this woodcutter? 
The Monkey King went closer and called to him. "Old Immortal, your disciple greets you." 
The woodcutter dropped his axe in astonishment and turned round to say, "No, no. I don't even have enough to eat or drink, so how can I possibly let you call me an Immortal?" 
"If you're not an Immortal," the Monkey King said, "why do you talk like one?" 
"I don't talk like an Immortal," the woodcutter said. 
"At the edge of the wood just now," the Monkey King replied, "I heard you say, 'The people I meet are Taoists and Immortals, sitting quietly and expounding the Mantingfang.' The Mantingfang contains the truth about the Way, so if you're not an Immortal, what are you?" The woodcutter laughed. 
"It's quite true that the song is called 'The Fragrance of the Mantingfang,' and an Immortal who lives near my hut taught me it. He said he saw how hard I had to work and how I was always worried, so he made me sing this song when things were getting me down. It lightens my cares and makes me forget my weariness. I was singing it just now because I had some problems on my mind, and I never imagined that you would be listening." 
"If you've got an Immortal for a neighbour, you ought to learn from him how to cultivate your conduct and get him to teach you a recipe for eternal youth." 
"I've had a hard life," the woodcutter replied. "My mother and father brought me up till I was about eight, and just when I was beginning to know about life my father died. My mother remained a widow, and I had no brothers or sisters. As I was the only child I had to look after my mother morning and night. Now she is old that I can't possibly leave her. Our land is so overgrown that I can't grow enough to feed and clothe both of us, so I have to cut a couple of bundles of firewood to sell in the market for a handful of coppers to buy the few pints of rice that I cook for myself and for my mother. That's why I can't cultivate my conduct." 
"From what you say," the Monkey King replied, "you're a filial son and a gentleman−−you're bound to be rewarded for it one day. But I'd be grateful if you could show me where that Immortal lives, so that I can go and pay him my respects." 
The woodcutter said, "It's not far from here. This mountain is the Spirit Tower Heart Mountain, and in it there is the Cave of the Setting Moon and the Three Stars. In that cave lives an Immortal called the Patriarch Subhuti. I don't know how many disciples he has trained−−there are thirty or forty of them cultivating their conduct with him at the moment. If you take that path South for two or three miles you'll reach his home." 
The Monkey King tugged at the woodcutter and said, "Take me there, Elder Brother. If I get anything out of this, I won't forget your kindness." 
"You idiot," the woodcutter replied, "didn't you understand what I told you just now? If I went with you I wouldn't be able to earn my living, and who would look after my poor old mother then? I've got to get on with my woodcutting. Go by yourself." 
After hearing this the Monkey King had to take his leave. He came out of the forest and found the path, which led up a mountain slope for two or three miles, when he saw the cave. He pulled himself up to his full height to take a look, and it was a really magnificent place: 
Misty clouds scattered colours, 
Sun and moon shimmered bright. 
A thousand ancient cypresses, 
Ten thousand lofty bamboos. 
A thousand ancient cypresses, 
A soft green drawing the rain from the sky. 
Ten thousand lofty bamboos, 
And a misty valley is azure blue. 
Outside the gate rare flowers spread brocade; 
Beside the bridge wafts the scent of jade flowers. 
Rocky crags jut, glossy with green moss; 
On overhanging cliffs blue lichen grows. 
Sometimes the call of the crane is heard 
And often you see the phoenix soar. 
Echoes beyond the Ninth Heaven and the Milky Way. 
The brilliance of its wings colours the clouds. 
Black apes and white deer can be just made out; 
Golden lions and jade elephants prefer to keep hidden. 
If you look closely at this happy land, 
You will see that it rivals paradise. 
He saw that the doors of the cave were shut fast, and that everything was still, with no signs of any people. He turned round and noticed that there was a stone tablet about thirty feet high and eight feet wide at the top of the cliff. On it was carved in enormous letters: SPIRIT−TOWER HEART MOUNTAIN, CAVE OF THE SETTING MOON AND THE THREE STARS. The Monkey King exclaimed with delight, "The people here really are honest. The mountain and the cave do exist." He took a good long look, but did not dare to knock on the door. He climbed to the and of a pine branch and ate some pine seeds to amuse himself. Before long the doors of the cave opened with a creak, and an immortal boy came out. In the nobility of his bearing and the exceptional purity of his features he was completely different from an ordinary boy. 
His hair was bound with a pair of silken bands, 
His flowing gown had two capacious sleeves. 
His face and body were naturally distinguished; 
His mind and appearance were both empty. 
For many years a guest beyond the world of things, 
An eternal child amid the mountains, 
Untouched by any speck of dust, 
He let the years go tumbling by. 
When this boy had come out he shouted, "Who's making that row out here?" 
The Monkey King scampered down the tree, went up to him, and said with a bow, "Immortal child, I am a disciple who has come to ask about the Way and study under the Immortal. The last thing I'd do would be to make a row here?" The boy laughed. 
"So you've come to ask about the Way, have you?" 
"Yes," the Monkey King replied. 
"Our master has just got up," the boy said, "and has now mounted the dais to expound the Way. Before he had started to explain about origins he told me to open the door. He said, 'There is someone outside who wants to cultivate his conduct. Go and welcome him.' I suppose he must have meant you." 
"Yes, he meant me," the Monkey King said with a smile. 
"Come with me," the boy said. 
The Monkey King straightened his clothes and followed the boy deep into the depths of the cave. He saw majestic pavilions and towers of red jade, pearl palaces and gateways of cowry, and countless rooms of silence and secluded cells leading all the way to a jasper dais. He saw the Patriarch Subhuti sitting on the dais and thirty−six minor Immortals standing below it. 
A golden Immortal of great enlightenment, free from filth, 
Subhuti, the marvel of the Western World. 
Neither dying nor born, he practices the triple meditation, 
His spirit and soul entirely benevolent. 
In empty detachment he follows the changes; 
Having found his true nature he lets it run free. 
As eternal as Heaven, and majestic in body, 
The great teacher of the Law is enlightened through aeons. 
As soon as the Handsome Monkey King saw him he bowed low and knocked his head on the ground before him many times, saying, "Master, master, your disciple pays his deepest respects." 
"Where are you from?" the Patriarch asked. "You must tell me your name and address before you can become my pupil." 
"I come from the Water Curtain Cave in the Flowers and Fruit Mountain in the land of Aolai in the Eastern Continent of Superior Body," replied the Monkey King. 
"Throw him out," the Patriarch roared. "He's a liar and a cheat, and even if he tried cultivating his conduct he would get nowhere." 
The Monkey King desperately kept hitting his head on the ground and said, "Your disciple spoke the truth. I promise I wasn't lying." 
The Patriarch asked, "If you were speaking the truth, why did you say that you came from the Eastern Continent of Superior Body? Between here and the Eastern Continent there are two seas and the Southern Jambu Continent, so how could you possibly have come here from there?" 
The Monkey King, still kowtowing, replied, "I sailed across seas and oceans, crossed frontiers and wandered through many countries for over ten years before I arrived here." 
"So you came here by stages," the Patriarch remarked. "What is your surname?" 
"I'm not surly," the Monkey King replied. "If people call me names it doesn't bother me, and if they hit me I don't get angry. I'm just polite to them and that's that. I've never been surly." 
"I didn't ask if you were surly. I wanted to know the surname you inherited from your parents." 
"I didn't have any parents," the Monkey King replied. 
"If you had no parents, did you grow on a tree?" 
"I grew not on a tree but in a stone," the Monkey King replied. "All I remember is that there was a magic stone on the top of the Flower and Fruit Mountain, and that one year the stone split open and I was born." 
Concealing his delight at searing this, the Patriarch remarked, "In other words, you were born of Heaven and Earth. Walk around for a moment and let me have a look at you." The Monkey King leapt to his feet and shambled round a couple of times. 
The Patriarch smiled and said, "Though you have rather a base sort of body, you look like one of the rhesus monkeys that eat pine seeds, and I ought to give you a surname that fits your appearance and call you Hu ('Macaque'). The elements that make up the character Hu are 'animal,' 'old' and 'moon'. What is old is ancient, and the moon embodies the Negative principle, and what is ancient and Negative cannot be transformed. But I think I would do much better to call you Sun ('Monkey'). Apart from the 'animal' element, the character Sun has one part implying male and one part suggesting a baby, which fits in with my basic theories about children. Your surname will be Sun." 
When the Monkey King heard this he kowtowed with delight and said, "Great! Great! Now I have a surname. I am eternally grateful to you for your mercy and compassion, master. I beg you to give me a personal name to go with my new surname, then it will be much easier to address me." 
"There are twelve words within my sect," said the Patriarch, "which I give as names. You belong to the tenth generation of my disciples." 
"What are these twelve words?" asked the Monkey King. 
"Broad, great, wisdom, intelligence, true, likeness, nature, sea, bright, awakened, complete and enlightenment. If we work out the generations of disciples, then you should have a name with Wu ('Awakened') in it. So we can give you the Dharma−name Sun Wukong, which means 'Monkey Awakened to Emptiness'. Will that do?" 
"Marvellous, marvellous," said the smiling Monkey King. "From now on my name will be Sun Wukong." Indeed: 
When the Great Vagueness was separated there were no surnames; 
To smash foolish emptiness he had to be awakened to emptiness. 
If you want to know what success he had in cultivating his conduct, you must listen to the explanation in the next installment. 

`,
    },
  ],
]);
export {WIDTH, HEIGHT, ASSETS, COLORS, COMMIC};
