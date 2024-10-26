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
import NeopLogoIcon from '@assets/icons/logo-neop.svg';
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
import MenuDotSquare from '@assets/icons/MenuDotSquare';
import Settings from '@assets/icons/Settings';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ASSETS = {
  IMAGES: {
    NotificationSettingImage: require('@assets/images/notification-setting.png'),
    SettingImage: require('@assets/images/setting.png'),
    LogoutSettingImage: require('@assets/images/logout-setting.png'),
    AppBackground: require('@assets/images/app-background.png'),
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
    MenuDotSquare,
    Settings,
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
  [
    5,
    {
      title: `Chapter 5: After Chaos Among the Peaches the Great Sage Steals the Pills 
In the Revolt Against Heaven the Gods Capture the Demons`,
      createdAt: new Date(),
      content: `<ChapterStart>
Chapter 5: After Chaos Among the Peaches the Great Sage Steals the Pills 
In the Revolt Against Heaven the Gods Capture the Demons 

The story goes on to relate that the Great Sage Equaling Heaven, a mere monkey devil after all, was quite satisfied that his name was on the register of office without caring about the grading of his job and his own rank, or the size of his salary. The immortal clerks in the two offices in his residence were in constant attendance on him, he had three meals a day and a bed to sleep on at night, and he lived a free and easy life without worries. In his spare time he would visit the other palaces, get together with his old friends, and make new ones. When he saw the Three Pure Ones, he would address them as "venerable," and when he met the Four Emperors he called them "Your Majesty." He was on fraternal terms with the Nine Bright Shiners, the Generals of the Five Regions, the Twenty−Eight Constellations, the Four Great Heavenly Kings, the Gods of the Twelve Branches, the Five Ancients of the Five Regions, the star ministers of the whole sky, and the countless gods of the Milky Way. Today he would wander East, and tomorrow he would go West, coming and going by cloud, and never staying anywhere for long. 
When the Jade Emperor was holding his morning court one day the Immortal Xu of Jingyang came forward from the body of officials, kowtowed, and suggested, "The Great Sage Equaling Heaven is spending his time in idle travel, and is making the acquaintance of all the stars in the sky, calling them all his friends irrespective of their rank. It would be as well to give him some responsibility, and prevent his idleness leading to trouble later on." 
The Jade Emperor's response to this suggestion was to send for the Monkey King at once. He came in a cheerful mood and asked, "What promotion and reward have you summoned me here to receive, Your Majesty?" 
"Seeing that you are idle and have nothing to do," replied the Jade Emperor, "we are giving you a job. You are to administer the Peach Orchard, and you will give it your attention day and night." The Great Sage was overjoyed, and after expressing his thanks and chanting "na−a−aw" he withdrew. 
n his eagerness to be at work he went straight to the Peach Orchard to have a look round. When he got there he was stopped by a local tutelary god who asked him, "Where are you going, Great Sage?" 
"I've been put in charge of the Peach Orchard by the Jade Emperor, and I've come to inspect it." The local god hastened to greet him formally, and he called the men who weeded, brought water, looked after the trees, and swept the grounds to come and kowtow to the Great Sage. When Sun Wukong was taken inside this is what he saw: 
Charming and luxuriant the full blossom; 
Every tree weighed down with fruit. 
The fruit−laden branches bend like carding−bows; 
The blossoming trees are covered with powder and rouge. 
Always blossoming, always in fruit, they are ripe for a thousand years; They know no summer or winter, but linger for ever. 
Look red−faced and tipsy; 
Are green in stalk and skin. 
When the dew forms, their flesh has a touch of blue, 
While the sun picks out their vermilion beauty. 
Below the trees exotic flowers grow, 
Bright and unfading throughout the year. 
On either side stand towers and pavilions, 
And a rainbow always arches the sky. 
These are not the common breeds of the Dark Earth Capital, 
But are tended by the Queen Mother of the Jade Pool. 
After taking a good look at this the Great Sage asked the local god, "How many of these trees are there?" 
"Three thousand six hundred all together," the local god replied. "The ones growing at the front have tiny blossoms and small fruits, and they ripen every three thousand years. Anyone who eats them becomes an Immortal and understands the Way, and his body becomes both light and strong. The twelve hundred in the middle have multiple blossoms and sweet fruits, and ripen every six thousand years; whoever eats them can fly and enjoy eternal youth. The back twelve hundred are streaked with purple and have pale yellow stones. 
They ripen once every nine thousand years, and anyone who eats them becomes as eternal as Heaven and Earth, as long−lived as the Sun and Moon." The Great Sage was beside himself with joy on learning this, and that day he checked the number of the trees and looked over the buildings in the orchard before going back to his residence. From then on he went to admire them every three or four days. He dropped his friends, and made no more pleasure jaunts. 
One day he noticed that the peaches near the end of the branches of one old tree were all but ripe, and he felt like trying one; but as the local god, the workmen, and the immortal clerks from his residence were close on his heels it was impossible. Suddenly he had an idea, and he said, "Go and wait for me outside the gates while I take a nap in this summer−house." 
All the Immortals thereupon withdrew, and the Monkey King took off his official hat and clothes, climbed one of the bigger trees, and chose some large, ripe peaches. When he had picked a good number he sat at his ease in the branches and ate his fill of them, then jumped down from the tree, pinned on his hat, put on his clothes, and shouted for all his attendants to go back to his residence with him. Two or three days later he thought of another trick to steal some more peaches, and he ate his fill of them. 
One day the Queen Mother arranged a banquet, opening many precious pavilions for a feast of peaches by the Jade Pool. She sent the Red Fairy, the Blue Fairy, the White Fairy, the Black Fairy, the Purple Fairy, the Yellow Fairy, and the Green Fairy to the Peach Orchard with their baskets to pick peaches for the feast. The seven fairies went straight to the orchard gates, the workmen of the orchard and the immortal superintendents of the two offices of the Equaling Heaven Residence were guarding the gate. 
The fairies went up to them and said, "We have come on the orders of the Queen Mother to pick peaches for a feast." 
"Wait a moment please, Immortal Beauties," said the local god. "Things are different this year. The Jade Emperor has appointed the Great Sage Equaling Heaven to be the guardian of this orchard, and we must ask him before we can open the orchard to you." 
"Where is the Great Sage?" the fairies asked, and the local god replied, "Inside the orchard. As he was feeling tired he is having a nap by himself in a summerhouse." 
"In that case, please find him without delay," requested the fairies, and the local god took them into the orchard. But all they could find of him in the summerhouse were his hat and clothes. They had no idea where he could have gone, and looked everywhere without success. The Great Sage had in fact made himself only two inches long after eating some of the peaches for fun, and he was sleeping under a large leaf at the top of one of the big trees. 
"We have come by decree, and we can't go back empty−handed, although the Great Sage is nowhere to be found," said the fairies. 
One of the immortal superintendents who was standing nearby replied, "As you Immortal Beauties have come by order of the Queen Mother, we must not delay you. Our Great Sage is always wandering off, so I expect that he has gone away to visit some of his friends. You had better pick the peaches; it will be all right if we inform him." 
The fairies did as he suggested and went into the orchard to pick peaches. First they filled two baskets from the trees in front, and then they picked three basketfuls from the trees in the middle; but when they came to the trees at the back, they saw that peaches and blossoms were few and far between. Only a few unripe fruits with furry stalks and green skins were left. All the ripe ones had been eaten up by the Monkey King. The seven fairies looked everywhere, but all they could see was a single red and white peach on a Southern branch. The Blue Fairy pulled the branch down, the Red Fairy picked the peach, and then they let the branch go again. This woke up the Great Sage, who had changed himself into this peach to take a nap on this branch. 
He resumed his own form, took his gold−banded cudgel from his ear, shook it till it was as thick as a ricebowl, and shouted at them, "Where are you from, you thieving fiends?" The seven fairies fell on their knees in confusion. 
"Please don't be angry with us, Great Sage. We're not fiends but seven fairies sent by Her Majesty the Queen Mother of the West to pick peaches of immortality and open the precious halls here for a Feast of Peaches. 
When we arrived here we saw the local god and other deities of the place, but we could not find you, Great Sage. We could not delay carrying out the Queen Mother's orders, so we went ahead and picked the peaches without waiting for you, Great Sage. We very much hope that you will forgive us." 
These words turned the Great Sage's bad mood into a good one, and he said, "Please rise, Fairy Beauties. Who is the Queen Mother inviting to this feast?" 
"There are old rules about who attends: The Buddha of the Western Heaven, Bodhisattvas, holy monks, Arhats, the Guanyin of the South Pole, the Merciful and Sage Emperor of the East, the Venerable Immortals of the Ten Continents and the Three Islands, the Mystic Divinity of the North Pole, and the Great Yellow−horned Immortal of the Yellow Pole at the Centre. These make up the Five Venerable Ones of the Five Regions. There will also be the Star Lords of the Five Constellation; the Three Pure Ones, the Four Emperors and the Heavenly Immortal of the Great Monad from the Eight High Caves; the Jade Emperor, the immortals of the Nine Mounds, and the gods of the Seas and Mountains and the Ruler of the Nether World from the Eight Lower Caves; and the terrestrial deities. All the major and minor gods of all the halls and palaces will come to the Feast of Peaches." 
"Will I be invited?" asked the Great Sage with an ingratiating smile. 
"Not as far as we've heard," the fairies replied. 
"I'm the Great Sage Equaling Heaven, so why shouldn't I be asked?" said the Great Sage. 
"That was what happened before: we don't know about this time," the fairies replied. 
"You're right," he said. "Just wait here while I go and find out whether I'm invited." 
Splendid Great Sage. Making a magic with his hands as he spoke the words of the spell, he said to the fairies, 
"Stay where you are! Stay where you are!" As this was an immobilizing spell, the seven fairies were left standing in a daze under the peach tree with their eyes wide open as the Great Sage leapt out of the orchard on a somersault cloud and headed for the Jade Pool. As he traveled he saw that The sky shimmered with auspicious light 
As clouds of many colours streamed across it. 
The white stork's cry made the heavens shake; 
A thousand leaves grew on the purple asphodel. 
Amid it all an Immortal appeared, 
Carrying himself with heaven−sent elegance, 
As he danced on the rainbow, cloaked by the Milky Way, 
With a talisman at his waist to ward off birth and death. 
His name was Bare−Foot Immortal, 
And he was going to the feast of longevity−giving peaches. 
As the Bare−foot Immortal saw him, the Great Sage lowered his head and thought of a plan by which to trick the Immortal and get to the banquet himself. 
"Where are you going, reverend sir?" he asked; and the Immortal replied, "I'm going to the Peach Banquet by the invitation of the Queen Mother." 
"There is something you do not know, venerable sir," said the Great Sage. "As my somersault cloud is so fast, the Jade Emperor has sent me everywhere to tell all you gentlemen to go to the Hall of Universal Brightness for a ceremony before going on to the banquet." 
As the Immortal was an open and upright man, he took this lie for the truth, but wondered, "The thanksgiving ceremony is usually held by the Jade Pool, so why are we having the ceremony in the Hall of Universal Brightness before going to the Jade Pool for the banquet?" Nevertheless, he turned his propitious cloud around and went to the Hall of Universal Brightness. 
As the Great Sage rode his cloud he said a spell, shook himself, took the form of the Bare−foot Immortal, and hurried to the Jade Pool. He reached the pavilion there a moment later, stopped his cloud, and went quietly inside. He saw 
Fabulous perfumes coiling, 
A confusion of auspicious clouds; 
The jade tower set with color, 
The precious pavilions scattering mists; 
The phoenix soars till almost lost to view, 
And jeweled flowers seem to rise and fall. 
Above a nine−phoenix screen 
A rainbow stool of the eight precious things, 
Green jade bowls with a thousand flowers. 
On the table were dragon livers and marrow of phoenix bone, 
Bears' paws and apes' lips−− 
A hundred different dishes, and all of them good; 
Rare fruits and fine delicacies, every one unique. 
Everything was neatly set out, but no Immortals had yet arrived. The Great Sage had not finished looking when he smelt wine; and as he whirled round he saw under a portico to the right several immortal officials in charge of brewing liquor with some workmen who stirred the lees, a number of novices who carried water and some boys who looked after the fires. They were washing the vats and scrubbing the pots, having made jade liquor and a fragrant fermentation of the lees. The Great Sage could not stop himself from drooling, and he longed to drink some, but unfortunately all those people were there. So he performed a spell by pulling several hairs from his body, chewing them up, spitting them up, saying the magic words, and shouting "Change"; whereupon the hairs turned into sleep insects, which flew into the faces of all the liquor−makers. Watch them as their hands go limp, their heads droop, their eyes close, and they drop their symbols of office and all fall asleep. Whereupon the Great Sage grabbed the rare delicacies and exotic foods, then went under the portico and drank from the vats and pots until he was completely drunk. 
Only then did he think, "This won't do at all. When the guests come for the banquet they'll be furious with me, and I'll be for it if I'm caught. I'd better get back to the Residence as soon as I can and sleep it off." 
Our dear Great Sage staggered and swayed, charging about all over the place under the influence of the liquor, and going the wrong way. He arrived not at the Equaling Heaven Residence but at the Tushita Heavenly Palace. As soon as he saw this he sobered up and said to himself, "The Tushita Palace is the highest of the thirty−three heavens, where Lord Lao Zi of the Great Monad reigns. However did I get here? Never mind, I've always wanted to see that old chap, and I've never managed to come here before. I might as well go and have a look at him now that I'm passing this way." 
He straightened his clothes and rushed in, but did not see Lord Lao Zi. There was no sign of anyone. This was because Lao Zi and the Ancient Buddha Dipamkara were expounding the Way from a red dais in a triple−storied pavilion, and all the immortal boys, generals, officials and petty functionaries were standing to right and left listening to the lecture. The Great Sage went straight to the room in which the elixir was kept, and although he could not find Lao Zi there he saw that there was a small fire in the stove beside the range over which pills were made. On either side of the stove were five gourds, full of golden pills of refined elixir. 
"This is the Immortals' greatest treasure," he exclaimed in delight. "I've wanted to refine some of these golden pills to save people with ever since I understood the Way and mastered the principle of the correspondence of the Esoteric and Exoteric, but I've never had time to come here. Today I'm in luck−−I've found them. As Lao Zi isn't here I'll try a few." He emptied the gourds of their contents and ate up all the pills as if he were eating fried beans. 
Before long he was full of pills and quite sober. "This is terrible," he thought, "this is a colossal disaster. If the Jade Emperor is shocked by this, I'm done for. I must get out of here. I'd be much better off as a king in the lower world." 
He rushed out of the Tushita Palace, avoiding his usual route. Using a spell to make himself invisible, he left by the West Gate of Heaven, and went straight down to the Mountain of Flowers and Fruit by cloud. When he got there he saw flags, banners, spears and halberds gleaming in the sun: the four Stalwart Generals and the seventy−two kings of the monsters were holding military exercises. 
"Children, I'm back," shouted the Great Sage in a loud voice, and all the fiends dropped their weapons and fell to their knees. 
"You don't care, do you, Great Sage?" they said. "It's been so long since you left us, and you never came back to see us." 
"I haven't been long, I haven't been long," protested the Great Sage, and as they talked they walked into the innermost part of the cave. When the four Stalwart General's had tidied the place up and made him sit down, they kowtowed to him and asked, "What office did you hold, Great Sage, during your century and more in Heaven?" 
The Great Sage laughed and said, "As far as I can remember it was only six months, so why do you say it was over a century?" 
"A day in Heaven is the same as a year on earth," the Stalwart Generals replied. 
"I was lucky this time," said the Great Sage. "The Jade Emperor took a liking to me and ennobled me as the Great Sage Equaling Heaven. He had an Equaling Heaven Residence built for me, complete with a Tranquillity Office and a Calm Divinity Office with Immortal functionaries, attendants and guards. Later on, when he saw that I had nothing to do, he put me in charge of the Peach Orchard. Recently the Queen Mother Goddess gave a Peach Banquet, but she didn't invite me. Instead of waiting for an invitation, I went to the Jade Pool and stole all the immortal food and drink. I staggered away from the Jade Pool and blundered into Lord Lao Zi's palace, and there I ate up his five gourds of pills of immortality. Then I got out through the heavenly gates and came here because I was scared that the Jade Emperor was going to punish me." 
All the fiends were delighted with what they heard, and they laid on liquor and fruit with which to welcome him back. 
They filled a stone bowl with coconut toddy and handed it to him, but when he tasted it the Great Sage grimaced and said, "It's awful, it's awful." 
Two of his Stalwart Generals, Beng and Ba, explained, "You don't find coconut toddy very tasty because you have drunk immortal liquor and eaten immortal food in the heavenly palace, Great Sage. But as the saying goes, 'Sweet or not, it's water from home.'" 
To this the Great Sage replied, "And all of you, whether related to me or not, are from my home. When I was enjoying myself beside the Jade Pool today I saw jars and jars of jade liquor under a portico there. As none of you have ever tasted it I'll go and pinch you a few jars; then you can each have a little drink, and live for ever." All the monkeys were beside themselves with glee. The Great Sage then went out of the cave, turned a somersault, made himself invisible, and went straight to the Peach Banquet. As he went through the gates of the Jade Pool he saw that the men who made the wine, stirred the lees, carried the water, and looked after the fire were still snoring away. He tucked two big jars of wine under his arms, took two more in his hands, then turned his cloud round and went back to have a feast of immortal wine with the monkey masses in the cave. 
They all drank several cups and were very happy, but we will not go into this. 
The story returns to the seven fairies, who were only able to free themselves a whole day after Sun Wukong had immobilized them with his magic. They picked up their baskets and went back to report to the Queen Mother that they were late because the Great Sage Equaling Heaven had held them there by magic. 
"How many peaches did you pick?" the Queen Mother asked. 
"Two baskets of little ones and three baskets of medium ones. But when we got to the back we could not find a single big one; we think that they were all eaten by the Great Sage. While we were looking for some the Great Sage suddenly appeared, and he beat and tortured us to make us tell him who had been invited to the banquet. After we had told him he immobilized us there, and we don't know where he went. We only came round and freed ourselves a moment ago." 
On hearing this the Queen Mother went to see the Jade Emperor and gave him a full account of what had happened. Before she had finished, the liquor−makers arrived with their immortal officials to report that an unknown person had thrown the Grand Peach Banquet into confusion and stolen the jade liquor as well as the precious delicacies of a hundred flavors. Then came Four Heavenly Teachers to announce that the Supreme Patriarch of the Way, Lao Zi, had arrived. 
The Jade Emperor went out with the Queen Mother to meet him, and after doing obeisance Lao Zi said, "I had refined some Golden Pills of the Nine Transformations in my palace for a Feast of Elixir Pills with Your Majesty, but a thief has stolen them. This is what I have come to report to Your Majesty." This news made the Jade Emperor tremble with fear. 
Not long afterwards the immortal administrators from the Equaling Heaven Residence came to kowtow and report: "The Great Sage Sun Wukong abandoned his post and went wandering off yesterday. He has not come back yet and we do not know where he has gone." The Jade Emperor, now more suspicious than ever, then saw the Bare−Foot Immortal bow his head to the ground. 
"Your subject was going to the banquet on a summons from the Queen Mother," he reported, "when I happened to meet the Great Sage Equaling Heaven. He told me, O Lord of Ten Thousand Years, that you had issued a decree ordering him to tell all the rest of us to go to the Hall of Universal Brightness for a ceremony before going to the banquet. Your subject went back to the Hall of Universal Brightness as he had told me to, but as I did not see the Imperial Dragon and Phoenix Chariot outside I hurried here to await orders." 
"This wretch has the impudence to invent fraudulent decrees and deceive eminent ministers," exclaimed the Jade Emperor with anger and astonishment. "The Miraculous Investigator is to find out at once what he has been up to." 
The Miraculous Investigator left the palace in obedience to the edict, and by making thorough enquiries he found out all the details of what had happened. 
"The wrecker of the Heavenly Palace was Sun Wukong," he reported, and he went on to give a full account. 
The Jade Emperor was furiously angry, and he ordered the Four Great Heavenly Kings along with Heavenly King Li and Prince Nezha to mobilize the Twenty−eight Constellations, the Nine Bright Shiners, the Twelve Gods of the Twelve Branches, the Revealers of the Truth of the Five Regions, the Four Duty Gods, the Constellations of the East and West, the Gods of the North and South, the Deities of the Five Mountains and the Four Rivers, the star ministers of all Heaven, and a total of a hundred thousand heavenly soldiers. They were to descend to the lower world with eighteen heaven−and−earth nets, surround the Mountain of Flowers and Fruit, and capture that wretch for punishment. The gods called out their troops at once, and left the heavenly palace. 
A gusty sandstorm blotted out the heavens, 
Purple fog threw the earth into darkness. 
Just because the monkey fiend offended the Supreme Emperor 
Heavenly hosts were sent down to the mortal dust. 
The Four Great Heavenly Kings, 
The Revealers of the Truth of the Five Regions. 
The Four Great Heavenly Kings held the supreme command, 
And the Revealers controlled the soldiers' movements. 
Li the Pagoda Carrier commanded the central corps, 
Nezha the deadly led the van. 
The star Rahu ordered the leading rands, 
And the star Ketu towered behind. 
The Sun revealed his divinity, 
And radiance shone from the Moon. 
The stars of the Five Elements were mighty in valour, 
And the Nine Bright Shiners were fond of battle. 
The stars of the Branches Zi, Wu, Mao and You, 
Were all great heavenly warriors. 
The Five Plagues and the Five Mountains were drawn up on the East and West, While the Six Ding and Six Jia marched to right and left. 
The Dragon Gods of the Four Rivers stood above and below, 
And the Twenty−eight Constellations were drawn up in serried ranks: Horn, Gullet, Base, and Chamber were the officers commanding, 
Strider, Harvester, Stomach, and Mane wheeled and soared; 
Dipper, Ox, Woman, Barrens, Roof, House, and Wall, Heart, Tail, and Winnower−−all able stars−− 
Well, Ghost, Willow, Spread, Whig and Axletree 
Wielded their swords and spears, showed forth their power, 
Halted their clouds and descended in mists to the mortal world, Pitching camp before the Mountain of Flowers and Fruit. 
There is a poem that runs: 
Many the transformations of the heaven−born Monkey King 
Happy in his lair after stealing the pills and wine. 
Just because he wrecked the banquet of peaches, 
A hundred thousand heavenly troops now spread their nets. 
Heavenly King Li gave the order for the heavenly soldiers to pitch camp and throw a watertight cordon round the Mountain of Flowers and Fruit. Above and below they spread eighteen heaven−and−earth nets, and the Nine Bright Shiners were sent out to start the battle. They took their soldiers to the outside of the cave, where they saw the monkeys, big and small, leaping and fooling around. 
The star officers shouted in harsh voices, "Little goblins, where's that Great Sage of yours? We are gods, sent from the upper world to subdue your mutinous Great Sage. Tell him to surrender at once−−−and if there's so much as a hint of a 'no' from him, we will exterminate every last one of you." 
The little monkeys went rushing in to report, " "Great Sage, a disaster, a disaster. There are nine evil gods outside who say they've been sent from the upper world to subdue you." 
The Great Sage, who was just then sharing the immortal liquor with the seventy−two kings of the monsters and his four Stalwart Generals, paid no attention to the report, saying: 
"Today we have wine so today we celebrate: 
To hell with what's happening outside the gate." 
But before the words were out of his mouth another group of little devils came in. "Those nine evil gods are using foul and provocative language to challenge us to fight," they announced. 
"Never mind them," said the Great Sage with a laugh. 
"With verse and wine we're happy today; 
Who cares when fame will come our way?" 
But before these words were out of his mouth yet another group of devils came rushing in. "Sir, those nine evil gods have smashed the gates and are charging in." 
"The stinking gods!" exploded the Great Sage, "What nerve! I never wanted a fight with them, so why should they come here to push us around?" He thereupon ordered the One−horned Monster King to lead the seventy−two monster kings into battle while he followed them with the four Stalwart Generals. The monster king hastily assembled the devil soldiers and sallied forth to meet the enemy. They were all stopped by a charge by the Nine Bright Shiners, who held the head of the iron bridge so that no one could enter or leave. 
During the tumult the Great Sage came on the scene, and shouting "Make way!" he raised his iron cudgel, shook it till it was as thick as a bowl and twelve feet long, and struck and parried as he came charging out. 
The Nine Bright Shiners, who were no match for him, fell back. 
"You reckless Protector of the Horses," they shouted when they were back in the safety of their own position. 
"You have committed the most terrible crimes. You stole the peaches and the wine, wrecked the Peach Banquet, and pilfered the immortality pills of Lord Lao Zi. On top of all this you brought some of the immortal liquor you stole back here. Don't you realize that you have piled crime upon crime?" The Great Sage laughed. 
"It's true, it's true," he said, "but what are you going to do about it?" 
"In obedience to a golden edict of the Jade Emperor," the Nine Bright Shiners replied, "we have led out troops here to subdue you. Submit at once, or else all these creatures of yours will have to pay with their lives. If you refuse, we shall trample this mountain flat and turn your cave upside−down." 
"You hairy gods," roared the Great Sage in a fury, "what magic powers have you got to let you talk so big? 
Clear off, or I'll give you a taste of my cudgel." The Nine Bright Shiners did a war−dance together, which did not frighten the Handsome Monkey King in the least. He whirled his gold−banded cudgel, parrying to right and left, and fought the Nine Bright Shiners till their muscles were weak and their strength was gone; then each of them broke ranks and fled, dragging their weapons behind them. They rushed to the command post of the central corps and reported to the Pagoda−Bearing Heavenly King Li that the Monkey King was so ferocious that they had fled from the battlefield, unable to defeat him. Heavenly King Li then sent the Four Heavenly Kings and the Twenty−eight Constellations into battle. The Great Sage, not at all frightened at this, ordered the One−horned Demon King, the seventy−two kings of the monsters, and the four Stalwart Generals to draw up their line of battle outside the gates of the cave. The ensuing melee was really terrifying. 
On one side flags and standards colorfully flying, 
On the other side the gleam of spears and halberds. 
The shining round helmets reflect the sun, 
Like silver boulders reaching to the sky; 
Gleaming layers of armour are built into a wall 
Like a mountain of ice weighing down the earth. 
Flash through the clouds like lightning; 
Bristling like a field of hemp; 
And four−brightness spears 
Drawn up like a dense forest. 
Bows and crossbows, eagle−feathered arrows, 
Short clubs and snaky spears to terrify the soul. 
Wielding his single As−You−Will cudgel, 
The Great Sage fights against the heavenly gods. 
Such is the slaughter that no bird flies over it; 
And tigers and wolves flee in terror. 
The swirling stones and clouds of sand make everything dark, 
The dirt and the dust blot out the heavens. 
The clash of arms startles the universe 
As the battle strikes awe into gods and demons. 
The battle started in the morning and went on till the sun set behind the mountains in the West. By then the One−horned Demon King and the seventy−two kings of the monsters had all been captured by the heavenly hosts. Only the four Stalwart Generals and the monkeys had got away, and they were now hiding in the innermost recesses of the Water Curtain Cave. The Great Sage's solitary cudgel had fought off the Four Heavenly Kings, Li the Pagoda−bearer and Prince Nezha, who were all in the sky. After the battle had gone on for a long time the Great Sage saw that night was drawing on, so he plucked out one of his hairs, munched it up, spat out the pieces and shouted, "Change!" They changed into thousands of Great Sages, all with gold−banded cudgels, who forced Prince Nezha and the five Heavenly Kings to withdraw. 
After winning this victory the Great Sage put back his hair and hurried back to the cave, where the four Stalwart Generals at once led the monkeys out to kowtow at the head of the iron bridge to welcome him back. 
They sobbed three times and then laughed three times. 
"Why are you laughing and crying at the sight of me?" the Great Sage asked. 
"When we led all the commanders into battle against the heavenly kings this morning," replied the Stalwart Generals, "the seventy−two kings of the monsters and the One−horned Demon King were all captured by the gods, and we had to flee for our lives. That is why we cried. We laughed because you, Great Sage, have come back victorious and unharmed." 
To this the Great Sage replied, "Victory and defeat are all the soldier's lot. As the ancients said, 'To kill ten thousand of the enemy you must lose three thousand of your own.' Anyhow, the officers of ours who were captured were all tigers, leopards, wolves, badgers, river−deer, foxes, and raccoon−dogs. Not one of our own kind was even wounded, so there's no need for us to be bothered about it. But although I forced the enemy to withdraw by dividing up my body through magic, they're still encamped at the foot of our mountain, so we'll have to remain on our guard. Meanwhile we must eat a good meal and get a good night's sleep to build up our energy. Tomorrow morning I'll use powerful magic to capture those heavenly generals and avenge our people." After the four Stalwart Generals and the other monkey commanders had drunk several cups of coconut toddy, they went to bed with their worries calmed. 
When the four Heavenly Kings had withdrawn their troops and ended the battle, those who had distinguished themselves reported what they had done. Some had captured tigers and leopards, some lions and elephants, and others wolves and raccoon−dogs, but not one single monkey goblin had been taken. Then they built a mighty stockade around their camp. Commanders who had distinguished themselves wee rewarded, and the soldiers who made up the heaven−and−earth nets were ordered to surround the Mountain of Flowers and Fruit, holding bells and shouting, ready for a great battle the next day. Every man heard the orders, and they were strictly obeyed. Indeed: 
A wicked monkey made chaos, shocking heaven and earth, 
So they spread their nets and watched by night and day. 
Listen to the next installment to hear how he was dealt with the following morning. 

`,
    },
  ],
  [
    6,
    {
      title: `Chapter 6: Guanyin Comes to the Feast and Asks the Reason Why 
The Little Sage Uses His Might to Subdue the Great Sage`,
      createdAt: new Date(),
      content: `<ChapterStart>
Chapter 6: Guanyin Comes to the Feast and Asks the Reason Why 
The Little Sage Uses His Might to Subdue the Great Sage 

We shall leave for the moment the Heavenly Generals making their encirclement and the soundly sleeping Great Sage. The story goes on to tell how the Compassionate and Merciful Miraculous Savior from Suffering, the Bodhisattva Guanyin of Mount Potaraka in the Southern Sea, having been invited by the Queen Mother to the Peach Banquet, went to the precious pavilions at the Jade Pool with her great disciple Huian the Novice. 
She found the place deserted and the banquet ruined. The few Immortals present were not sitting at their places but holding confused discussions. When greetings were over the Immortals gave the Bodhisattva an account of what had happened. 
"If there is to be no banquet and no drinking," said the Bodhisattva, "you had better all come with me to the Jade Emperor." The Immortals were delighted to follow her, and when they arrived before the Hall of Universal Brightness the Four Heavenly Teachers, the Bare−Foot Immortal and many others were all there to greet the Bodhisattva. They told her that the Jade Emperor had sent heavenly armies to capture the demon, but they had not yet returned. 
"I wish to see the Jade Emperor," said the Bodhisattva, "so may I trouble you to inform him on my behalf?" 
The heavenly teacher Qui Hongji then went to the Hall of Miraculous Mist, and the Bodhisattva was invited in. She found that Lord Lao Zi was there in the place of honour, and that the Queen Mother was behind him. 
The Bodhisattva went in at the head of the others, and when she had done obeisance to the Jade Emperor she greeted Lao Zi and the Queen Mother. After they had all sat down she asked what had happened at the Peach Banquet. 
"The banquet is held every year, and it is normally a very happy occasion," the Jade Emperor replied, "but this year that monkey fiend wrecked it, so that your invitation was worth nothing." 
"Where does this monkey fiend come from?" asked the Bodhisattva. 
"He was born from a stone egg on the Mountain of Flowers and Fruit in the land of Aolai in the Eastern Continent of Superior Body," the Jade Emperor answered. "When he was born golden beams flashed from his eyes that reached to the star palace. At first we paid no attention to him, but later on he became a spirit, subduing dragons and tigers, and erasing his own name from the registers of death. The Dragon Kings and King Yama of the underworld informed us of this in memorials, and we wanted to capture him, but the Star of Longevity memorialized that in the Three Worlds all beings with nine orifices can become Immortals. We therefore extended education to the worthy by summoning him to the upper world and appointing him Protector of the Horses in the Imperial Stable. But this was not good enough for the scoundrel, who rebelled against Heaven. We sent Heavenly King Li and Prince Nezha to accept his surrender, extended him an amnesty, and summoned him back to the upper world. We made him a 'Great Sage Equaling Heaven,' though this carried no salary. As he had nothing to do he would go wandering all over the place, and for fear that this might lead to trouble we had him look after the Peach Orchard. Once again he flouted the law by stealing and eating every single one of the big peaches from the old trees. When the banquet was to be held he was not invited as his position was purely an honorary one; so he played a trick on the Bare−foot Immortal, went to the banquet looking like him, ate all the immortal delicacies, and drank all the immortal liquor. On top of this he stole Lord Lao Zi's pills of immortality and some imperial liquor, which he took to his mountain for the monkeys to enjoy. This made us very angry so we sent a hundred thousand heavenly troops to spread heaven−and−earth nets and subdue him. But we have received no reports today, so we do not know whether we have been victorious." 
When the Bodhisattva heard this she said to Huian the Novice, "Hurry down from Heaven to the Mountain of Flowers and Fruit and find out about the military situation. If you meet with any opposition you may do your bit to help, but the important thing is to bring an accurate report back." Huian the Novice straightened his robes, took his iron staff, left the palace by cloud, and went straight to the mountain. He saw that with the layer upon layer of heaven−and−earth nets, and the men holding bells and shouting passwords at the gates of the camp, the cordon round the mountain was watertight. 
Huian stopped and called, "Heavenly soldiers at the gates of the camp, I would trouble you to report that I, Moksa, the second son of Heavenly King Li, also known as Huian, the senior disciple of Guanyin of the Southern Sea, have come to ask about the military situation." Then the divine soldiers of the Five Mountains inside the camp went in through the gates of the headquarters, where the Rat, the Cock, the Horse and the Hare stars reported the news to the commander of the central corps. Heavenly King Li sent a flag of command with the order that the heaven−and−earth nets were to be opened to let Huian in. The East was just beginning to grow light as Huian followed the flag in and bowed to Heavenly King Li and the four other heavenly kings. 
"Where have you come from, my son?" asked Heavenly King Li. 
"Your stupid son accompanied the Bodhisattva to the Peach Banquet, and when she found the banquet deserted and nobody at the Jade Pool, she took me and the other Immortals to see the Jade Emperor. The Jade Emperor told her that you, father, and the other kings had gone down to the lower world to capture this monkey fiend. As the Jade Emperor has received no news all day on the outcome of the battle, the Bodhisattva sent me here to find out what has happened." 
"We arrived here and encamped yesterday," Heavenly King Li replied, "then sent the Nine Bright Shiners to challenge the enemy to battle, but that wretch used such tremendous magic powers that the Nine Bright Shiners all came back defeated. Then we led out own soldiers into action, and the wretch also drew up his line of battle. Our hundred thousand heavenly soldiers fought an indecisive engagements with him till dusk when he used a spell to divide up his body and force us back. When we withdrew our forces and held an investigation, we found that we had only captured wolves, tigers, leopards, and so on, and had not even taken half a monkey fiend. We have not yet given battle today." 
Before he had finished speaking someone appeared outside the gates of the headquarters to report that the Great Sage was outside at the head of a crowd of monkey spirits, clamoring for battle. The four other Heavenly Kings, Heavenly King Li, and Prince Nezha were all for committing their forces, but Moksa said, 
"Father, when your stupid son was instructed by the Bodhisattva to come here and find out the news, I was also told that if there was a battle I could do my bit to help. May I please go and see what sort of a 'Great Sage' 
he is, untalented though I am?" 
"My boy," said Heavenly King Li, "you have been cultivating your conduct with the Bodhisattva for some years now so I suppose that you must have acquired some magic powers, but do be very careful." 
The splendid Prince Moksa hitched up his embroidered robes and charged out through the gates of the headquarters waving his iron staff with both hands. "Which of you is the Great Sage Equaling Heaven?" he shouted. 
"I am," answered the Great Sage, brandishing his As−You−Will cudgel. "But who do you think you are, asking a question like that?" 
"I am Prince Moksa, the second son of Heavenly King Li, and I am now a disciple and a guard before the throne of the Bodhisattva Guanyin. My Buddhist name is Huian." 
"Why have you come here to see me instead of staying in the Southern Sea and cultivating your conduct?" 
asked the Great Sage, and Moksa replied, "My teacher sent me here to find out about the military situation, but now that I've seen your savagery I've come to capture you." 
"You talk big, don't you," said the Great Sage. 
"Well then, don't go away, try a taste of my cudgel." Moksa, not in the least frightened, struck at him with his iron staff. It was a fine fight they fought, half−way up the mountainside outside the gates of the headquarters. 
The staves were matched, but made of different iron; 
The weapons clashed, but their masters were not the same. 
One was a wayward Immortal known as the Great Sage, 
The other a true dragon disciple of Guanyin. 
The cast−iron staff, beaten with a thousand hammers, 
Had been forged by the art of the Ding and the Jia. 
The As−You−Will cudgel once anchored the Milky Way: 
As the Treasure Stilling the Sea its magic power was great. 
When the two met they were well matched indeed. 
And they parried and lunged at each other without end. 
The sinister cudgel, Infinitely murderous, 
Could whirl round your waist as quick as the wind, 
The spear−catching staff, 
Never yielding an opening, 
Was irresistible, parrying to right and left. 
On the one side the flags and banners fly, 
On the other the camel drums roll. 
Ten thousand heavenly generals in multiple encirclement; 
A cave of monkey devils densely packed together. 
Monstrous fogs and evil clouds cover the earth, 
While the smoke of deadly battle rises to the sky. 
Yesterday's fighting was bad enough; 
Today's struggle is even worse. 
The admirable skills of the Monkey King 
Put Moksa to flight, utterly defeated. 
After they had fought some fifty or sixty rounds, Huian's arm and shoulders were numbed and aching, and he could resist the Great Sage no longer. Waving his staff in a feint, he turned away and ran. The Great Sage then withdrew his monkey soldiers and encamped outside the gates of the cave. 
The big and little heavenly soldiers at the gates of the other camp received Huian and let him go straight to the headquarters, where he gasped and panted for breath as he said to the Four Heavenly Kings, Li the Pagoda−bearer, and his brother Prince Nezha, "What 
a Great Sage! What a Great Sage! His magic powers are too much for me. He beat me." Startled by this news, Heavenly King Li had a request for reinforcements written and sent the Strong−arm Devil King and Prince Moksa up to Heaven to submit. 
Not daring to waste a moment, the two messengers rushed out through the heaven−and−earth nets and mounted their propitious clouds. A moment later they arrived outside the Hall of Universal Brightness, where they greeted the Four Heavenly Teachers, who led them to the Hall of Miraculous Mist and handed up their memorial. Prince Moksa, or Huian, did homage to the Bodhisattva, who asked him what he had found out. 
"As you instructed me, I went to the Mountain of Flowers and Fruit," reported Huian, "asked them to open the gates of the heaven−and−earth net, saw my father, and told him of the orders you had given me. His Majesty my father said that they fought against the Monkey King yesterday but did not capture a single monkey spirit−−only tigers, leopards, lions, elephants and so on. While he was telling me this the Monkey King demanded battle again, so your disciple fought some fifty or sixty rounds against him with my iron staff, but I was no match for him. He beat me, and drove me back to the camp. This is why my father has sent me and the Strong−arm Devil King up to Heaven to ask for reinforcements." The Bodhisattva lowered her head in deep thought. 
The Jade Emperor opened the memorial and saw that it contained a request for help. "This intolerable monkey spirit has enough tricks to fight off a hundred thousand heavenly soldiers," he observed with a smile. 
"Heavenly King Li has asked for reinforcements. Which heavenly soldiers should I send him?" 
Before the words were out of his mouth, Guanyin put her hands together and said, "Do not worry, You Majesty. I can recommend a god to capture this monkey." 
"Which god?" the Jade Emperor asked, and the Bodhisattva replied, "Your Majesty's nephew, the Illustrious Sage and True Lord Erlang, who is now living at Guanjiangkou in Guanzhou, enjoying the incense that the lower beings burn to him. In the past he exterminated the Six Bogies. He has the Brothers of Plum Hill and the twelve hundred straw−headed gods, and his magical powers are enormous. He will agree to be sent though he would not obey a summons to come here, so Your Majesty might like to issue a decree ordering him to take his troops to the rescue." The Jade Emperor then issued such a decree and sent the Strong−arm Devil King to deliver it. 
The devil king took the decree, mounted his cloud, and went straight to Guanjiangkou. He reached the temple of the True Lord within an hour. When the demon judges guarding the gates went in to report that there was an envoy from heaven standing outside with an imperial decree, Erlang went with the brothers to receive the decree outside the gates, and incense was burned as he read. 
The Great Sage Equaling Heaven, the monkey fiend of the Mountain of Flowers and Fruit, has rebelled. 
Because he stole peaches, wine and pills while in Heaven and wrecked the Peach Banquet, we have despatched a hundred thousand heavenly soldiers and eighteen heaven−and−earth nets to surround the mountain and force him to submit, but we have not yet succeeded. We do now therefore especially appoint our worthy nephew and his sworn brothers to go to the Mountain of Flowers and Fruit and give their help in eliminating him. When you succeed, large rewards and high office shall be yours. 
Erlang was delighted. He told the envoy from Heaven to go back and report that the would be putting his sword to the Emperor's service. We need not describe how the devil king reported back to Heaven. 
The True Lord Erlang called the six sworn brothers of Plum Hill−−Marshals Kang, Zhang, Yao, and Li, and Generals Quo Shen and Zhi Jian−−together before the hall. "The Jade Emperor has just ordered us to the Mountain of Flowers and Fruit to subdue a monkey fiend," he said. "You are all coming with me." 
The brothers were all eager to go, and mustering their divine troops they unleashed a gale wind. In an instant they had crossed the Eastern Ocean, riding eagles and leading dogs, pulling their bows and drawing their crossbows, and had reached the Mountain of Flowers and Fruit. 
Finding that the many layers of heaven−earth nets were impenetrable, Erlang shouted, "Listen, all you generals in charge of the heaven−and−earth nets. I am the True Lord and the Illustrious Sage Erlang, and I have been sent here by the Jade Emperor to capture the monkey fiend. Open the gates of the camp and let me in at once." Each line of gods forming the nets let them through, and the four other Heavenly Kings and Heavenly King Li all came to welcome him outside the headquarters. When the introductions were over he asked how the fighting had gone, and the Heavenly Kings gave him a full account of what had happened. 
"Now that I, the Little Sage, have come here I shall have to match a few transformations with him," said Erlang with a smile. "I hope that all you gentlemen will maintain a close cordon with your heaven−and−earth nets, but don't screen off the top of the mountain; then I'll be able to fight him. If he beats me I shan't need the help of you gentlemen, as I have my brothers to support me; and if I beat him I won't have to trouble you to tie him up as my brothers can do it. I would just like to ask Heavenly King Li to stand in the sky and operate this fiend−detecting mirror. I'm worried that if he's beaten he may go and hide somewhere, so you will have to give me a clear view of him and not let him get away." The Heavenly Kings stayed in the four quarters, and all the heavenly soldiers were drawn up in their battle positions. 
The True Lord Erlang went out at the head of the four marshals and the two generals−−making seven sworn brothers with himself included−−to challenge the enemy to battle; and he ordered his other officers to defend the camp firmly and keep the eagles and dogs under control. All the straw−headed gods acknowledged the order. Erlang then went to the outside of the Water Curtain Cave, where he saw the monkey hordes neatly drawn up in a coiled−dragon battle line; in the middle of the central corps stood a pole with a banner on it reading "Great Sage Equaling Heaven." 
"What business has that loathsome fiend to call himself the equal of Heaven?" Erlang asked; and the six sworn brothers of Plum Hill replied, "Stop admiring him and challenge him to battle." When the junior monkeys at the gate of their camp saw the True Lord Erlang they rushed back to report, whereupon the Monkey King took his gold−banded cudgel, adjusted his golden armour, put on his cloud−walking shoes, felt his golden helmet, and leapt out through the gates of the camp. He saw at first sight how cool and remarkable Erlang looked, and how elegantly he was dressed. Indeed: 
His bearing was refined, his visage noble, 
His ears hung down to his shoulders, and his eyes shone. 
The hat on his head had three peaks and phoenixes flying, 
And his robe was of a pale goose−yellow. 
His boots were lined with cloth of gold; dragons coiled round his socks; His jade belt was decorated with the eight jewels, 
At his waist was a bow, curved like the moon, 
In his hand a double−edged trident. 
His axe had split open Peach Mountain when he rescued his mother, His bow had killed the twin phoenixes of Zongluo. 
Widespread was his fame for killing the Eight Bogies, 
And he had become one of Plum Hill's seven sages. 
His heart was too lofty to acknowledge his relatives in Heaven; In his pride he went back to be a god at Guanjiang. 
He was the Merciful and Miraculous Sage of the red city, 
Erlang, whose transformations were numberless. 
When the Great Sage saw him he laughed with delight, raised his gold−banded cudgel, and shouted, "Where are you from, little general, that you have the audacity to challenge me?" 
"You must be blind, you wretch, if you can't recognize me. I am the nephew of the Jade Emperor, and my title is Merciful and Miraculous King Erlang. I am here on imperial orders to arrest you, Protector of the Horses, you rebel against Heaven, you reckless baboon." 
"Now I remember who you are," replied the Great Sage. "Some years ago the Jade Emperor's younger sister wanted to be mortal and came down to the lower world, where she married a Mr. Yang and gave birth to a son, who split the Peach Mountain open with his axe. Is that who you are? I should really fling you a few curses, but I've got no quarrel with you; and it would be a pity to kill you by hitting you with my cudgel. So why don't you hurry back, young sir, and tell those four Heavenly Kings of yours to come out?" 
When the True Lord Erlang heard this he burst out angrily, "Damned monkey! Where are your manners? Try this blade of mine!" The Great Sage dodged the blow and instantly raised his gold−banded club to hit back. 
There was a fine battle between the two of them: 
The Great Sage Equaling Heaven: 
One is the Handsome Monkey King, the proud deceiver of his enemies; The other a true pillar, the unknown subduer. 
They were both in a fighting mood. 
He who had no respect before 
Today learned a sense of proportion. 
The iron staff raced with the flying dragons, 
The divine cudgel seemed like a dancing phoenix. 
Parrying to the left, thrusting to the right, 
Advancing to meet a blow, flashing behind. 
The brothers of Plum Hill add to one side's might, 
While the other has the four Stalwart Generals to transmit orders. 
As the flags wave and the drums roll each side is as one; 
Battle−cries and gongs raise everyone's morale. 
The two steel blades each watch for their chance, 
But neither leaves an opening as they come and go. 
The gold−banded cudgel, the treasure from the sea, 
Can fly and transform itself to win the victory. 
A moment's delay and life is lost; 
A single mistake will be the last. 
After Erlang and the Great Sage had fought over three hundred rounds the outcome of the fight was still undecided. Erlang braced, himself, and with a shake became ten thousand fathoms tall; in his hands his two−bladed trident looked like the peaks of Mount Hua. His face was black, his fangs were long, and his hair was bright red: he looked ferociously evil. He hacked at the Great Sage's head. The Great Sage, also resorting to magic, gave himself a body as big as Erlang's and a face as frightening; and he raised his As−You−Will gold−banded cudgel, which was now like the pillar of Heaven on the summit of the Kunlun Mountain, to ward off Erlang's blow. This reduced the two ape field marshals Ma and Liu to such trembling terror that they could no longer wave their banners, while the gibbon generals Seng and Ba were too scared to use their swords. On the other side Kang, Zhang, Yao, Li, Guo Shen and Zhi Jian threw the straw−headed gods into an assault on the Water Curtain Cave, with the dogs and eagles unleashed and their bows and crossbows drawn. 
This attack put the four monkey generals to flight, and two or three thousand devils were captured. The monkeys threw away their spears, tore off their armour, abandoned their swords and halberds, and fled screaming. Some went up the mountain and some returned to the cave, like roosting birds frightened by an owl, or stars scattered across the sky. That is all we have to say about the sworn brothers' victory. 
The story goes on to tell how the True Lord Erlang and the Great Sage, having turned themselves into figures on the scale of Heaven and Earth, were locked in battle when the Great Sage was suddenly appalled to notice that the monkey fiends in his camp had scattered in terror. Putting off his magic appearance he broke away and fled, his cudgel in his hand. Seeing him go, the True Lord Erlang hurried after him with long strides. 
"Where are you going?" he asked. "If you surrender at once, your life will be spared." The Great Sage, who had no heart left for the fight, was running as fast as he could. As he approached the mouth of the cave he came up against Marshals Kang, Zhang, Yao and Li, as well as Generals Guo Shen and Zhi Jian, blocking his way at the head of their armies. 
"Where are you going, damned monkey?" they asked, and the Great Sage hastily squeezed his gold−banded cudgel till it was the size of an embroidery needle and hid it in his ear. Then he shook himself, turned into a sparrow, flew up into a tree, and perched on one of its branches. 
The six sworn brothers looked for him very hard but could find him nowhere, so they all shouted in unison, 
"The monkey fiend has escaped, the monkey fiend has escaped." 
As they were shouting the True Lord Erlang arrived and asked them, "Brothers, where had you chased him to when he disappeared?" 
"We had him surrounded here just now, but he vanished." Erlang opened his phoenix eyes till they were quite round and looked about him. He saw that the Great Sage had changed himself into a sparrow and was perching on a branch; so he put off his magical appearance, threw down his divine trident, and took the pellet bow from his waist. Then he shook himself, changed into a kite, spread his wings, and swooped in to attack. 
As soon as the Great Sage saw this he took off and turned himself into a big cormorant, soaring up into the sky. Erlang saw him, and with a quick shake of his feathers and a twist of his body he transformed himself into a crane and pierced the clouds as he tried to catch him. The Great Sage landed on a mountain stream and, changing into a fish, plunged into the water. Erlang, who had pursued him to the bank of the stream, could see no trace of him. 
"That macaque must have gone into the water and changed himself into some kind of fish or shrimp," he thought. "I'll transform myself again, then I'll get him." He turned into a fish−hawk and soared above the lower reaches of the stream and the first waves of the sea. He waited there for a time. Meanwhile the Great Sage, who was in the form of a fish, swam with the stream until he noticed a bird flying above him. It was quite like a blue kite, except that its feathers were not blue; it was quite like an egret, but it had no crest on its head; and it was quite like a stork, but its legs were not red. 
"That must be what Erlang turned himself into while waiting for me," he thought, turned round quickly, and went away. 
"The fish who turned round," thought Erlang when he saw this, "is like a carp but its tail isn't red; it's like a mandarin fish, but I can't see the pattern on its scales; it's like a snakehead, but without a star on its head; and like a bream, but it has no needles on its gills. Why did it turn round the moment it saw me? It must be that monkey transformed." He swooped down and snapped at the Great Sage with his beak. The Great Sage leapt out of the water, turned into a water−snake, swam to the bank, and slid into the grass. Failing to catch the fish in his beak, Erlang saw a snake jump out of the water and realized it was the Great Sage. He changed himself at once into a red−crested grey crane, and stretched out his long beak that was like a pair of pointed pincers to e a t u p t h e w a t e r − s n a k e . T h e s n a k e g a v e a j u m p a n d b e c a m e a b u s t a r d s t a n d i n g s t i f f l y o n a smartweed−covered bank. When Erlang saw that he had turned himself into so low a creature−−for the bustard is the lowest and lewdest of birds, not caring whether it mates with phoenix, eagle or crow−−he kept his distance, reverted to his own body, went away to fetch and load his pellet bow, and knocked him flying with a single shot. 
The Great Sage seized the chance as he rolled down the precipice to crouch there and turn himself into a temple to a local god. He opened his mouth wide to look like the entrance to the temple and turned his teeth into the doors; he made his tongue into a statue of a god and his eyes into windows and lattice. He could not tuck his tail away, so he stuck it up behind him as a flagpole. When Erlang came to the foot of the precipice he could not see the bustard he had shot over, and anxiously opening his phoenix eyes he looked carefully around and saw a temple with its flagpole at the back. 
"It must be that monkey over there," he observed with a smile. "He's trying to fool me again. I've seen temples before, but never one with the flagpole at the back. I'm sure it is that beast up to his tricks again. If he'd managed to lure me in, he'd have been able to get me with a single bite. Of course I won't go in. I'll smash his windows in with my fist, then I'll kick his door down." 
"Vicious, really vicious," thought the Great Sage with horror when he heard him say this. "Those doors are my teeth, and the windows are my eyes; and if he smashes my teeth and bashes in my eyes, what sort of a state will that leave me in?" With a tiger leap he disappeared into the sky. 
The True Lord Erlang rushed around wildly, but he could only see his six sworn brothers, who crowded round him and asked, "Elder brother, did you catch the Great Sage?" 
"That monkey turned himself into a temple to fool me," he replied with a laugh. "Just when I was going to smash his windows and kick in his door he gave a jump and vanished without a trace. Strange, very strange." 
They were all astonished, and though they looked all around they could see no sign of him. 
"Brothers, you patrol this area while I go to look for him above," said Erlang, and with a quick jump he was riding a cloud in mid−air. 
When he saw Heavenly King Li holding high the fiend−detecting mirror and standing with Nezha at the edge of a cloud, the True Lord asked, "Your Heavenly Majesty, have you seen that Monkey King?" 
"He hasn't come up here−−I've been keeping a lookout for him with this mirror," the Heavenly King replied. 
The True Lord Erlang then told him how he had used transformations and magic to capture the monkey hordes. 
"He changed into a temple," Erlang went on, "but got away just when I was going to hit him." On hearing this, Heavenly King Li turned the fiend−detecting mirror in all four directions, then said with a laugh, "Hurry away, True Lord, hurry away. The monkey made himself invisible to get through the encirclement, and he's gone to your place, Guanjiangkou." Erlang took his divine trident and returned to Guanjiangkou in pursuit. 
The Great Sage had already arrived there, changed himself into the likeness of the god Erlang with a shake of his body, put away his cloud, and gone into the temple. The demon judges did not realize who he really was, so they all kowtowed to welcome him. He took his seat in the middle of the temple, and inspected the offerings: the beef, mutton and pork presented by one Li Hu, the ex−voto promised by a Zhang Long, the letter from a Zhao Jia asking for a son, and one Qian Bing's prayer for recovery from illness. As he was looking round it was announced that another Lord Erlang had arrived. All the demon judges hurried to look, and they were all astonished. 
The True Lord Erlang asked, "Has a so−called Great Sage Equaling Heaven been here?" 
"We haven't seen any Great Sages," they replied, "only another god who's looking around inside." 
The True Lord rushed in through the gates, and as soon as the Great Sage saw him he reverted to his own appearance and said, "There's no point in shouting, sir. This temple's mine now." 
The True Lord raised his double−bladed trident and swung at the Monkey King's head, but the Monkey King dodged the blow by magic, took his embroidery needle, shook it till it was as thick as a bowl, and rushed forward to meet the attack. Shouting and yelling, they fought their way out through the gates, and went on fighting through the mists and clouds all the way back to the Mountain of Flowers and Fruit. The Four Heavenly Kings and all their soldiers were so alarmed that they kept an even tighter guard. Marshals Kang and Zhang and the others came to meet the True Lord, and combined their efforts to surround the Handsome Monkey King. But of this no more for now. 
After the Strong−arm Demon King had sent the True Lord Erlang and his six sworn brothers with their troops to capture the fiend, he had gone back to Heaven to report. He found the Jade Emperor, the Bodhisattva Guanyin, the Queen Mother and all his immortal ministers in conference. 
"Although Erlang has joined the fight, we have had no reports on it all day," the Jade Emperor said. 
Guanyin put her hands together and replied, "May I suggest that Your Majesty go out through the Southern Gate of Heaven with Lord Lao Zi to see for yourself what is happening." 
"A good idea," said the Emperor, and he went by chariot with Lao Zi, the Queen Mother, and all the immortal ministers to the Southern Gate of Heaven. Here they were met by a number of heavenly soldiers and strongmen. When the gates were opened and 
they looked into the distance they saw that the heavenly hosts were spread all around in a net; Heavenly King Li and Nezha were standing in mid−air with the fiend−detecting mirror, and Erlang was struggling with the Great Sage within the encircling ring. 
The Bodhisattva addressed Lao Zi and asked, "What do you think of the god Erlang I recommended? He really does have divine powers. He's just got that Great Sage cornered, and all he has to do now is to catch him. If I give him a little help now he will certainly be able to do it." 
"What weapon would you use, Bodhisattva? How could you help him?" Lao Zi asked. 
"I'll drop that pure vase of willow twigs on the monkey's head. Even if it doesn't kill him it will knock him off balance and enable the Little Sage to catch him." 
"That vase of yours is made of porcelain," Lao Zi replied, "and if you hit the target that will be fine. But if it were to miss his head and smash into his iron club, it would be shattered. Just hold your hand while I give him a little help." 
"What sort of weapon do you have?" the Bodhisattva asked, and Lord Lao Zi replied, "I've got one all right." 
He pulled up his sleeve and took a bracelet off his right arm. 
"This weapon," he said, "is made of tempered steel to which I have added the magic elixir. It preserves my miraculous essence, can transform itself, is proof against fire and water, and can snare anything. One of its names is Diamond Jade and the other is Diamond Noose. When I went out through the Han Pass some years ago to turn into a foreigner and become a Buddha, I have a great deal to thank it for. It's the best protection at any time. Just watch while I throw it down and hit him." 
As soon as he had finished speaking he threw it down from outside the heavenly gate, and it fell into the camp on the Mountain of Flowers and Fruit, hitting the Monkey King neatly on the head. The Monkey King was too preoccupied with fighting the seven sages to notice this weapon falling on him from heaven, and when it struck him on the forehead he lost his balance and stumbled, then picked himself up and started to run. The slim dog of the god Erlang caught him up and bit him in the calf, bringing him down again. As he lay on the ground he cursed at the dog. 
"You don't bother your own master, damn you; why pick on me to bite?" He rolled over and tried unsuccessfully to get up, but the seven sages all held him down, roped him up, and put a sickle−shaped blade round his collar−bone to prevent him from making any more transformations. 
Lord Lao Zi then recovered his Diamond Jade and invited the Jade Emperor, Guanyin, the Queen Mother, and all the immortal ministers to return to the Hall of Miraculous Mist. Down below, Heavenly King Li and the four other Heavenly Kings assembled their troops and pulled up the stockade. They went over to congratulate the Little Sage and said, "It was all thanks to you, Little Sage." 
"No, it was thanks to the great blessings of His Celestial Majesty and the might of all the gods−−it was nothing I did," replied the Little Sage. 
"No time to talk now, elder brother," said the four marshals Kang, Zhang, Yao, and Li. "Let's take this wretch up to Heaven to see the Jade Emperor and ask what is to be done with him." 
"Worthy brothers," Erlang replied, "you never received any heavenly commission, so it would not be right for you to see the Jade Emperor. The heavenly soldiers can escort him while I go up there with the Heavenly Kings to report back. You should comb this mountain with your troops, and when you've finished go back to Guanjiangkou. When I've asked for our rewards, I'll come back and we can celebrate together." The four marshals and the two generals accepted their orders, and the rest mounted their clouds and went 
to Heaven triumphantly singing victory songs. Before long they were outside the Hall of Universal Brightness. The heavenly teachers reported to the throne that the Four Great Heavenly Kings and the rest of them had captured the monkey devil, the Great Sage Equaling Heaven, and were now waiting to be summoned. The Jade Emperor then issued an edict ordering the Strong−arm Demon King and the heavenly soldiers to march him to the Demon−beheading Tower, where the wretch was to have his body chopped to mincemeat. Goodness! 
The bully and cheat now meets with a bitter punishment, 
The heroic spirit must now come to an end. 
If you don't know what happened to the Monkey King's life, then listen to the explanation in the next installment. 

`,
    },
  ],
  [
    7,
    {
      title: `Chapter 7: The Great Sage Escapes from the Eight Trigrams Furnace 
The Mind−Ape Is Fixed Beneath Five Elements Mountain `,
      createdAt: new Date(),
      content: `<ChapterStart>
Chapter 7: The Great Sage Escapes from the Eight Trigrams Furnace 
The Mind−Ape Is Fixed Beneath Five Elements Mountain 

Wealth and honour, glory and fame, 
Are predetermined by fate: 
No one should act against conscience to covet any of them. 
Are the good results of true enlightenment and loyalty. 
Heaven punishes all wild and wicked deeds 
If not at once then later on. 
Ask the Lord of the East the reason why 
Disasters now strike him. 
It is because his ambition was high, his plans far−reaching, 
He did not respect authority, and he smashed convention. 
The story goes on to tell how the Great Sage Equaling Heaven was escorted by the hosts of heavenly soldiers to the Demon−beheading Tower and tied to the Demon−subduing Pillar. They hacked at him with sabres, sliced at him with axes, lunged at him with spears and cut at him with swords, but they were unable to inflict a single wound on him. The Southern Dipper angrily ordered all the gods of the Department of Fire to set him alight and burn him up, but he would not ignite. He told the gods of the Department of Thunder to nail splinters of thunder into him, but however hard they tried they could not harm a hair of his body. The Strong−arm Demon King and the rest of them then reported this to the throne. 
"Your Majesty," they said, "this Great Sage has learned somewhere or other how to protect himself by magic. 
Although your subjects have hacked at him with sabres, sliced at him with axes, struck at him with thunder and tried to burn him with fire, we have not been able to harm a hair of his body. What are we to do?" 
"How can we deal with a wretch like this?" the Jade Emperor asked, and the Lord Lao Zi replied to this in a memorial: "That monkey has eaten the peaches of immortality, drunk the imperial liquor, and stolen the pills of elixir. He swallowed those five gourds of pills of mine, fresh ones and mature ones alike. Now we have used the fire of samadhi on him, which has tempered his body and made it a diamond one that cannot be harmed. The best course would be to let me take him and put him in my Eight Trigrams Furnace, where I can refine out my elixir with the civil and martial fire and reduce him to ashes at the same time. The Jade Emperor then ordered the Six Dings and the Six Jias to untie him and hand him over to the Lord Lao Zi, who took him away in obedience to the imperial decree. At the same time the Jade Emperor summoned the Illustrious Sage Erlang to his presence and rewarded him with a hundred golden flowers, a hundred jars of imperial liquor, a hundred pills of elixir, rare jewels, lustrous pearls, brocade, embroidery, and other gifts to share with his sworn brothers. The True Lord Erlang thanked him for his bounty and returned to Guanjiangkou. 
When he reached the Tushita Palace, Lord Lao Zi had the Great Sage untied, took the hook from his collar−bone, pushed him into the Eight Trigrams Furnace, and ordered the priests in charge of it and the fire−boys to fan the fire up to refine him. Now this furnace was made up of the Eight Trigrams−− Qian, Kan, Gen, Zhen, Sun, Li, Kun, and Dui−− so he squeezed himself into the "Palace of Sun," as Sun was the wind, and where there was wind there could be no fire. All that happened was that the wind stirred up the smoke, which made both his eyes red and left him somewhat blind with the illness called "fire eyes with golden pupils." 
Time soon passed, and without him realizing it the seven times seven, or forty−nine, days had passed, and Lord Lao Zi's fire had reached the required temperature and burned for long enough. One day the furnace was opened for the elixir to be taken out. The Great Sage, who was shielding his eyes with both hands and wiping away his tears, heard a noise at the top of the furnace. He looked hard and saw daylight; and, unable to stand being in there a moment longer, leapt out of the furnace, kicked it over with a crash, and was off. In the ensuing chaos the fire−boys, the keepers of the furnace, the Dings and the Jias all tried to grab him, but he knocked them all down. He was like a white−browed tiger gone berserk, a single−horned dragon raving mad. 
Lord Lao Zi rushed up to seize him, but was thrown head over heels as the Great Sage freed himself. He took the As−You−Will cudgel from his ear, and shook it in the wind till it was thick as a bowl, and once more created total chaos in the Palace of Heaven, not caring in the least what he did. He laid about him to such effect that the Nine Bright Shiners shut their windows and doors, and not a sign was to be seen of the Four Heavenly Kings. 
Marvellous monkey spirit! As the poem has it, 
His primordial body matches an earlier heaven, 
Completely natural throughout ten thousand ages; 
Vast and passive, blended with the Great Monad; 
Always immobile, known as the Prime Mystery. 
After so much refining in the furnace he is not lead or mercury; 
Having lived long outside the ordinary he is a natural Immortal. 
His changes are inexhaustible, and still he has more, 
So say nothing about the Three Refuges or Five Abstentions. 
A single point of magic light can fill the whole of space; 
Likewise that staff of his: 
Longer or shorter, depending on his needs, 
Upright or horizontal, it can shrink or grow. 
To the ape's immortal body is matched a human mind: 
That the mind is an ape is deeply meaningful. 
It was quite true that the Great Sage equaled Heaven: 
The appointment as Protector of the Horse showed no discernment. 
Horse and ape together make mind and thought; 
Bind them tightly together, and do not seek elsewhere. 
When all phenomena are reduced to truth they follow a single pattern; Like the Tathagatha reaching nirvana under the two trees. 
This time the Monkey King made no distinctions between high and humble as he laid about him to East and West with his iron club. Not a single god opposed him. He fought his way into the Hall of Universal Brightness outside the Hall of Miraculous Mist, where the Kingly Spirit Officer, the lieutenant of the Helpful Sage and True Lord, fortunately was on duty. When he saw the Great Sage charging around he took up his golden mace and went forward to resist him. 
"Where are you going, damned monkey?" he asked. "If you go wild you'll have me to deal with." The Great Sage was not in a position to argue with him, so he raised his cudgel to strike him. The Spirit Officer lifted his mace and advanced to meet him. It was a fine fight: 
Great was the fame of the brave and loyal officer, 
Evil the name of the rebel who bullied Heaven. 
The low one and the good one were well matched; 
Valiant heroes fighting each other. 
Both were straight, merciless, and terrible. 
One of them is a deity formed from the Great Monad's thunder; 
The other is the monkey spirit, the Great Sage Equaling Heaven. 
With golden mace or iron cudgel each is a master; 
Both are weapons from the palaces of the gods. 
Today they show their might in the Hall of Miraculous Mist, 
A wonderful display of courage and skill. 
One in his folly wanting to capture the Palace of the Dipper and the Bull, The other exerting all his strength to support the world of the gods. 
The fight is too hard to allow the use of magic, 
As mace and cudgel struggle without result. 
As they fought together without either of them emerging as victor, the True Lord sent an officer with a message to the Thunder Palace ordering the thirty−six thunder generals to surround the Great Sage. Although they all fought with the utmost ferocity, the Great Sage was not in the least frightened, and parried and blocked to left and right with his As−You−Will cudgel, resisting his opponents in front and behind. Before long he found that the pressure was too great from the sabres, spears, swords, halberds, clubs, maces, claws−and−ropes, hammer, poleaxes, battleaxes, grabs, pennoned hooks, and moon−shaped bills of the thunder generals; so he shook himself and grew three heads and six arms. Then he shook his As−You−Will cudgel and changed it into three cudgels, and wielding the three cudgels in his six hands he flew round and round inside the encirclement like a spinning wheel. None of the thunder generals could get anywhere near him. Indeed, 
How can men learn to live for ever? 
He can enter fire without being burned, 
And go in the water but not be drowned. 
He is as bright as a Mani pearl, 
Swords and spears cannot harm him. 
When faced with the choice between good and evil he might do either. 
If he is good he becomes a Buddha or an Immortal, 
If bad, he grows fur and horns. 
With his boundless transformations he wrecked the Heavenly palace, Nor can thunder generals and divine troops take him. 
Although the gods had the Great Sage cornered, they were unable to get near him. The noise of the shouting and the fighting had already alarmed the Jade Emperor, who ordered the Miracle Official Youyi to go to the West with the Helpful Sage and True Lord and ask the Buddha to subdue him. 
When these two sages received the order they went to the wonderful land of the Miraculous Mountain, where they offered their greetings to the Four Vajrapanis and Eight Bodhisattvas before the Thunder Monastery and asked them to pass on their massage. The gods went to the foot of the lotus seat to inform the Tathagata, who invited the two sages to his presence. When the sages had performed the threefold obeisance to the Buddha they stood in attendance below the throne. 
"Why has the Jade Emperor troubled you two sages to come here?" asked the Buddha. 
"A monkey," they reported, "who was born on the Mountain of Flowers and Fruit, has used his magic powers to unite all the monkeys and throw the world into confusion. The Jade Emperor sent down an edict of amnesty and appointed him Protector of the Horses, but this was not good enough for him, so he left Heaven again. 
When heavenly King Li and Prince Nezha were unsuccessful in their attempt to capture him the Jade Emperor sent down another amnesty with his appointment as a 'Great Sage Equaling Heaven'. At first this appointment was purely nominal, but later he was told to look after the Peach Orchard. But he stole the peaches and then went to the Jade Pool where he stole the delicacies and the liquor and wrecked the banquet. In his drunkenness he staggered into the Tushita Palace, stole Lord Lao Zi's pills of immortality, and left Heaven again. The Jade Emperor sent a hundred thousand heavenly troops, but they were still unable to subdue him. Then Guanyin recommended the True Lord Erlang and his sworn brothers to go after the monkey, and he used many a transformation until he was finally able to capture the monkey after the Lord Lao Zi hit him with his Diamond Jade. The monkey was then taken to the imperial presence, and the order for his execution was given. But although he was hacked at with sabres, chopped at with axes, burned with fire, and struck with thunder, none of this did him any damage; so Lord Lao Zi requested permission to take him away and refine him with fire. 
But when the cauldron was opened after forty−nine days he jumped out of the Eight Trigrams Furnace, routed the heavenly troops, and went straight to the Hall of Universal Brightness in front of the Hall of Miraculous Mist. Here he has been stopped and engaged in fierce combat by the Kingly Spirit Officer, the lieutenant of the Helpful Sage and True Lord Erlang, thunder generals have been sent there to encircle him; but no one has been able to get close to him. In this crisis the Jade Emperor makes a special appeal to you, the Tathagata, to save his throne." 
On hearing this the Tathagata said to the assembled Bodhisattvas, "You stay here quietly in this dharma hall and behave yourselves in your seats of meditation while I go to deal with the demon and save the throne." 
Telling the Venerable Ananda and the Venerable Kasyapa to accompany him, the Tathagata left the Thunder Monastery and went straight to the gate of the Hall of Miraculous Mist, where his ears were shaken by the sound of shouting as the thirty−six thunder generals surrounded the Great Sage. The Buddha issued a decree that ran: "Tell the thunder generals to stop fighting, open up their camp, and call on that Great Sage to come out, so that I may ask him what divine powers he has." 
The generals then withdrew, whereupon the Great Sage put away his magic appearance and came forward in his own body. He was in a raging temper as he asked, "Where are you from? You are a good man. You've got nerve, stopping the fighting and questioning me!" 
"I am the Venerable Sakyamuni from the Western Land of Perfect Bliss," replied the Buddha with a smile. "I have heard of your wild and boorish behavior, and of your repeated rebellions against Heaven, and I would like to know where you were born, when you found the Way, and why you have been so ferocious." 
"I am," the Great Sage said, 
"A miracle−working Immortal born of Heaven and Earth, 
An old ape from the Mountain of Flowers and Fruit. 
My home is in the Water Curtain Cave, 
I sought friends and teachers, and became aware of the Great Mystery. 
"I have practiced many a method for obtaining eternal life, Infinite are the transformations I have learned. 
That is why I found the mortal world too cramped, 
And decided to live in the Jade Heaven. 
"None can reign forever in the Hall of Miraculous Mist; 
Kings throughout history have had to pass on their power. 
The strong should be honoured−−he should give way to me: 
This is the only reason I wage my heroic fight." 
The Buddha laughed mockingly. 
"You wretch! You are only a monkey spirit and you have the effrontery to want to grab the throne of the Jade Emperor. He has trained himself since childhood, and suffered hardship for one thousand, seven hundred and fifty kalpas. Each kalpa is 129,600 years, so you can work out for yourself how long it has taken him to be able to enjoy this great and infinite Way. But you are a beast who has only just become a man for the first time. How dare you talk so big? You're not human, not even human! I'll shorten your life−span. Accept my teaching at once and stop talking such nonsense! Otherwise you'll be in for trouble and your life will very shortly be over; and that will be so much the worse for your original form too." 
"Although he has trained himself for a long time, ever since he was a child, he still has no right to occupy this place for ever," the Great Sage said. "As the saying goes, 'Emperors are made by turn; next year it may be me.' 
If he can be persuaded to move out and make Heaven over to me, that'll be fine. But if he doesn't abdicate in my favour I'll most certainly make things hot for him, and he'll never know peace and quiet again." 
"What have you got, besides immortality and the ability to transform yourself, that gives you the nerve to try to seize the Heavenly Palace?" the Buddha asked. 
"I can do many tricks indeed," the Great Sage replied. "I can perform seventy−two transformations, and I can preserve my youth for ten thousand kalpas. I can ride a somersault cloud that takes me thirty−six thousand miles at a single jump. So why shouldn't I sit on the throne of Heaven?" 
"I'll have a wager with you then," said the Buddha. "If you're clever enough to get out of my right hand with a single somersault, you will be the winner, and there will be no more need for weapons or fighting: I shall invite the Jade Emperor to come and live in the West and abdicate the Heavenly Palace to you. But if you can't get out of the palm of my hand you will have to go down to the world below as a devil and train yourself for several more kalpas before coming to argue about it again." 
When he heard this offer the Great Sage smiled to himself and thought, "This Buddha is a complete idiot. I can cover thirty−six thousand miles with a somersault, so how could I fail to jump out of the palm of his hand, which is less than a foot across?" 
With this in his mind he asked eagerly, "Do you guarantee that yourself?" 
"Yes, yes," the Buddha replied, and he stretched out his right hand, which seemed to be about the size of a lotus leaf. Putting away his As−You−Will cudgel, the Great Sage summoned up all his divine powers, jumped into the palm of the Buddha's hand, and said, "I'm off." Watch him as he goes like a streak of light and disappears completely. The Buddha, who was watching him with his wise eyes, saw the Monkey King whirling forward like a windmill and not stopping until he saw five flesh−pink pillars topped by dark vapours. 
"This is the end of the road," he said, "so now I'll go back. The Buddha will be witness, and the Hall of Miraculous Mist will be mine." Then he thought again, "Wait a moment. I'll leave my mark here to prove my case when I talk to the Buddha." He pulled out a hair, breathed on it with his magic breath, and shouted 
"Change." It turned into a writing brush dipped in ink, and with it he wrote THE GREAT SAGE EQUALING 
HEAVEN WAS HERE in big letters on the middle pillar. When that was done he put the hair back on, and, not standing on his dignity, made a pool of monkey piss at the foot of the pillar. Then he turned his somersault round and went back to where he had started from. 
"I went, and now I'm back. Tell the Jade Emperor to hand the Heavenly Palace over to me," he said, standing in the Buddha's palm. 
"I've got you, you piss−spirit of a monkey," roared the Buddha at him. "You never left the palm of my hand." 
"You're wrong there," the Great Sage replied. "I went to the farthest point of Heaven, where I saw five flesh−pink pillars topped by dark vapours. I left my mark there: do you dare come and see it with me?" 
"There's no need to go. Just look down." The Great Sage looked down with his fire eyes with golden pupils to see the words "The Great Sage Equaling Heaven Was Here" written on the middle finger of the Buddha's right hand. The stink of monkey−piss rose from the fold at the bottom of the finger. 
"What a thing to happen," exclaimed the Great Sage in astonishment. "I wrote this on one of the pillars supporting the sky, so how can it be on his finger now? He must have used divination to know what I was going to do. I don't believe it. I refuse to believe it! I'll go there and come back again." 
The dear Great Sage hurriedly braced himself to jump, but the Buddha turned his hand over and pushed the Monkey King out through the Western Gate of Heaven. He turned his five fingers into a mountain chain belonging to the elements Metal, Wood, Water, Fire, and Earth, renamed them the Five Elements Mountain, and gently held him down. 
All the thunder gods and the disciples Ananda and Kasyapa put their hands together to praise the Buddha: 
An egg learned to be a man, 
Cultivated his conduct, and achieved the Way. 
Heaven had been undisturbed for the thousand kalpas, 
Until one day the spirits and gods were scattered. 
"The rebel against Heaven, wanting high position, 
Insulted Immortals, stole the pills, and destroyed morality. 
Today his terrible sins are being punished, 
Who knows when he will be able to rise again?" 
When he had eliminated the monkey fiend the Buddha told Ananda and Kasyapa to return with him to the Western paradise. At that moment Tian Peng and Tian You hurried out of the Hall of Miraculous Mist to say, 
"We beg the Tathagata to wait a moment as the Jade Emperor's chariot is coming." 
The Buddha turned round and looked up, and an instant later he saw an eight−splendour imperial chariot and a nine−shining jeweled canopy appear to the sound of strange and exquisite music, and the chanting of countless sacred verses. Precious flowers were scattered and incense was burned. 
The Jade Emperor went straight up to the Buddha and said, "We are deeply indebted to the great Buddha's powers for wiping out the demon, and we hope that the Tathagata will spend a day here so that we may invite all the Immortals to a feast of thanksgiving." 
The Buddha did not dare refuse, so putting his hands together he replied, "This old monk only came here in obedience to Your Celestial Majesty's command. What magic powers can I pretend to? This was all due to the wonderful good fortune of Your Celestial Majesty and the other gods. How could I possibly allow you to thank me?" 
The Jade Emperor then ordered all the gods of the Department of Thunder to split up and invite the Three Pure Ones, the Four Emperors, the Five Ancients, the Six Superintendents, the Seven Main Stars, the Eight Points of the Compass, the Nine Bright Shiners, the Ten Chiefs, the Thousand Immortals, and the Ten Thousand Sages to a banquet to thank the Buddha for his mercy. Then he ordered the Four Great Heavenly Teachers and the Nine Heavenly Maidens to open the golden gates of the jade capital, and Palace of the Great Mystery, and the Tong Yang Jade Palace, invite the Tathagata to take his seat on the Throne of the Seven Precious Things, arrange the places for all the different groups of guests, and set out the dragon liver, phoenix bone−marrow, jade liquor, and magic peaches. 
Before long the Original Celestial Jade Pure One, the High Celestial Precious Pure One, the Heavenly Celestial Pure One of the Way, the True Lords of the Five Humors, the Star Lords of the Five Constellations, the Three Officers, the Four Sages, the Left Assistant, the Right Support, the Heavenly Kings, Nezha, and the whole of space responded to the invitations that had been sent out magically. Their standards and canopies came two by two as they brought shining pearls, rare jewels, fruit of longevity, and exotic flowers, and presented them to the Buddha with bows. 
"We thank the Tathagata for subduing the monkey fiend with his infinite powers. His Celestial Majesty has asked us all to come to his banquet to express our thanks. We beg the Tathagata to give this banquet a title." 
The Buddha accepted this commission and said, "Since you want a name for it, we could call it the 'Banquet to Celebrate Peace in Heaven.'" 
"Splendid, 'Banquet to Celebrate Peace in Heaven,' splendid," exclaimed all the Immortals with one voice, and then they all sat down in their places, put flowers in their hair, and played the lyre. It was indeed a splendid banquet, and here are some verses to prove it: 
The Banquet to Celebrate Peace in Heaven far surpasses 
The Banquet of Peaches that the monkey wrecked. 
Radiance shines from dragon flags and imperial chariots; 
Auspicious vapours float above streamers and symbols of office. 
Melodious the fairy music and mysterious songs; 
Loud sound the tones of phoenix flute and pipe of jade 
The rarest of perfumes waft around the Immortals, assembled calm in the sky. 
To congratulate the court on Pacifying the Universe. 
When the Immortals were all enjoying the feast the Queen Mother and a group of fairies, immortal beauties, and houris, floated through the air as they danced towards the Buddha, and after paying her respects the Queen Mother said, "My Peach Banquet was ruined by that monkey fiend, and this Banquet to Celebrate Peace in Heaven is being given because the Tathagata has used his great powers to chain down the evil monkey. Having nothing else with which to express my gratitude, I have picked a number of peaches of immortality with my own pure hands as an offering." They were Half red, half green, sweet−smelling beauties 
Growing every ten thousand years from immortal roots. 
The peaches of Wulingyuan seem laughable: 
How can they compare with those of Heaven? 
Purple−veined and tender, rare even in the sky, 
Yellow−stoned, and matchless on earth for their sweetness. 
They are able to adapt the body and make it live for ever; 
Those lucky enough to eat them are no ordinary beings. 
The Buddha put his hands together to thank the Queen Mother, who instructed the fairies and houris to sing and dance again, and their performance met with the praises of the whole assembly. Indeed: Misty heavenly incense filled the room; 
A chaos of heavenly petals and flowers. 
Great is the splendour of the jade city and golden gates, 
Priceless the strange treasures and rare jewels. 
Two by two, coeval with Heaven, 
Pair by pair, outliving ten thousand kalpas: 
Even if land and sea changed places 
They would not be astonished or alarmed. 
Soon after the Queen Mother had ordered the fairies and houris to sing and dance, and when wine cups and chopsticks were weaving to and fro, suddenly 
A strange scent reached their noses, 
Startling the stars and constellations in the hall. 
Immortals and the Buddha put down their cups, 
Each of them raising their heads to look. 
An old man appeared in the middle of the Milky Way 
Holding a sacred mushroom. 
His gourd contains ten−thousand−year elixir. 
On the sacred rolls his name is written Eternal Life. 
In his cave Heaven and Earth are free. 
In his bottle Sun and Moon were created. 
As he wanders around the Four Seas in pure idleness 
Taking his ease in the Ten Continents, enjoying the bustle. 
When he went to Peach Banquets he often got drunk 
But when he came round, the moon was as bright as ever. 
A long head, big ears and a short body, 
Known as Longevity from the Southern Pole. 
The Star of Longevity had arrived. When he had made his greetings to the Jade Emperor and the Buddha he made a speech of thanks. 
"When I heard that the monkey fiend had been taken by the Lord Lao Zi to his Tushita palace to be refined I thought that this was bound to restore peace," he said, "and I never expected he would rebel again. Happily the demon was quelled by the Tathagata, and so when I heard that this feast was being given to thank him I came at once. As I have nothing else to offer I have brought with me purple magic mushrooms, jasper herbs, greenish jade lotus−root, and golden pills of immortality: these I humbly present." The poem says Offering the jade louts−root and golden pills to Sakyamuni, 
To give him as many years as the grains of sand of the Ganges. 
Peace and eternal joy decorate the Three Vehicles; 
Prosperity and eternal life make the nine grades of immortals glorious. 
Within the gate of No−Phenomena the true Law rules; 
Above the Heaven of Nothingness is his immortal home. 
Heaven and Earth both call him their ancestor, 
His golden body provides blessings and long life. 
The Buddha happily accepted his thanks, and after the Star of Longevity had taken his place the wine−cups started to circulate once more. Then the Bare−foot Immortal appeared, kowtowed to the Jade Emperor, and thanked the Buddha. 
"I am deeply grateful to you for subduing the monkey fiend with your divine powers. As I have nothing else with which to express my respect, I offer you two magic pears and a number of fire−dates." 
Sweet are the Bare−foot Immortal's pears and dates, 
And long will be the life of the Buddha to whom they are offered. 
The lotus seat of the seven treasures is as firm as a mountain, His thousand−golden−flower throne is as gorgeous as brocade. 
Coeval with Heaven and Earth−−this is no lie; 
It is true that his blessings are greater than a flood. 
His Western Paradise of leisure and bliss 
Truly provides all the long life and blessings one could hope. 
The Buddha thanked him too, and telling Ananda and Kasyapa to collect together all the offerings he went over to the Jade Emperor to thank him for the banquet. When all the guests were thoroughly drunk the Miraculous Patrolling Officer reported that the Great Sage had poked his head out. 
"It doesn't matter," the Buddha said, producing from his sleeve a strip of paper on which were written the golden words Om mani padme hum. He gave this piece of paper to Ananda and told him to stick it on the summit of the mountains. The Venerable Ananda took it through the gates of Heaven and pasted it firmly to a square boulder on the top of the Five Elements Mountain. When this was done the mountain sank roots and joined up all its seams. The Monkey King was still able to breathe and he could still stick his hands out and move them. Ananda went back to Heaven and reported that he had pasted the paper in place. 
The Buddha then took his leave of the Jade Emperor and all the other deities. When he and his two disciples had gone out through the gates of Heaven his merciful heart moved him to chant a spell ordering a local tutelary god and the Revealers of the Truth of the Five Regions to live on the mountain and keep guard over him. When he was hungry they were to feed him iron pellets, and when he was thirsty they were to give him molten copper to drink. When the time of his punishment was over, someone would come and rescue him. 
The monkey fiend was bold enough to rebel against Heaven, 
But was subdued by the Tathagata's hand. 
He endures the months and years, drinking molten copper for his thirst, And blunts his hunger on iron pellets, serving his time. 
Suffering the blows of Heaven, he undergoes torment, 
Yet even in the bleakest time a happy fate awaits. 
If some hero is ready to struggle for him, 
One year he will go to the West in the service of the Buddha. 
His great power grew as he humbled the mighty, 
He used his wicked talents to subdue tigers and dragons. 
He stole the peaches and wine as he wandered round Heaven, 
Was graciously given office in the Jade Capital. 
When his wickedness went too far his body suffered, 
But his roots of goodness were not severed, and his breath still rose. 
He will escape from the hand of the Buddha, 
And wait till the Tang produces a saintly monk. 
It you don't know in what month of what year his sufferings ended, listen to the explanation in the next installment. 

`,
    },
  ],
  [
    8,
    {
      title: `Chapter 8: Our Buddha Creates the Scriptures and Passes on Perfect Bliss 
Guanyin Obeys a Decree and Goes to Chang'an`,
      createdAt: new Date(),
      content: `<ChapterStart>
Chapter 8: Our Buddha Creates the Scriptures and Passes on Perfect Bliss 
Guanyin Obeys a Decree and Goes to Chang'an 

If you try to ask about the dhyana 
Or investigate the innumerable 
You will waste your life and achieve nothing. 
Polishing bricks to make mirrors, 
Or piling up snow to turn it into grain−− 
However many years have you wasted like that? 
A hair can contain an ocean, 
A mustard−seed can hold a mountain, 
And the golden Kasyapa only smiles. 
When you are awakened you will surpass the Ten Stages and the Three Vehicles, And stop the four kinds of birth and the six types of reincarnation. 
Who has ever heard, before the cliff of thoughts extinguished, Under the tree that has no shadow, 
The sound of the cuckoo in a spring dawn? 
The path by the Cao Stream is dangerous, 
The Vulture Peak is high in the clouds: 
Here the voice of the ancients was a mystery. 
On a cliff ten thousand feet high 
Five−leaved lotuses bloom 
As scent coils round the shutters of the old palace. 
Your knowledge smashes all the currents of thought; 
The Dragon King and the Three Treasures can be seen. 
This lyric poem is set to the tune Su Wu Man. Our story goes on to how our Buddha, the Tathagata, left the Jade Emperor and went back to the Thunder Monastery, where he saw the three thousand Buddhas, five hundred Arhats, eight great Vajrapanis and countless Bodhisattvas standing under the pairs of sala trees at the foot of the Vulture Peak, all holding banners, canopies, jewels and magical flowers. The Tathagata brought his propitious cloud to a halt and addressed them thus: 
I surveyed the Three Worlds. 
Containing nothing at all. 
The subjection of this evil monkey 
Was a mystery beyond understanding. 
It is called the beginning of life and death: 
Such is the appearance of things. 
When he had spoken a sacred light filled the sky with forty−two rainbows that linked North and South together. All who saw them bowed, and a moment later the Buddha gathered together some felicitous cloud and climbed to the supreme Lotus Throne, where he seated himself in majesty. 
Then the three thousand Buddhas, the five hundred Arhats, the eight Vajrapanis and the four Bodhisattvas came forward to bow to him with their hands together and ask, "Who was it who wrecked the Heavenly Palace and ruined the Peach Banquet?" 
"The wretch was a monkey fiend born on the Mountain of Flowers and Fruit," the Buddha replied, "whose towering crimes would beggar description. None of the heavenly generals were able to subdue him, and when Lord Lao Zi refined him with fire after Erlang had captured him, he was unharmed. When I went there he was in the middle of the thunder generals, giving a great display of his martial prowess and his spirit. I stopped the fighting and asked him what it was all about. He said that he had divine powers, was able to do transformations, and could ride a somersault cloud for thirty−six thousand miles at a single jump. I made a wager with him that he could not jump out of my hand, then grabbed him, turned my fingers into the Five Elements Mountain, and sealed him under it. The Jade Emperor opened wide the golden gates of the Jade Palace, and invited me to be the guest of honour at a Banquet to Celebrate Peace in Heaven he gave to thank me. After that I took my leave of him and came back here." They were all delighted by the news and they congratulated him effusively, after which they withdrew group by group, each to go about his duties as all rejoiced in the divine truth. Indeed: 
Propitious vapours filled Paradise, 
Rainbows surround the Venerable One. 
The Western Paradise, known as the best, 
Is ruled by the dharma King of non−phenomenon. 
Black apes are always offering fruit, 
Deer hold flowers in their mouths; 
Sacred turtles offer long life, 
Immortal cranes present magic mushrooms. 
Here they peacefully enjoy the Pure Land of the Jetavana Park, The infinite realms of the Dragon Palace. 
Through practicing silence they return to the truth, 
Achieving reality by contemplation. 
There is no birth nor death; 
They neither wax nor wane. 
Mists follow them as they come and go; 
Untouched by heat or cold, they do not notice the years. 
One day, as the Buddha dwelt in the Thunder Monastery on the Vulture Peak, he called together all the other Buddhas, Arhats, guardian deities, Bodhisattvas, Vajrapanis, monks and nuns and said, "As we are beyond time, I don't know how long it has been since the crafty ape was subdued and Heaven pacified, but by earthly reckoning it must be about five hundred years. As today is a fine early autumn day and I have a precious bowl filled with a hundred kinds of rare flowers and a thousand varieties of exotic fruit, what would you say to our having an Ullambana Feast?" They all put their hands together and performed the reverence of going round him three times in acceptance. The Buddha then ordered Ananda to hold the bowl of flowers and fruit while Kasyapa laid them out. The hosts were moved to gratitude, which they expressed in verse. 
The poem on happiness went: 
The Star of Happiness shines bright before the Venerable One; 
Gifts of happiness spread wide and deep, ever richer. 
Fortune is boundless and lasts as long as the Earth; 
A happy fate has the luck to be linked with Heaven. 
Fields of happiness are widely sown and flourish every year; 
The sea of happiness is mighty and deep, never changing. 
Happiness fills Heaven and Earth, leaving legacies of happiness Happi 
ness grows beyond measure, eternally complete. 
The poem on official rank went: 
With rank as high as a mountain, coloured phoenixes call; 
With rank ever increasing, we praise the evening star. 
Salary raised to ten thousand bushels, and a healthy body; 
Salary raised to a thousand tons, and the world at peace. 
Rank and salary equaling Heaven, and eternal too; 
Rank and fame as great as the sea, and even clearer. 
Rank and favour continuing for ever, greatly to be admired; 
Rank and nobility without bounds, like ten thousand kingdoms. 
The poem on longevity went: 
The Star of Longevity shines towards the Buddha; 
The glories of the land of longevity start from here. 
Fruits of longevity fill the bowls, glowing with good omen; 
Longevity's flowers are newly plucked and placed on the lotus throne. 
Poems of longevity, pure and elegant, full of rare conceits, 
Songs of longevity sung with exquisite talent. 
Life as long as sun and moon, 
Life that will outlast both mountains and seas. 
When the Bodhisattvas had presented all the poems they asked the Buddha to expound the fundamentals to them. Then the Tathagata opened his excellent mouth and expounded the great Law and retribution. He spoke about the wonderful scriptures of the Three Vehicles and the theory of the Five Aggregates as contained in the Surangama−sutra; the deities and nagas gathered round, and flowers came raining down in profusion. Indeed: The meditating heart shines like the moon in a thousand rivers; The true nature embraces ten thousand miles of sky. 
When the Buddha had finished his sermon he said to the host, "I have observed that the morality of the living creatures of the four continents varies. In the Eastern Continent of Superior Body they worship Heaven and Earth, their minds are livery and they are even−tempered. In the Northern Kuru Continent they are given to killing living things, but they only do it to feed themselves; they are stupid and lazy by nature, but they do not trample much on others. Our Western Continent of Cattle−gift has people who neither covet nor kill. They nourish the vital essence and submerge the spirit; and although they produce no saints of the highest order, they all live to a ripe old age. But in the Southern Jambu Continent they are greedy and lecherous and delight in the sufferings of others; 
they go in for a great deal of killing and quarrelling. That continent can with truth be called a vicious field of tongues and mouths, an evil sea of disputation. I now have Three Stores of True Scriptures with which they can be persuaded to be good." 
On hearing this, all the Bodhisattvas put their hands together in submission, then went forward to ask, "What Three Stores of True Scriptures does the Tathagata have?" 
"I have one store of the Vinaya, the law, which is about Heaven; one of Sastras, expositions which are concerned with Earth; and one of Sutras, or scriptures, which save ghosts. The Three Stores consist of fifteen thousand one hundred and forty−four scrolls in thirty−five classes. They are the scriptures for cultivating the truth, and the gate to real goodness. I want to send them to the Eastern lands because it is intolerable that the beings of that quarter should all be such stupid wretches who slander and defame the true word, do not understand the gist of my Law, and have lapsed from the orthodox Yogacara Sect. How am I to find one with the magic powers to go to the East, choose a worthy believer and bid him make the arduous crossing of a thousand mountain and ten thousand rivers in search of the scriptures until he finally comes to this abode of mine to receive them? When he does come they will be sent to the East for ever to convert all living beings, which will be a blessing as big as a mountain, a cause for congratulation as deep as the sea. Is anyone willing to go and find him?" 
The Bodhisattva Guanyin went up to the lotus throne, and after going round the Buddha three times by way of salutation she said, "Your untalented disciple wishes to go to the East to find a man to come and fetch the scriptures." All present raised their heads to look at the Bodhisattva: Her understanding filling out the four virtues, 
Wisdom filling her golden body. 
From her necklace hang pearls and jade, 
Her bracelet is made of jewels. 
Her hair is black clouds skillfully piled like coiling dragons; Her embroidered girdle lightly sways, a phoenix wing. 
A gown of white silk gauze, 
Bathed with sacred light; 
Shielded by propitious vapours. 
Eyebrows like crescent moons, 
Eyes like a pair of stars. 
A jade face full of heavenly happiness, 
Scarlet lips making a touch of red. 
Her pure bottle of sweet dew is ever full, 
The willow twigs in it are always green. 
She delivers from the eight disasters, 
Lives in the Southern Sea, 
Rescues the suffering when she bears their cries, 
Never failing to answer every call, 
Infinitely divine and miraculous. 
Her orchid heart admires the purple bamboo; 
Her orchid nature loves the fragrant creeper. 
She is the merciful ruler of Potaraka Island, 
The living Guanyin of the Tide Cave. 
The Buddha was very pleased to see her. 
"No one but the venerable Guanyin, whose divine powers are so great, will do for this mission," he said. 
"What instructions have you for your disciple as she goes to the East?" Guanyin asked. 
"You must watch the route all the way," said the Buddha. "You may not go via the Milky Way, but if necessary you may have a little cloud or mist. As you cross mountains and rivers you must note the distances carefully to enable you to give full instructions to the man who will come to fetch the scriptures. But that true believer will, I'm afraid, have a difficult journey, so I shall give you five treasures for him." The Buddha ordered Ananda and Kasyapa to bring out a brocade cassock and a nine−ringed monk's staff. 
"Give this cassock and staff to him who will come to fetch the scriptures: they are for him to use. If he is determined to come here, he can avoid the Wheel of Reincarnation by wearing this cassock, and he will be free from evil if he carries this staff." The Bodhisattva bowed and took them. The Buddha then produced three bands. 
"These precious things are called 'tight bands,'" he told the Bodhisattva as he handed them to her. "Although all three of them look the same, they have different uses. I also have three Band−Tightening Spells. If you meet any devils with great magic powers on your journey you should persuade them to reform and become the disciples of the pilgrim who will come to fetch the scriptures. If they do not do is they are told these bands should be put on their heads, where they will of themselves take root in the flesh. If the appropriate spell for each one is recited the victim's eyes will bulge, his head will ache, and his forehead will split open. He will thus be certainly induced to adopt our religion." 
When he finished speaking the Bodhisattva bowed eagerly and withdrew. She told Huian the Novice to accompany her, and he took his iron staff weighing a thousand pounds with him so that he could as a demon−quelling strongman for the Bodhisattva. The 
Bodhisattva wrapped the cassock up in a bundle and gave it to him to carry. She then put the golden bands away safely and went down the Vulture Peak with the staff in her hand. This journey was to have consequences: 
The Buddha's disciple comes back to his original vow; 
The Venerable Golden Cicada is dressed in sandalwood. 
When the Bodhisattva reached the foot of the mountain the Gold−headed Immortal of the Jade Truth Temple stopped her at the temple gate and invited her to take some tea. But she dared not stop for long, and so she said, "I have been given a sacred command by the Tathagata to go to the East and find a man who will come to fetch the scriptures." 
"When will he arrive?" the Immortal asked. 
"It is not definite," the Bodhisattva replied, "but he will probably reach here in two or three years' time." She took her leave of the Immortal and as she traveled amid cloud and mist she estimated the distances. There are some verses to prove it: 
She cared nothing of the journey of ten thousand miles to find him, But worried about finding the right man. 
Looking for the man seemed to be very chancy, 
But how can it be a mere coincidence? 
One who teaches the Way for the wrong motives will distort it; He who explains it without faith will preach in vain. 
Whoever will try and know it with his whole being, 
Is bound to have a future ahead of him. 
As the teacher and her disciple were on their journey they suddenly noticed a thousand miles of weak water, which was the River of Flowing Sands. 
"Disciple," said the Bodhisattva, "this will be hard to cross for the man who will come to fetch the scriptures, as he will be of impure bone and mortal flesh. How will he do it?" 
"Teacher, how wide does the river look to you?" asked Huian. The Bodhisattva stopped her cloud to investigate. She saw: 
Joining up with the deserts to the East, 
Reaching the foreign kingdoms in the West, 
It was about three hundred miles across, 
And three million miles long. 
As the waters flowed it was like the earth turning over, 
The waves were like rearing mountains. 
From three miles' distance the mighty flood is heard. 
Immortals' rafts do not reach here, 
Lotus leaves cannot float on it. 
The sun slants through withered plants and bathes the crooked shore; Brown clouds block its light and darken the long bank. 
How could merchants pass this way? 
Has a fisherman ever moored here? 
No geese alight on the sandbanks, 
But apes cry on the distant shore. 
Its color comes from bountiful red smartweed, 
While delicate white duckweed drifts together. 
As the Bodhisattva was surveying the scene she heard a splash and saw a hideous ogre leap out of the waves. 
Bare legs and a muscular body. 
Like a pair of tortoise−shell lanterns; 
The comers of his mouth were as sinister 
Protruding fangs like swords, 
Red hair, matted and unkempt. 
He roared like a clap of thunder, 
And ran across the waves with the speed of wind. 
This ogre climbed up the bank with a pole in his hands to catch the Bodhisattva, but was stopped by Huian's staff. 
"Don't run away," Huian shouted as the ogre advanced towards him. The battle that ensued between them was quite terrifying: 
Moksa with his iron club, 
Using his divine powers to protect the Bodhisattva; 
The ogre with his demon−quelling pole 
Displaying his valour for all be was worth. 
A pair of silver dragons dancing by the river; 
Two holy monks in battle on the bank. 
The one used his skill to control the River of Flowing Sands 
The other had distinguished himself in protecting Guanyin. 
The one could make the waves leap and roll, 
The other could breathe out fogs and gales. 
When the waves leapt and rolled, Heaven and Earth were darkened; In the fogs and gales, sun and moon were dimmed. 
Was like a white tiger coming down from the mountain; 
Was like a crouching yellow dragon. 
When one goes into action 
It beats the undergrowth to start the snakes; 
When the other lashes out, 
It parts the pines to flush the sparrowhawks. 
They fight till the sky goes dark 
And earth and sky are dim. 
The one has long been unrivalled in the Weak Waters; 
The other has always been the hero of Vulture Peak. 
When the pair of them had fought several dozen rounds inconclusively the ogre blocked his opponent's iron staff and asked, "Where are you from, monk, that you dare to take me on?" 
"I am Prince Moksa, the second son of the Pagoda−bearing Heavenly King Li," the other replied. "I am also Huian the Novice. I am now protecting my teacher on her journey to the East to find the man who will fetch the scriptures. Which monster are you? How dare you stand in our way?" The ogre then realized who he was. 
"I remember," he said, "you used to cultivate your conduct with Guanyin of the Southern Sea in the Purple Bamboo Grove. Why have you come here?" 
"Can't you see my teacher standing there on the bank?" 
When the ogre heard this he chanted "na−a−aw" several times to show his respect, withdrew his pole and let Moksa seize it. Then he bowed to Guanyin and said, "Forgive me, Bodhisattva, and listen to what I have to tell you. I am not a demon, but the Curtain Raising General who used to stand in attendance by the imperial chariot in the Hall of Miraculous Mist. Just because I accidentally smashed a crystal dish at a Peach Banquet the Jade Emperor had me given eight hundred strokes of the rod, exiled me to the lower world, and made me look like this. And on top of it all every seven days he sends a flying sword here to stab my chest over a hundred times before it goes back again. It's agony. I get so unbearably cold and hungry that I have to emerge from the waves every two or three days to devour a traveler. I never thought that in my ignorance I would insult the merciful Bodhisattva today." 
"You were exiled here for a crime against Heaven, but now you are deepening your guilt by harming living beings. I am now going to the East on the Buddha's orders to find the man who will fetch the scriptures. Why don't you become one of us and ensure yourself good retribution in future by accompanying the pilgrim as a disciple and ascending to the Western Heaven to pay homage to the Buddha and seek the scriptures? I will see to it that the flying sword stops coming to pierce you, and when you are successful you will be forgiven your crimes and your old job will be given back to you. What do you think of that?" 
"I am willing to return to the truth," the ogre replied, then went closer as he continued, "Bodhisattva, I have lost count of the number of people I have eaten here, and I have even devoured some pilgrims who were trying to fetch scriptures. I throw the heads of all my victims into the river, and they all sink to the bottom as not even goose−down will float on this water. But the skeletons of those nine pilgrims floated and would not sink. I was so impressed by this that I threaded them together with rope and play with them in my spare time. 
But I am afraid that the man who is to fetch the scriptures may not get this far, which would wreck my future." 
"Of course he'll get here," the Bodhisattva replied. "You should hang those skeletons from your head and wait for him. They will come in useful." 
"In that case," the ogre said, "I shall await your instructions." The Bodhisattva then laid her hands on his head and administered the monastic rules to him, chose for him the surname Sha ("Sand") and gave him the Buddhist name of Wujing ("Awakened to Purity"). Then he entered monkish life and took the Bodhisattva across the river. He washed his heart, cleansed his thoughts, and stopped killing living creatures. All he did now was to wait for the pilgrim who would come to fetch the scriptures. 
After leaving him the Bodhisattva and Huian hurried on towards the East. When they had been travelling for a long time they saw a high mountain veiled with an evil mist, and they were unable to climb it on foot. Just when they were intending to cross the mountain by cloud, a gale wind blew up and a monster suddenly appeared. He too was very menacing to behold: 
His entrails hung from his mouth, rolled up and knotted; 
His ears were like rush fans, his eyes shone gold. 
His teeth were sharp as steel files, 
And when he opened his mouth it was like a brazier. 
His golden helmet was tied firmly round his cheeks; 
His armour, bound with a silken sash, was a python's sloughed−off skin. 
In his hands he held a nailed rake like a dragon's claw, 
At his waist hung a curved bow the shape of a half−moon. 
His martial might overawed the Year Planet; 
His overweening spirit threatened the heavenly gods. 
He rushed upon them, and without a second thought smote at the Bodhisattva with his rake. Moksa the Novice parried his blow, and shouted at the top of his voice, "Remember your manners, damned monster, and watch out for my staff." 
"Monk," the other replied, "you don't know how to keep yourself in one piece. Mind my rake!" At the foot of the mountain the pair of them rushed upon each other as they struggled for supremacy. It was a fine battle: The fierce and murderous ogre; 
Huian, imposing and able. 
The iron staff could pulverize the heart; 
The rake struck at the face. 
The dust thrown up darkened Heaven and Earth; 
The flying sand and stones startled gods and ghouls. 
As its pair of rings resounded; 
As it whirled in its owner's hands. 
One was the heir of a Heavenly King, 
One defended the Law on Potaraka Island. 
The other was an evil fiend in a mountain cave. 
In their battle for mastery, 
None knew who the winner would be. 
Just when the fight was getting really good, Guanyin threw down a lotus flower from mid−air to separate the two weapons. The monster, shocked at the sight of it, asked, "Where are you from, monk? How dare you try to fool me with a 'flower in front of the eyes?'" 
"I'll get you, you stinking, flesh−eyed mortal," replied Moksa. "I am a disciple of the Bodhisattva of the Southern Sea, and this lotus was thrown down by her. Don't you know that?" 
"By the Bodhisattva of the Southern Sea do you mean Guanyin Who Eliminates the Three Calamities and Saves from the Eight Disasters?" the monster asked. 
"Who else could I mean?" retorted Moksa. The monster threw down his rake, bowed to him, and asked, 
"Where is the Bodhisattva, elder brother? May I trouble you to introduce me?" Moksa looked up and pointed. 
"There she is," he said. The monster kowtowed to her and shouted in a shrill voice, "Forgive me, Bodhisattva, forgive me." Guanyin brought her cloud down to earth, went over to him and asked, "Are you a wild boar become a devil or a pig turned monster? How dare you block my way?" 
"I'm neither a wild boar nor a pig," the monster replied. "I used to be Marshal Tian Peng in the Milky Way. 
Because I took some wine to seduce the moon maiden, the Jade Emperor sentenced me to two thousand hammer blows and exile in the mortal world. My spirit had to find a womb to occupy, but I lost my way and entered the womb of a sow. That's why I look like this. I ate up my sow mother, drove all the other pigs away, and seized this mountain, where I keep myself by eating people. I never meant to offend you, Bodhisattva. 
Save me, save me, I beg you." 
"What is this mountain called?" the Bodhisattva asked. 
"It's called the Mount of Blessing, and the cave in it is called the Cloud Pathway Cave. Second Sister Luan, who used to live there, saw that I knew how to fight and asked me to be the head of her household as her husband, but she died within a year and all her property became mine. As the days lengthened into years I found that I had no way of supporting myself, so I had to eat people to keep myself going as I had done before. Forgive me my sins, I beg of you, Bodhisattva." 
"There is an old saying," the Bodhisattva replied, "that goes, 'If you want to have a future, don't do anything with no future in it?' You broke the law in the upper world, and since then your vicious nature has not been reformed. You have further sinned by taking life, so this surely means that you will be doubly punished." 
"Future!" said the monster angrily. "According to you I should have lived on air! As the saying goes, 'By the government's law you're beaten to death, and by the Buddha's law you starve to death.' Clear off! Clear off! If you don't I'll capture this pilgrim and eat this plump and tender old woman. I don't give a hoot if it's double sinning, triple sinning, or sinning a thousand or ten thousand times over." 
"'If a man wishes to be good, Heaven will certainly allow him to be,'" said the Bodhisattva. "If you are prepared to submit to the truth, there are of course, ways to feed yourself. There are the five kinds of food−grains, and they are sufficient to assuage hunger, so why eat people to keep alive?" 
When the monster heard these words it was as if he awoke from a dream, and he said to the Bodhisattva, "I would love to reform, but isn't it true that 'a sinner against Heaven has nowhere to pray to?'" 
"I'm going to the East on the orders of the Buddha to find the man who will fetch the scriptures," she replied. 
"You can be a disciple of his and make this journey to the Western Heaven; thus you will gain merit and atone for your crimes, and I will see to it that you are freed from disaster." 
"I'll go with him, I'll go with him," the monster said over and over again. The Bodhisattva then laid her hands on his head and he accepted the monastic rules. She gave him the surname Zhu ("Pig") because of his appearance, and gave him the Buddhist name Zhu Wuneng ("Pig Awakened to Power"). She ordered him to adhere to the truth and eat only vegetarian food, cutting out the five pungent vegetables as well as the three forbidden things; wild goose, dog and fish. He was now to wait single−mindedly for the pilgrim who would come to fetch the scriptures. 
The Bodhisattva and Moksa then took their leave of the Pig Awakened to Power and continued on their way by low−altitude cloud. As they were travelling along they heard a jade dragon call to them in mid−air. 
"Which dragon are you?" the Bodhisattva asked as she went up to him. "And why are you undergoing punishment here?" 
"I am the son of Ao Run, the Dragon King of the Western Sea. Because I burnt up the bright pearls in the palace, my father reported me to the court of Heaven as a rebel. The Jade Emperor had me hung up in mid−air and given three hundred strokes, and I am to be executed any day now. I beg you to save me, Bodhisattva." 
When she heard his plea the Bodhisattva went in through the Southern Gates of Heaven with Moksa. Here they were met by the Heavenly Teachers Qiu and Zhang, who asked them, "Where are you going?" 
"I would like an audience with the Jade Emperor." The two Heavenly Teachers hurried in to announce her, and the Jade Emperor came out of his palace to receive her. The Bodhisattva went forward to greet him and said, "On my way to the East on the orders of the Buddha to find the man to fetch the scriptures, I met a wicked dragon suspended in mid−air.. I have come here especially to ask you to spare his life and give him to me so that I can teach him to serve the pilgrim with his legs." On hearing this the Jade Emperor issued a decree pardoning him, and he sent a heavenly general to release him and give him to the Bodhisattva. The Bodhisattva thanked him for his generosity and left. The young dragon kowtowed to show how grateful he was for having his life spared, and he obediently did what the Bodhisattva told him to. She took him to a deep ravine, where he was to wait until the pilgrim came. When that happened he was to turn into a white horse and achieve merit by going to the Western Heaven. On receiving his orders the young dragon hid himself. 
The Bodhisattva led Moksa the Novice across this mountain, and they hurried on towards the East. Before they had gone much further they suddenly saw ten thousand beams of golden light and a thousand wisps of propitious vapour. 
"Teacher," said Moksa, "the place where all the light is coming from is the Five Elements Mountain, where the Tathagata's restriction order is posted." 
"This must be cause that Great Sage Equaling Heaven who wrecked the Peach Banquet and threw the Heavenly Palace into chaos is imprisoned there." 
"That's right," Moksa replied, and teacher and pupil climbed the mountain together to look at the paper. On it were written the true words Om mani padme bum, and when the Bodhisattva saw them she sighed deeply and composed a poem that went: 
"Pity the evil monkey who did not obey the lord 
In his arrogance he showed off his valour in the old days, 
In his folly he wrecked the Peach Banquet, 
And he had the effrontery to sin in the Tushita Palace. 
In the army of a hundred thousand there was none to match him; His might was felt above the ninefold heavens. 
But now he has been caught by our Tathagata, the Buddha: 
Will he ever be able to unleash his talents and win more glory?" 
The conversation between teacher and disciple had disturbed the Great Sage, who shouted from under the roots of the mountain, "Who's that up there?" When she heard this the Bodhisattva hurried down the mountain to visit him. At the foot of the mountainside the local gods, the mountain gods and the heavenly generals who were guarding the Great Sage all bowed to the Bodhisattva in greeting and took her to the Great Sage. She saw that he was pressed down inside a stone box, so that he could speak but could not move his body. 
"Monkey," the Bodhisattva said, "do you know who I am?" The Great Sage opened wide his fiery eyes with their golden pupils, nodded his head and shouted at the top of his voice, "Of course I recognize you. You, thank goodness, are the All−Compassionate. All−Merciful Deliverer from Suffering, the Bodhisattva Guanyin from Potaraka Island in the Southern Sea. You're a very welcome visitor. Every day here seems like a year, and nobody I know has ever come to see me. Where have you come from?" 
"I have received a mandate from the Buddha to go to the East and find the man who will fetch the scriptures," 
she replied, "and as I was passing this way I decided to come over and see you." 
"The Buddha fooled me and crushed me under this mountain−−I haven't been able to stretch myself for five hundred years. I desperately hope that you will be obliging enough to rescue me, Bodhisattva." 
"You wretch," she replied, "you have such an appalling criminal record that I'm afraid you'd only make more trouble if I got you out." 
"I have already repented," he said, "and hope that you will show me the road I should follow. I want to cultivate my conduct." Indeed: 
When an idea is born in a man's mind 
It is known throughout Heaven and Earth. 
If good and evil are not rewarded and punished 
The world is bound to go to the bad. 
The Bodhisattva was delighted to hear what he had to say. 
"The sacred scriptures say," she replied, '"If one's words are good, they will meet with a response from even a thousand miles away; if they are bad, they will be opposed from the same distance.' If this is your state of mind, then wait while I go to the East to find the man who will fetch the scriptures; I'll tell him to rescue you. 
You can be his disciple, observe and uphold the faith, enter our Buddha's religion, and cultivate good retribution for yourself in the future. What do you say to that?" 
"I'll go, I'll go," the Great Sage repeated over and over again. 
"As you have reformed," she said, "I'll give you a Buddhist name." 
"I've already got a name. It's Sun Wukong." The Bodhisattva, very pleased, said, "I made two converts earlier, and their names both contained Wu ('Awakened'). There's no need to give you any further instructions, so I'll be off." The Great Sage, now aware of his own Buddha−nature, was converted to the Buddha's religion; and the Bodhisattva devotedly continued her search for a saintly monk. 
After leaving that place she and Huian carried straight on to the East, and before long they reached Chang'an, the capital of the Great Tang. Putting away their mists and clouds, teacher and pupil turned themselves into a pair of scabby itinerant monks and went inside the city of Chang'an. It was already dark, and beside the great market street they saw a shrine to a local tutelary god and went in. The local god was thrown into confusion at the sight of them, and the devil soldiers quaked with terror; they knew that she was a Bodhisattva, and kowtowed to her in greeting. The local god then scurried off to tell the City God, the Lord of the Alter, and the gods of all the other shrines in Chang'an. When they knew that the Bodhisattva had come they all went to report to her and said, "Bodhisattva, please forgive us for our crime in being late to welcome you." 
"You mustn't let a whisper of this get out," she said. "I have come here on a decree from the Buddha to find someone to fetch the scriptures. I shall be borrowing your temple for a few days while I find this true monk, and then I shall go back." All the gods returned to their own shrines, and they took the local god to stay in the temple of the City God. Teacher and disciple disguised their true appearances. 
If you don't know whom they found to fetch the scriptures, listen to the explanation in the next installment. 

`,
    },
  ],
  [
    9,
    {
      title: `Chapter 9: Chen Guangrui Comes to Grief on His Way to His Post 
The Monk of the River Current Avenges His Parents `,
      createdAt: new Date(),
      content: `<ChapterStart>
Chapter 9: Chen Guangrui Comes to Grief on His Way to His Post 
The Monk of the River Current Avenges His Parents 

The story goes on to tell that Chang'an city in the great land of Shaanxi had been a place where emperors and kings had made their capitals for generation after generation. Ever since the Zhou, Qin and Han dynasties, the Three Prefectures had been as rich as brocade, and the eight rivers had flowed round its walls. It was indeed a famous country. At that time Emperor Taizong of the Great Tang was on the throne. He had changed the name of the reign−period to Zhenguan, and had been reigning for thirteen years. The year was ji si and the world was at peace; tribute was being sent in from the eight directions, and all within the four seas acknowledged themselves as subjects. 
One day Taizong took his seat on the throne and assembled all his military and civilian officials. When they had finished making their greetings, the minister Wei Zheng came forward from the ranks of officials and memorialized, "As the world is now at peace and the eight directions are calm, an examination should be held in accordance with the practice of the ancients. Thus we could recruit wise scholars and select men of talent to help with our civilizing mission." 
"The suggestion of our wise minister is right," said the Emperor, and notices inviting worthy men to compete in the examinations were posted throughout the empire. All the Confucian scholars on the civil or military rolls in every prefecture, district and county who had distinguished themselves in the three−stage examinations for their understanding of literature were to go to Chang'an for a final test. 
When this notice reached the district of Haizhou it was seen by a man called Chen E, whose courtesy name was Guangrui. He returned home and said to Madame Zhang, his mother, "The court has issued a yellow notice saying that the Chancellery will be opened for an examination to select men of wisdom and talent. 
Your child wants to go and take part. If I am given an official post it will bring me fame and make our family illustrious; my wife will be given a title, my sons will be given preferential treatment; and it will bring glory to our house. Such is my ambition; and I have come to tell you, mother, that I am going." 
"You are a scholar, my son," his mother replied, "and it is right that 'one who studies when young should travel when grown up'. But do take care on the journey to the examinations, and if you are given office, come back home as soon as you can." Chen Guangrui then ordered his servants to get his luggage together, took his leave of his mother, and started off on his journey. When he reached Chang'an the examination grounds were open and he went in. Having been successful in this examination, he went to the palace for the three questions test. The Tang Emperor personally awarded him the first place, and he was paraded round the streets on horseback for three days. 
It happened that just when the procession was passing the gateway of the minister Yin Kaishan, the minister's unmarried daughter Wenqiao, whose other name was Man−tang−qiao (Beauty Throughout the Hall), was making decorations for the house and throwing an embroidered ball to see who her future husband would be. 
When Chen Guangrui passed below she saw at once that he was exceptionally handsome, and she knew that he had come first in the recent examinations. She was thoroughly taken with him, and when she dropped her embroidered ball it landed squarely on his black hat. To the sound of pipes and flutes a dozen or so maidservants and serving women hurried downstairs to take hold of the head of Chen Guangrui's horse and invite him into the minister's mansion to marry his daughter. The minister and his wife came into the main hall, and when they had called for a master of ceremonies they married their daughter to Guangrui. When bride and groom had bowed to Heaven, Earth and each other they both bowed to the bride's father and mother. 
The minister ordered a banquet, and there was a night of drinking and celebration. The bride and groom went hand in hand into the bridal chamber. 
At the third quarter of the fifth watch the next morning Emperor Taizong took his throne in the Golden Chariot Hall, and the civil and military officials came to court. 
"What office should Chen Guangrui who came top in the examinations be given?" the Emperor asked, and the minister Wei Zheng replied, "Your subject has gone through the list of the prefectures and commanderies, and found that the district of Jiangzhou needs a prefect. I beg Your Majesty to give him this office." The Emperor therefore appointed him prefect of Jiangzhou and ordered him to pack his belongings and set off as he had to be there by a set date. Chen Guangrui thanked the Emperor for his grace and withdrew. He went back to the minister's mansion and consulted his wife, then he took his leave of his parents−in−law and set off together with her for his post in Jiangzhou. 
It was late spring as they left Chang'an at the start of their journey. Warm breezes were coaxing the willows into green, and light rain was touching the blossoms with red. Chen Guangrui was able to call at his own home on the way, so he and his bride could pay their respects to his mother, Madame Zhang. 
"Congratulations, my son," she said. "And you have brought a bride back with you too." 
"Thanks to my mother's blessings, your son was placed first in the examinations," he replied, "and given a parade through the streets on His Majesty's orders. As I was passing the gateway of minister Yin's residence, I happened to be hit by an embroidered ball, and the minister was kind enough to give me his daughter's hand. 
The court has appointed me prefect of Jiangzhou, so I have come to fetch you, mother, and take you with me to my post." Madame Zhang was overjoyed, and she packed her luggage and traveled with them. 
One night, after they had been on the road for several days, they put up at the Liu the Second's Ten Thousand Flowers Inn, where Madame Zhang was suddenly taken ill. 
"As I'm not feeling well," she said to her son, "I'd better stay in this inn for a couple of days to get over it before going on." Chen Guangrui accepted her suggestion. The next morning he saw a man selling a golden−coloured carp in front of the inn and brought it from him for a string of copper coins, intending to have it lightly fried for his mother. Then he noticed it blinking. 
"It's said that if a fish or a snake blinks it is no ordinary creature," he thought. He asked the fisherman where he had caught it. 
"In the Hongjiang River, five miles from the prefectural capital," the fisherman replied. Chen Guangrui had the fish taken back to the Hongjiang River to be released there, then went back to the inn to tell his mother about what had happened. 
"It is good to release living things," his mother said, "and I am very pleased." Then Chen Guangrui said, "We have been at this inn for three days, and the time limit set for me is a tight one, so I must be on my way tomorrow morning. Are you well enough yet, mother?" 
"I'm still poorly," his mother replied, "and it's so hot to travel now that I'm afraid it might make me seriously ill. You had better take a couple of rooms for me and leave me some money; I'll stay here for the time being. 
You two can go on ahead to your post. Come back to fetch me in the autumn when it's cooler." Having discussed it with his wife he rented a wing for her and gave her some money, then they took their leave of her and set off. 
It was a hard journey, setting off every day at dawn and not stopping till nightfall, and before they realized it they reached the ford over the Hongjiang Estuary. They saw two boatmen, Liu Hong and Li Biao, punt their ferry to the bank for them. This was the disaster, these were the enemies, that Chen Guangrui had been fated to meet ever since before he was born. He told his servant to put the luggage on board, while he and his wife climbed sedately into the boat. Liu Hong stared at Miss Yin, and saw that her face was like a full moon, her eyes like autumn waves, her tiny mouth like a cherry, and her waist as supple as a willow; her charms would have made fishes sink and wild geese fall from the sky, and her beauty put moon and flowers to shame. Evil thoughts surged up in him, and he conspired with Li Biao to punt the boat to a misty and deserted place and wait till the middle of the night, when they killed first the servant and then Chen Guangrui. They pushed both the corpses into the river and went away. 
When the young lady saw her husband killed she tried to fling herself into the water, but Liu Hong put his arms round her and said, "If you come with me, you'll be all right; but if you don't, I'll cut you in half." Unable to think of any other way out, the young lady had to agree to stay with Liu Hong for the time being at least. 
The murderer took the boat across to the Southern bank and gave it to Li Biao. Then he dressed up in Chen Guangrui's clothes and, armed with the dead man's credentials, went with the young lady to take up his post in Jiangzhou. 
The corpse of the murdered servant floated with the current, but Chen Guangrui's body sank straight to the bottom and did not move. A patrolling yaksha demon stationed at the Hongjiang Estuary saw him and rushed straight back to the dragon palace to report. He arrived just as the dragon king was entering the throne−hall. 
"Someone has murdered a learned gentleman at the Hongjiang Estuary, and thrown the body into the bed of the river," he reported. The dragon king had the body brought in and laid in front of him. After examining it carefully he said, "This is the benefactor who saved my life: why has he been murdered? As the saying goes, 
'Always repay a kindness'. I must save his life today to repay him for the favour he did me in the past." He wrote a memorandum and sent a yaksha with it to the city god and local god of Hongzhou asking for the scholar's soul so that he could save his life. The city god and the local god told a junior devil to give Chen Guangrui's soul to the yaksha, who took it back to the palace of crystal and reported to the dragon king. 
"What is your name, scholar?" asked the dragon king. "Where are you from? What brought you here, and why were you killed?" 
Chen Guangrui bowed to him and replied, "My name is Chen E and my courtesy name is Guangrui. I come from Hongnong County in Haizhou Prefecture. I was given first place in the recent examinations, and was on my way with my wife to take up my post as prefect of Jiangzhou when we boarded a ferry at the bank of this river. The boatman Liu Hong lusted after my wife, so he killed me and threw me overboard. I beg you to save me, Your Majesty." 
"So that's how things stand," said the dragon king. "I am the golden carp you released. You saved me then, so I must help you now that you are in trouble." He had Guangrui's body placed beside a wall and put a "Face Preserving Pearl" in its mouth to stop it from decomposing so that the soul could be returned to it in future for him to obtain his revenge. "As you are now a true soul, you shall stay in my palace for the time being as a commander," the dragon king added. Chen Guangrui kowtowed in thanks, and the dragon king gave a banquet to welcome him. 
Miss Yin's hatred for the villainous Liu Hong was such that she wished she could eat his flesh and spread his flayed hide on her bed, but as she was pregnant and the child had not yet been born she had to force herself to go with him. In the twinkling of an eye they reached Jiangzhou. The clerks and constables all turned out to welcome him, and the subordinate officials in the prefecture gave a banquet for him in the main hall of his office. 
"Now that I, your student, have come here, I shall be entirely dependent on the support of all you gentlemen," 
"Your honour is a great genius," the officials replied, "and you will naturally treat the people as your own children, thus cutting down litigation and making punishment unnecessary. We will all be able to rely on you−−your excessive modesty is uncalled for." When the banquet was over they all went away. 
Time flew by. One day, when Liu Hong was far away on official business, the young lady was in a summerhouse in the official residence sighing sadly as she thought of her mother−in−law and her husband. 
Suddenly she felt weak and her belly started to ache. She fell to the ground unconscious, and before she knew it she gave birth to a son. She heard a voice in her ear saying, "Man−tang−qiao, you must do as I tell you. I am the Lord of the Southern Pole Star, and I have come to give you this son on the orders of the Bodhisattva Guanyin. One day he will be extraordinarily famous. When the villainous Liu comes back he will certainly want to kill this boy, so you must look after him with great care. Your husband has been rescued by the dragon king; one day you will be reunited with him and your son, and your sufferings will be at an end. 
Remember my words. Wake up, wake up!" 
When the young lady came to she remembered every word he had spoken, but as she wrapped the baby tight in swaddling clothes, she could not think what to do. When Liu Hong came back he wanted to drown the child the moment he saw him, but the young lady said, "It's already dark: we can throw him in the river tomorrow." 
Fortunately Liu Hong had to go a long way away on urgent business the next day. 
"If I wait till that villain returns my son will be killed," thought the young lady, "so the best thing would be to abandon him in the river as soon as possible and let fate determine whether he is to live or do die. If Heaven is merciful someone will rescue the boy and bring him up, and we shall be reunited one day." Then, worrying that she might not be able to recognize him, she bit open her finger and wrote a letter in blood giving a full account of his parentage and background. Then she bit off the little toe of the child's left foot to be an identifying mark, wrapped him up in one of her own shifts, and carried him out of the official residence when nobody was looking. Luckily the residence was not far from the river bank. When she reached it she wept for a while and was just going to throw him in when she noticed a board floating beside the bank. The young lady bowed to Heaven in her gratitude and tied the child to the board with her sash, placing the blood letter next to his chest. Then she pushed him out into the stream to go where he would and returned to the yamen in tears. 
The boy floated downstream on the plank until he came to a stop under the Jinshan Temple. The abbot of this temple was a monk called Faming who by cultivating the Truth and being awakened to the Way had found the secret of avoiding rebirth. As he was sitting at his meditation he heard a baby crying, and he hurried anxiously down to the riverside to look. He saw a baby lying on a board beside the bank, and got him out of the water as quickly as he could. When he read the letter written in blood that was on the baby's chest he knew why he was there. He gave the child the milk−name Jiangliu, "River Current," and arranged for him to be fostered. The letter in blood he put away in a very safe place. Time passed like an arrow, and the days and months moved as fast as a shuttle. When Jiangliu reached the age of seventeen the abbot told him to have his head tonsured and enter the religious life. Giving him the Buddhist name Xuanzang he laid his hands upon his head and instructed him to observe the monastic discipline. Xuanzang was determined to cultivate the Way. 
One day in late spring the whole community gathered under the shade of some pine trees to expound the scriptures, meditate and discuss the inner mysteries. A bibulous, meat−eating monk who had been confounded in a disputation by Xuanzang lost his temper and started to abuse him: "You animal, you don't know your own surname or who your parents were. Don't try any of your clever tricks here." Stung by this abuse, Xuanzang went into the temple and knelt before his teacher with tears streaming from his eyes. 
"All men who are born between Heaven and Earth, and who are endowed with the Positive, the Negative, and the Five Elements−−all are begotten by a father and reared by a mother," he said. "How can there be any man alive who never had father and mother?" He begged over and over again to know his parents' names. 
"If you really wish to find out about your father and mother, come with me into my cell," said the abbot, and they went there together. The abbot lifted down a little box from on top of a massive beam, opened it, took out a letter written in blood and a shift, and gave them to Xuanzang, who unfolded the letter and read it. At last he learned about his parents and the wrongs they had suffered. 
When he had read it he collapsed, weeping and crying out, "How can I be a man if I don't avenge my father and mother? For seventeen years I haven't known my own parents, but now I know that I have a mother. I would not be alive today, teacher, had you not rescued me and brought me up. Please allow me to go and see my mother, then I will put an incense−burner on my head and rebuild the temple to repay the great kindness you have shown me." 
"If you want to go and look for your mother you had better take the letter written in blood and the shift with you. If you go to the private residence of the prefect of Jiangzhou you will be able to see your mother." 
Xuanzang did as his teacher had said and went to Jiangzhou as a mendicant monk. It happened that Liu Hong was away on business, and as Heaven had arranged for mother and son to meet, Xuanzang went straight to the gateway of the residence to beg for alms. Miss Yin had dreamt the previous night of the moon being eclipsed and then coming back to its full roundness. 
"I have never heard from my mother−in−law," she thought, "and my husband was murdered by that evil man. 
My son was abandoned on the river, and if he was rescued and brought up, he would be seventeen now. Who knows, perhaps Heaven is going to make us meet today." As she was deep in her reflections she heard someone chanting scriptures and calling for alms in front of her home, so she thought she would go out and ask him where he had come from, and he replied, "I am a disciple of Abbot Faming of the Jinshan Temple." 
"A disciple of Abbot Faming of the Jinshan Temple, are you?" she said. She asked him in and gave him a vegetarian meal while observing closely the way he moved and talked. 
He seemed very much like her husband, so she sent the servants away and asked, "Tell me, young teacher, have you been a monk since childhood or did you become one later in life? What is your name? Do you have a mother and father?" 
"I did not become a monk when I was a child nor when I was older," he replied. "I must tell you that I bear a hatred as deep as the sea because of a terrible wrong. My father was murdered and my mother carried off by an evil man. The Abbot Faming, my teacher, told me to come and find my mother in the residence of the prefect of Jiangzhou." 
"What is your mother's name?" she asked. 
"My mother's name is Yin Wenqiao," he replied. "My father was called Chen Guangrui. My milk−name was Jiangliu, and my Buddhist name is Xuanzang." 
"I am Yin Wenqiao," she said, then added, "Have you any proof?" When he learned that she was his mother, Xuanzang fell to his knees and wept aloud. 
"Mother," he said, "if you don't believe me, then look at this evidence−−the blood letter and the shift." As soon as she saw that they were the real ones, she and her son embraced each other and wept. 
Then she said, "Go away at once." 
"I can't possibly leave you, mother, on the very day I've seen you after seventeen years of not even knowing who my parents were," he said. 
"My child, you must go away as fast as you can," she replied. "The evil Liu will certainly kill you if he comes back. Tomorrow I'll pretend to be ill and say that I once made a vow to donate a hundred pairs of monks' 
shoes. I'll come to your temple to fulfil the vow, and I'll talk to you then." Xuanzang obediently bowed to her and left. 
Now that she had seen her son Miss Yin was both anxious and happy. One day she said that she was ill, and she lay in her bed refusing food and tea. When Liu Hong came back and asked what was the matter she said, 
"When I was young I once vowed that I would donate a hundred pairs of monks' shoes. Five days ago I dreamt that a monk came with a sharp sword in his hand to demand the shoes, and since then I haven't been feeling well." 
"That's easily done," said Liu Hong. "Why didn't you mention it before?" He took his place in the official hall and gave instructions to yamen assistants Wang and Li that every household living in the city of Jiangzhou was to make a pair of monk's shoes and hand them in within five days. 
When the common people had handed all the shoes in, Miss Yin said to Liu Hong, "Now that the shoes have been made, what temples are there here to which I can take them to fulfil my vow?" 
"In Jiangzhou we have the Jinshan Temple and the Jiaoshan Temple; you can go to whichever of them you prefer," replied Liu Hong. 
"I've long heard that the Jinshan Temple is a good one, so I'll go there," she said. Liu Hong told the yamen assistants Wang and Li to arrange a boat. Miss Yin went aboard with a trusted servant, the boatman pushed off, and they headed for the Jinshan Temple. 
On his return to the temple Xuanzang gave Abbot Faming a full account of what had happened. The abbot was delighted. The next day a maid arrived at the temple to say that her mistress was coining to repay a vow, and all the monks came out to welcome her. When Miss Yin came into the temple she prayed to the Bodhisattva, offered a rich meal to the monks with a donation of money to each of them, and told her maid to put the shoes and the summer socks into the offertory tray. She then went into the Buddha−hall and worshipped with great devotion. When she told him to, Abbot Faming went away to distribute the gifts to the monks. Xuanzang saw that all the other monks had gone and that there was nobody else in the Buddha−hall, so he went up to his mother and knelt down. She told him to take off his shoes and socks and saw that one toe was indeed missing from his left foot. The pair of them hugged each other and cried again, then they bowed to the abbot to thank him for his kindness in bringing the boy up. 
"I'm worried that the villain may get to know of your reunion," said the abbot, "so you had better go back as quickly as you can to avoid trouble." 
"My son," said Miss Yin, "I shall give you a sandalwood bracelet. You must go to a place called the Ten Thousand Flowers Inn to the Northwest of Hongzhou, which is about five hundred miles from here, where we left Madame Zhang, your paternal grandmother. I shall also write you a letter that you must take to the house of the minister Yin Kaishan which lies to the left of the palace inside the capital city of the Tang Emperor. He is my father. Give him this letter and ask him to submit a memorial to the Tang Emperor asking him to send horse and foot to capture or kill that bandit. Then your father will be avenged and your mother will be rescued. I must stay no longer as I am afraid that evil man may be suspicious if I am late back." She left the temple and went back in her boat. 
Xuanzang returned to the temple in tears and told the abbot that he was leaving at once for Hongzhou. When he reached the Ten Thousand Flowers Inn he said to the innkeeper Liu the Second, "How is the mother of Prefect Chen of Jiangzhou who is staying in your inn?" 
"She used to stay here," replied the innkeeper. "She went blind, and as she didn't pay any rent for three or four years, she now lives in a ruined tile−kiln near the Southern gate and begs in the streets every day to keep herself alive. That official went away a very long time ago and she hasn't heard from him to this day, though I don't know why." On learning this he asked the way to the ruined tile−kiln at the Southern gate and found his grandmother. 
"You sound like my son Chen Guangrui," said his grandmother. 
"I'm not Chen Guangrui, I'm his son. My mother is Miss Yin Wenqiao." 
"Why have your father and mother not come?" she asked; and he replied, "My father was murdered by a brigand and my mother was forced to become his wife. I have a letter here and a sandalwood bracelet from my mother." His grandmother took the letter and the bracelet, and sobbed aloud. "My son came here for the sake of fame and glory. I thought that he had forgotten all feelings of decency and gratitude; it never occurred to me that he might have been murdered. What a blessing that Heaven in its mercy did not cut short my son's line, so that I now have a grandson to come and find me." 
"How did you go blind, granny?" asked Xuanzang. 
"I was always thinking of your father and longing for him to come back every day," she said, "but as he never did I wept so much that! lost the sight of both my eyes." Xuanzang fell to his knees and prayed to Heaven. 
"Although I am seventeen," he said, "I have been unable to avenge my parents. Today I have come on my mother's orders and found my grandmother; if Heaven is at all moved by my sincerity, may my granny's eyes see again." When he had prayed, he licked her eyes with the tip of his tongue. The licking soon opened them, and they could see once more. 
His grandmother looked at the little monk with a mixture of joy and sadness and said, "You really are my grandson−−you're the very image of my son Guangrui." Xuanzang took her out of the kiln and reinstalled her in Liu the Second's inn, where he rented a room for her, gave her some money to live on, and told her that he would be back within a month. 
Taking his leave of his grandmother, he went straight on to the capital, where he found Minister Yin's house in the Eastern Avenue of the imperial city. "I am a relation of the minister's," he said to the gate−keeper, "and I would like to see him." 
When the gate−keeper reported this to the minister, he said, "I am no relation of any monk." But his wife said, 
"I had a dream last night that our daughter Man−tang−qiao came home; perhaps he has a letter from our son−in−law." 
The minister had the young monk brought into the main hall, and when the monk saw the minister and his wife he wept and bowed to the floor before them, then took an envelope out of his bosom and handed it to the minister. The minister opened the letter and read it through, then wailed aloud. 
"What's the matter, my lord?" asked his wife, and the minister replied, "This monk is our grandson. Our son−in−law Chen Guangrui was murdered by a brigand, who forced Man−tang−qiao to become his wife." His wife too began to weep bitterly when she heard this news. 
"Try not to upset yourself, wife," said the minister. "I shall ask our sovereign at court tomorrow morning to be allowed to lead an army myself. I shall certainly avenge our son−in−law." 
The minister went to court the next day and wrote in a memorial to the Tang Emperor: "Your subject's son−in−law, the top graduate Chen Guangrui, was murdered by the boatman Liu Hong while going with his family to take up his office in Jiangzhou, and my daughter was forced to become his wife. This Liu Hong has usurped office for many years by masquerading as my son−in−law. This constitutes treason. I beg Your Majesty to dispatch horse and foot at once to destroy this rebellious brigand." 
The Tang Emperor was so angry when he read this that he ordered Minister Yin to set off at the head of sixty thousand men of the Imperial Guard. The minister left the court with the decree and went to the parade ground to muster the soldiers before setting out for Jiangzhou. By setting out at dawn every day and not stopping till night, they traveled as fast as a shooting star or a flying bird, and before they realized it they had reached Jiangzhou, where Minister Yin's army camped on the Northern bank. That night he sent a messenger with a gold−inscribed tablet to summon the deputy prefect and district judge of Jiangzhou. Minister Tin explained the situation to them and told them to call out their troops to help him. They crossed the river together, and surrounded Liu Hong's yamen before dawn. Liu Hong, who was still in his dreams, heard the sound of cannon and the beating of drums and gongs; when the soldiers rushed his residence he was helpless and soon captured. The minister ordered that Liu Hong and his gang should be tied up and taken to the execution ground, while the army was to encamp outside the city walls. 
The minister went into the main hall of the yamen and asked his daughter to come out and see him. His daughter, who had been longing to go out, felt too ashamed to face her father and so was on the point of hanging herself. 
When Xuanzang learned of this he went as fast as he could to save her, fell on his knees, and said, "Your son and my grandfather have come here with an army to avenge my father. That brigand has been arrested, so there is no need at all for you to kill yourself. If you die mother, I won't be able to stay alive." The minister too came into the residence to talk her out of it. 
"They say that a woman should only have one husband in her life," she said to them. "I was bitterly grieved at the death of my husband at that brigand's hands, and could not bear the disgrace of marrying his murderer; but as I was carrying my husband's child I had to swallow the shame of staying alive. Now, thank goodness, my son has grown up and my father has brought an army to avenge my husband but how could I have the face to see you. The only way I can make up for it to my husband is to kill myself." 
"My child," said the minister, "this was not a case of abandoning morality for the sake of material gain. You acted under duress, and did nothing to be ashamed of." Father and daughter then embraced each other and wept, while Xuanzang sobbed too. "There is no need for the two of you to be so distressed," said the minister, wiping away his tears. "Today I have captured our enemy, that rebel, and now I must deal with him." He got up and went to the execution ground. 
As it happened, the assistant prefect of Jiangzhou had sent constables to arrest the other pirate, Li Biao, and they brought him in. The minister was very pleased, and he ordered that Liu Hong and Li Biao were to be put under a close guard. They were each given a hundred strokes of the heavy pole, and statements were taken from them about how and why they had committed the wicked murder of Chen Guangrui. Then Li Biao was nailed on a wooden donkey and pushed to the market−place, where he was sliced into a thousand pieces, after which his head was hung up on public display. Liu Hong was taken to the Hongjiang Estuary where he had murdered Chen Guangrui. The minister, his daughter and Xuanzang went to the riverside, where they made offerings and libations to the emptiness and cut out Liu Hong's heart and liver while he was still alive to sacrifice to Chen Guangrui. They also burnt a funerary address. 
The bitter lamentations of the three of them startled the underwater palace. A patrolling yaksha demon handed the funerary address to the dragon king. When he had read it, the dragon king sent Marshal Turtle to ask Chen Guangrui to come and see him. 
"Congratulations, sir, congratulations," said the dragon king. "Your lady, your son and your father−in−law are all sacrificing to you on the bank. I shall now return your soul to you and give you an As−You−Will pearl, two rolling pearls, ten pieces of mermaid silk, and a belt of jade studded with pearls. Today you will be reunited with you wife, your son and your mother." Chen Guangrui bowed to him over and over again to express his gratitude. The dragon king then told a yaksha to take Chen Guangrui's body out to the estuary, where he was to return the soul to it; and the yaksha obediently went off. 
When she had wailed for her husband and sacrificed to him, Miss Tin tried to jump into the water to drown herself, but with a desperate effort Xuanzang managed to keep hold of her. Just at this tense moment they saw a corpse floating towards the bank. Miss Yin, rushing forward to see who it was, recognized it as that of her husband and started a great wailing. Everyone else had now come up to look, and they saw Chen Guangrui open his fist and stretch his foot as his body gradually began to move. Suddenly he sat up, to their great astonishment. He opened his eyes, and the first thing he saw was his wife, his father−in−law and the young monk all weeping beside him. 
"What are you all doing here?" he asked. 
"After you were killed I gave birth to this son," replied his wife, "and by a piece of good fortune he was brought up by the abbot of the Jinshan Temple. When he came to find me I sent him to see my father; and when my father knew what had happened he submitted a memorial at court and brought an army here to arrest your murderer, whose heart and liver we have just plucked from his living body to sacrifice to you. But how is it that your soul has been returned to you, husband?" 
"It is all because we bought and released that golden carp when we were staying at the Ten Thousand Flowers Inn: the carp, it turned out, was the local dragon king. When that treasonous murderer pushed me into the water I was rescued by the dragon king, who has given me back my soul and presented me with all the treasures I have on me. I never had any idea that you had borne this son, or that my father−in−law had avenged me. Our sorrows are now at an end. This is a very happy moment indeed." 
When the other officials heard what had happened they all came to offer their congratulations, and the minister gave a banquet to thank all his subordinates. The army set off on its return journey that same day. 
When they reached the Ten Thousand Flowers Inn the minister ordered them to encamp while Guangrui and Xuanzang went to the inn to find the old lady. The night before she had dreamt of a withered tree blossoming again while magpies made a clamorous din behind the building. 
"Perhaps my grandson has come," she thought, and while the words were still in her mind she saw Guangrui and his son at the gate of the inn. 
"Isn't this my grandmother?" said the little monk; and the moment Guangrui saw his aged mother he kowtowed to her. Mother and son embraced in tears; then he told her all about what had happened. The innkeeper's account was presented and settled, and then they set off for the capital. When they reached the minister's residence, Guangrui, his wife, his mother and Xuanzang all went in to see the minister's wife, who was overcome with joy and told the servants to lay on a large banquet to celebrate. 
"We can call today's banquet a 'reunion banquet,'" said the minister, and the whole household was indeed happy. 
When the Tang Emperor entered the throne hall early the next morning, Minister Yin stepped forward and submitted a memorial giving a detailed account of what had happened, and recommending Chen Guangrui as a man whose talents could be put to great use. The Tang Emperor approved the memorial and ordered that Chen Guangrui should be appointed a Scholar in order to take part in administration at court. As Xuanzang had decided to follow the contemplative life he was sent to cultivate his conduct in the Hongfu Temple. Later on Miss Yin finally ended her life in a quiet and honorable way, and Xuanzang went back to the Jinshan Temple to report to Abbot Faming. 
If you don't know what happened afterwards, listen to the explanation in the next installment. 

`,
    },
  ],
  [
    10,
    {
      title: `Chapter 10: With a Stupid Plan the Dragon King Breaks the Laws of Heaven 
Minister Wei Sends a Letter to an Officer of Hell `,
      createdAt: new Date(),
      content: `<ChapterStart>
Chapter 10: With a Stupid Plan the Dragon King Breaks the Laws of Heaven 
Minister Wei Sends a Letter to an Officer of Hell 

We shall not discuss how Chen Guangrui performed his duties or Xuanzang cultivated his conduct; instead we shall talk about two wise men who lived beside the banks of the River Jing outside the city of Chang'an. One was an old fisherman called Zhang Shao and the other was a woodcutter called Li Ding. They were both advanced scholars who had never taken the official examination, lettered men of the mountains. One day, when Li Ding had sold his load of firewood and Zhang Shao had sold his basketful of carp in Chang'an city, they went into a tavern, drank till they were half tipsy, and strolled slowly home along the banks of the Jing, each holding a bottle in his hand. 
"Brother Li," said Zhang Shao, "it seems to me that people who struggle for fame kill themselves for it; those who compete for profit die for it; those who accept honors sleep with a tiger in their arms; and those who receive imperial favours walk around with snakes in their sleeves. Taking all in all, we are much better off living free among our clear waters and blue hills: we delight in our poverty and follow our destinies." 
"You are right, Brother Zhang," said Li Ding, "but your clear waters have nothing on my blue hills." 
"Your blue hills are not a patch on my clear waters," retorted Zhang Shao, "and here is a lyric to the tune of The Butterfly Loves the Flowers to prove it: 
The skiff is tiny amid the misty expanse of waves; 
Calmly I lean against the single sail, 
Listening to the voice of Xishi the beauty. 
My thoughts and mind are cleared; I have no wealth or fame 
As I toy with the waterweed and the rushes. 
"To count a few gulls makes the journey happy. 
In the reedy bend, under the willow bank, 
My wife and children smile with me. 
The moment I fall asleep, wind and waves are quiet; 
No glory, no disgrace, and not a single worry." 
"Your clear waters are no match for my blue hills," said Li Ding, "and there is another lyric to the same tune to prove it. It goes: 
The cloudy woods are covered with pine blossom. 
Hush! Hear the oriole sing, 
As if it played a pipe with its cunning tongue. 
With touches of red and ample green the spring is warm; 
Suddenly the summer's here as the seasons turn. 
"When autumn comes the look of things is changed; 
The scented chrysanthemum 
Is enough for my pleasure. 
Soon the cruel winter plucks all off. 
I am free through four seasons, at nobody's beck and call." 
"You don't enjoy the good things in your blue hills that I do on my clear waters," replied the fisherman, "and I can prove it with another lyric to the tune of The Partridge Heaven: In this magic land we live off the cloudy waters; 
With a sweep of the oar the boat becomes a home. 
We cut open the live fish and fry the green turtle 
As steam coils from the purple crab and the red shrimps bubble. 
Better still, water chestnuts and the gorgon fruit, 
Delicate louts roots and seeds, tender celery, 
Arrowhead, reed−hearts and bird−glory blossom." 
"Your clear waters cannot compare with my blue hills when it comes to the good things they provide," said the woodcutter, and I can cite another lyric to the tune The Partridge Heaven as evidence: Mighty crags and towering peaks reach to the sky; 
A grass hut or a thatched cottage is my home. 
Pickled chicken and duck are better than turtles or crabs, 
Roebuck, boar, venison, and hare beat fish and shrimps. 
The leaves of the tree of heaven, 
Yellow chinaberry sprouts, 
And, even better, bamboo shoots and wild tea, 
Purple plums and red peaches, ripe gages, and apricots, 
Sweet pears, sharp jujubes, and osmanthus blossom." 
"Your blue hills are really nothing on my clear waters," replied the fisherman, "and there is another lyric to the tune Heavenly Immortal: 
In my little boat I can stay where I like, 
Having no fear of the many misty waves. 
Drop the hook, cast wide the net, to catch fresh fish: 
Even without fat or sauce, 
As the whole family eats its meal together. 
"When there are fish to spare I sell them in Chang'an market To buy good liquor and get a little drunk. 
Covered with my grass cloak I sleep on the autumn river, 
Not giving a damn for honour and glory." 
"Your clear waters still aren't as good as my blue mountains," came back the woodcutter, "and I too have a Heavenly Immortal lyric to prove it: 
Where I build a little thatched hut under the hill 
The bamboo, orchid, plum, and pine are wonderful. 
As I cross forests and mountains to look for dry firewood 
Nobody asks awkward questions, 
As much or as little as the world wants. 
I spend the money on wine and I'm happy, 
Content with my earthenware bowl and china jug. 
When I've drunk myself blotto I lie in the shade of the pine. 
What do I care about success or failure?" 
"Brother Li," said the fisherman, "you don't make as easy a living in the hills as I do on the water, and I can prove it with a lyric to the tune The Moon on the West River: The smartweed's flowers are picked out by the moon 
While the tangled leaves of rushes sway in the wind. 
Clear and distant the azure sky, empty the Chu river: 
Stir up the water, and the stars dance. 
Big fish swim into the net in shoals; 
Little ones swallow the hooks in swarms; 
Boiled or fried they taste wonderful−− 
I laugh at the roaring river and lake." 
"Brother Zhang," replied the woodcutter, "the living I make in the hills is much easier than yours on the water, and I can prove it with another Moon on the West River lyric: Withered and leafless rattan fills the paths, 
Old bamboo with broken tips covers the hillside. 
Where vines and creepers tangle and climb 
I pull some off to tie my bundles. 
Elms and willows hollow with decay, 
Pines and cedars cracked by the wind−− 
I stack them up against the winter cold, 
And whether they're sold for wine or money is up to me." 
"Although you don't do too badly in your hills, your life is not as elegant as mine on the water," said the fisherman, "as I can show with some lines to the tune The Immortal by the River. 
As the tide turns my solitary boat departs; 
I sing in the night, resting from the oars. 
From under a straw cape the waning moon is peaceful. 
The sleeping gulls are not disturbed 
As the clouds part at the end of the sky. 
Tired, I lie on the isle of rushes with nothing to do, 
And when the sun is high I'm lying there still. 
I arrange everything to suit myself: 
How can the court official compare with my ease 
As he waits in the cold for an audience at dawn?" 
"Your life on the water may be elegant, but it's nothing compared with mine," replied the woodcutter, "and I have some lines to the same tune to demonstrate the point: 
On an autumn day I carry my axe along the greeny path 
Bringing the load back in the cool of evening, 
Putting wild flowers in my hair, just to be different, 
I push aside the clouds to find my way home, 
And the moon is up when I tell them to open the door. 
Rustic wife and innocent son greet me with smiles, 
And I recline on my bed of grass and wooden pillow. 
Steamed millet and pear are spread before me, 
While the new wine is warm in the pot: This is really civilized." 
"All this is about our living and the ways we provide for ourselves," said the fisherman. "I can prove to you that your leisure is nowhere near as good as mine with a poem that goes: Idly I watch the white cranes as they cross the sky; 
As I Moor the boat at the river's bank, a blue door gives me shade. 
Leaning on the sail I teach my son to twist a fishing line, 
When rowing's done I dry the nets out with my wife. 
A settled nature can really know the calm of the waves; 
A still body feels the lightness of the breeze. 
Always to wear a green straw cape and a blue straw hat 
Is better than the purple robes of the court." 
"Your leisure doesn't come up to mine," replied the woodcutter, "as this poem I shall now recite demonstrates: With a lazy eye on the white clouds in the distance, 
I sit alone in a thatched but, then close the bamboo door. 
When there's nothing to do I teach my son to read; 
Sometimes a visitor comes and we play a game of chess. 
When I'm happy I take my stick and walk singing along the paths, Or carry my lute up the emerald hills. 
Grass shoes with hempen thongs, a cloak of coarsest cloth, 
A mind relaxed: better than wearing silk." 
"Li Ding," said the other, "how truly it can be said of us that 'by reciting some verses we become close friends: What need for golden winecups and a sandalwood table?' But there is nothing remarkable in just reciting verses; what would you say if we made couplets in which we each contributed a line about our lives as fisherman and woodcutter?" 
"Brother Zhang," said Li Ding, "that is an excellent suggestion. Please be the one to start." Here are their couplets: 
My boat is moored in the green waters amid the misty waves; 
My home is in the wilds, deep in the mountains. 
How well I like the swollen stream under the bridge in spring; My delight is a mountain peak swathed in clouds at dawn. 
Dragon−sized fresh carp cooked at any time; 
Dry, rotten, firewood always keeps one warm. 
A full array of hooks and nets to support my old age; 
Carrying wood and making twine will keep me till I die. 
Lying back in a tiny boat watching the flying geese; 
Reclining beside the grassy path and hearing the wild swans call. 
I have no stall in the marketplace of tongues; 
I've left no trace in the sea of disputation. 
The nets hung to dry beside the brook are like brocade; 
An axe well honed on rock is sharper than a spear. 
Under the shining autumn moon I often fish alone; 
I meet nobody on the solitary mountain in spring. 
I trade my surplus fish for wine and drink it with my wife; 
When I've wood to spare I buy a bottle and share it with my sons. 
Singing and musing to myself I'm as wild as I care to be; 
Long songs, long sighs, I can let myself be crazy. 
I invite my brothers and cousins and fellow boatmen; 
Leading my friends by the hand I meet the old man of the wilds. 
As we play guess−fingers the cups fly fast; 
When we make riddles the goblets slowly circulate. 
Saute or boiled crab is a delight every morning; 
Plenty of fried duck and chicken cooked in ashes every day. 
As my simple wife brews tea, my spirits are untrammelled; 
While my mountain spouse cooks supper, my mind is at ease. 
At the coming of dawn I wash my stick in the ripples; 
When the sun rises I carry firewood across the road. 
After the rain I put on my cloak to catch live carp; 
I wield my axe before the wind to fell a withered pine. 
I cover my tracks and hide from the world, acting the imbecile; I change my name and pretend to be deaf and dumb. 
"Brother Li," said Zhang Shao. "I unfairly took the first lines just now, so now it's your turn to compose the first lines while I follow you." Thus they continued: 
The man of the mountains acting mad under wind and moon; 
The haughty and unwanted dotard of the river. 
With his share of idleness, and able to be quite free; 
No sound from his voice as he revels in his peace. 
On moonlit nights he sleeps secure in a cottage of thatch; 
He lightly covers himself at dusk with clothes of reed. 
His passion spent, he befriends the pine and the plum; 
He is happy to be the companion of cormorant and gull. 
Fame and profit count for nothing in his mind; 
His ears have never heard the clash of arms. 
One is always pouring out fresh rice−wine, 
The other has wild vegetable soup with every meal. 
One makes a living with two bundles of firewood; 
The other supports himself with rod and line. 
One idly tells his innocent son to sharpen the axe of steel; 
The other quietly bids his slow−witted child to mend the nets. 
In spring one likes to see the willows turning green; 
When the seasons change the other enjoys the rushes' blue. 
Avoiding the summer heat, one trims the new bamboo; 
The other gathers water−chestnuts on cool July evenings. 
When frost begins, plump chickens are killed each day; 
In mid−autumn the crabs are at their best and always in the pot. 
When the sun rises in winter, the one is still asleep; 
The other keeps cool in the dog days of summer. 
Throughout the year one does as he pleases in the hills; 
In all four seasons the other is happy on the lake. 
By gathering firewood you can become an Immortal; 
There is nothing worldly about fishing. 
Sweet smell the wild flowers growing outside my door; 
Smooth are the green waves lapping at my boat. 
A contented man never speaks of high honors; 
A settled nature is stronger than a city wall. 
Higher than a city wall for resisting enemy armies; 
More illustrious than holding high office and listening to imperial decrees. 
Those who are happy with mountains and rivers are few indeed; 
Thank Heaven, thank Earth, and thank the spirits. 
When the two of them had recited their verses and matched couplets they came to the place where their ways parted and bowed to each other to take their leave. "Brother Li," said Zhang Shao, "look after yourself on your way home and keep a sharp look−out for tigers up in the hills. If you met with an accident then 'an old friend would be missing on the road tomorrow.'" This made Li Ding angry. 
"You scoundrel," he said, "I'm your friend; I'd die for you. How could you put such a curse on me? If I'm killed by a tiger, you'll be capsized by a wave." 
"I'll never be capsized!" retorted Zhang Shao. 
"'In nature there are unexpected storms and in life unpredictable vicissitudes,'" quoted Li Ding, "so how can you be sure you'll never have an accident?" 
"Brother Zhang," replied the fisherman, "despite what you just said, it's your life that's insecure, whereas my life is certain: I'm sure that I shan't have an accident." 
"Your life on the water is very dangerous and insecure," said the woodcutter, "so how can you be so certain?" 
"There's something you don't know," said Zhang Shao. "Every day I give a golden carp to a fortune−teller on the West Gate Street in Chang'an, and he passes a slip into my sleeve telling me I'll catch something every time provided I go to the right place. I went to buy a forecast from him today, and he told me that if I cast my nets to the East of the bend in the Jing River and lowered my lines on the Western bank, I would be bound to get a full load of fish and shrimps to take home. Tomorrow I shall go into town to sell them to buy wine, and we can continue our talk then, brother." With this they parted. 
How true it is that if you talk on the road there will be someone listening in the grass. A patrolling yaksha from the Jing River Palace overheard Zhang Shao's remark about always catching fish and rushed straight back to the palace of crystal to make an urgent report of disaster to the dragon king. 
"What disaster?" asked the dragon king, and the yaksha replied, "Your subject was patrolling in the water by the river's edge when I heard a fisherman and a woodcutter talking. Just when they were parting they sounded very dangerous. The fisherman said that there is a soothsayer on West Gate Street in Chang'an city whose predictions are very accurate. The fisherman gives him a golden carp every day, and he hands the fisherman a slip saying that he'll catch fish at every attempt. If his calculations are so accurate, won't all we water folk be wiped out? Shall we fortify the water palace, or shall we make some leaping waves to strengthen Your Majesty's prestige?" 
The dragon king seized his sword in a great rage, intending to go straight to Chang'an city and destroy this fortune−teller, but then his dragon sons and grandsons, shrimp officials, crab soldiers, shad generals, mandarin−fish ministers, and carp premier submitted a joint memorial that read: "We beg Your Majesty not to act in anger. As the saying goes, 'words overheard are not to be trusted.' If Your Majesty were to go now you would have to be accompanied by clouds and helped by rain; and if this frightens the common people of Chang'an, Heaven may take offence. Your Majesty is capable of making all sorts of transformations, and of appearing and vanishing unexpectedly; so you should change into a scholar for this visit to Chang'an. If you find that it is true, you will be able to punish him at your leisure; and if it turns out to be false, you will avoid killing an innocent man." Taking their advice, the dragon king put aside his sword, and without raising clouds or rain he climbed out on the back, shook himself, and turned into a scholar dressed in white. He was Handsome and noble, 
Towering into the clouds. 
And he observed the rules of conduct. 
In his speech he showed his respect for Confucius and Mencius, His manners were those of the Duke of Zhou and King Wen. 
He wore a gown of jade−green silk, 
A cloth wrapped casually round his head. 
Once on the road he strode straight to West Gate Street in Chang'an city, where he saw a crowd of people pushing and shouting. One of them was proclaiming grandiloquently, "He who was born under the Dragon will clash with the one who belongs to the Tiger. Although the cyclical characters are supposed to be in concordance, I'm afraid that the Year Planet may be offended by the Sun." As soon as he heard this the dragon king knew that this was the place where fortunes were told, so he pushed through the crowds to look inside. 
Four walls covered with pearls, 
A room full of silken embroideries, 
Incense ever rising from a burner, 
Clear water in a porcelain pot. 
On either side were paintings by Wang Wei; 
High above the seat hung a picture of the Devil Valley Hermit. 
An inkstone from Duanxi County, 
On which leant a large brush of finest hairs; 
A forest of fiery pearls, 
The prediction of Guo Pu, 
As he diligently compared them to the Tai Zheng Xin Jing. 
He was deeply versed in the six lines of the diagrams, 
A great expert on the Eight Trigrams. 
He understood the principles of Heaven and Earth, 
And saw into the feelings of gods and devils. 
He knew all about the cyclical numbers, 
And had a clear picture of the constellations. 
He saw the events of the future, 
He could tell with divine perception. 
He knew when good and bad was coming, 
Could predict death and survival. 
His words hastened wind and rain; 
When he wielded his writing−brush, gods and devils trembled. 
His name was written on a signboard: 
Master of Divination Yuan Shoucheng. 
Who was he? He was Yuan Shoucheng, the uncle of Yuan Tiangang the Imperial Astrologer. He was famous throughout the country, and the leading member of his profession in Chang'an. The dragon king went in to see him, and when they had greeted each other he asked the dragon king to sit down, while a servant brought tea. 
"What have you come to ask about, sir?" asked the soothsayer, and the dragon king replied, "I beg you to uncover the secrets of the sky for me." The soothsayer passed him a slip of paper from his sleeve and said, 
"Clouds obscure the mountain peak, mist covers the tree tops. If there is to be rain, it will certainly come tomorrow." 
"When will it rain tomorrow," asked the dragon king, "and how many inches of rain will fall?" 
"Tomorrow the clouds will gather at mid−morning; late in the morning there will be thunder; at noon it will start to rain; and in the early afternoon the rain will finish, after 3 feet 3.48 inches have fallen," replied the soothsayer. 
"I trust that you are not fooling," said the dragon king. "If it rains tomorrow at the time and to the depth you have predicted I shall pay you a fee of fifty pieces of gold. If it does not rain, or if it does not rain at the time and to the depth you say it will, then I'm telling you straight that I'll smash up your shopfront, tear down your sign and run you out of Chang'an so that you won't be able to deceive the people a moment longer." 
"That is entirely up to you," replied the other cheerfully. "We shall meet again tomorrow after the rain." 
The dragon king took his leave and went back to his watery palace from Chang'an. The greater and lesser water spirits greeted him with the question, "How did Your Majesty's visit to the soothsayer go?" 
"It was all right," he replied, "but he was a smooth−tongued fortune−teller. When I asked him when it would rain, he said tomorrow. When I asked what time of day it would be and how much would fall, he said that at mid−morning the clouds would gather, late in the morning it would thunder, at noon it would start to rain, and early in the afternoon it would stop raining. He also said that 3 feet 3.48 inches of rain would fall. I made a wager with him that if his prediction turned out to be true, I'd give him fifty ounces of gold; but if he got it at all wrong, I'd smash up his shopfront id drive him out, so that he wouldn't be able to deceive the public any longer. The watery tribe laughed and said, "Your Majesty is the General Superintendent of the Eight Rivers and the Great Dragon God of the Rain, so only you can know whether there will be rain. How dare he talk such nonsense? That fortune−teller is bound to lose, absolutely bound to." 
Just as all the dragon sons and grandsons were laughing and talking about this with the fish ministers and crab soldiers a shout was heard from the sky: "Dragon King of the Jing River, prepare to receive an Imperial Decree." They all looked up and saw a warrior in golden clothes coming towards the watery palace with a decree from the Jade Emperor in his hands. This alarmed the dragon king, who straightened his clothes, stood up solemnly, burnt incense and received the decree. The gold−clad warrior returned to the sky. Giving thanks for the imperial grace the dragon king opened the letter and read: 
"We order the Superintendent of the Eight Rivers to travel with thunder and lightning and succor the city of Chang'an with rain." 
The time and the amount on the decree were exactly the same as those foretold by the soothsayer, which so startled the dragon king that he passed out. When he came round a moment later he said to the watery tribe, 
"How can there be a man of such powers in the mortal world? He is really someone who knows everything about Heaven and Earth−−I'm bound to be beaten by him." 
"Your Majesty should not worry," submitted General Shad in a memorial. "There will be no difficulty about beating him. Your subject has a humble plan that I can guarantee will shut that scoundrel's mouth." When the dragon king asked what the plan was, the general replied, "Make it rain at the wrong time and not quite enough, so that his predictions are wrong, and then you will surely beat him. There will be nothing to stop you smashing his sign to smithereens and running him out of town." The dragon king accepted his advice and stopped worrying. 
The next day he ordered Viscount Wind, Duke Thunder, the Cloud Youth and Mother Lightning to go to the sky above the city of Chang'an. He waited till late in the morning before spreading the clouds, unleashed the thunder at noon, started the rain in the early afternoon, and stopped it in the late afternoon, when only three feet and 0.4 inches had fallen. He had thus changed the times by two hours and reduced the amount of rain by 
.08 inches. After the rain he dismissed his generals and his hosts and put away his clouds; then he changed back into a white−clad scholar and charged into Yuan Shoucheng's fortune−telling stall on West Gate Street. 
Without even asking for an explanation he smashed up Yuan's sign, his brush, his inkstone, and everything else, while the fortune−teller remained calmly in his chair without moving. 
The dragon king brandished the door in the air, ready to hit him with it, and began to pour abuse on him: "You evil man, with all your reckless talk about blessings and disasters; you stinking deceiver of the masses. Your predictions are false, and you talk nonsense. You got the time and the amount of today's rain quite wrong, but you still sit there so high and mighty. Get out at once if you want me to spare your life." Yuan Shoucheng, who was as calm and unfrightened as ever, looked up to the sky with a mocking smile. 
"I'm not afraid," he said, "I'm not afraid. I've committed no capital offence, but I fear that you have. You may be able to fool other people, but you can't fool me. I know who you are. You're no scholar; you're the Dragon King of the River Jing. You flouted a decree of the Jade Emperor by changing the time of the rain and cutting down the amount, which is a crime against the laws of Heaven. I'm afraid that you're for the executioner's blade on the Dragon−slicing Scaffold. Are you going to keep up that abuse of me?" 
On hearing this the dragon king trembled from fear and his hair stood on end. Dropping the door at once he straightened his clothes and made gestures of submission, kneeling to the soothsayer and saying, "Please do not be angry with me, sir; I was only joking. I never thought that it would be taken seriously. Whatever am I to do if I have broken the laws of Heaven? I beg you to save me, sir. If you don't I shall haunt you after my death." 
"I can't save you," replied Yuan Shoucheng, "but I can suggest one way by which you may be able to save your skin." 
"I beg you to tell me," implored the dragon king. 
"Tomorrow afternoon at half past one you will have to go to the office of the official in charge of personnel, Wei Zheng, to be beheaded. If you want to stay alive you must report at once to the present Tang Emperor, Taizong, as Wei Zheng is a minister of his; and if you can get him to speak for you, you will be all right." The dragon king took his leave of the soothsayer with tears in his eyes and went away. The sun was setting in the West, and the moon and stars were coming out. 
As clouds settle round the mountains the crows fly back to roost, The travelers on long journeys find inns for the night. 
The returning geese sleep on a sandbank by the ford, 
As the Milky Way appears. 
A lamp in the lonely village burns with barely a flame. 
Pure is the monastery as the reed smoke curls in the breeze; 
Men disappear in the butterfly dream. 
As the moon sinks, flower shadows climb the rails, 
The stars are a jumble of light. 
The night is already half way through. 
The Dragon King of the River Jing did not return to his watery palace but stayed in the sky until the small hours of the morning, when he put away his cloud and his mist horn, and went straight to the gate of the Imperial Palace. At this very moment the Tang Emperor dreamt that he went out of the palace gate to stroll among the flowers in the moonlight. The dragon king at once took human form, went up to him and knelt and bowed before him, crying, "Save me, Your Majesty, save me." 
"Who are you, that we should save you?" asked Taizong. 
"Your Majesty is a true dragon," replied the dragon king, "and I am a wicked dragon. As I have offended against the laws of Heaven, I am due to be beheaded by Your Majesty's illustrious minister Wei Zheng, the official in charge of personnel, so I have come to beg you to save me." 
"If you are supposed to be beheaded by Wei Zheng, we can save you, so set your mind at rest and go along now," said the Tang Emperor. The dragon king, who was extremely happy, kowtowed in thanks and went away. 
Taizong remembered his dream when he woke up. It was now half past four in the morning, so Taizong held court before the assembled civil and military officials. 
Mist wreathed the palace gates, 
Incense rose to the dragon towers. 
In the shimmering light the silken screen moves, 
As the clouds shake the imperial glory spreads. 
Monarch and subject as faithful as Yao and Shun, 
Imposing music and ritual rivaling Zhou and Han. 
As the call "Long Live the Emperor" goes up, 
The Empress is wished a thousand autumns. 
When the Rod of Silence descends three times, 
The uniformed officials bow to the emperor. 
The brightly coloured palace flowers have a heavenly scent; 
The delicate willows on the bank sing royal songs. 
Are hung high from golden hooks; 
Rest by the royal chariot. 
Elegant are the civil officials, 
By the Imperial Way high and low are divided; 
They stand by rank beneath the palace steps. 
The ministers with their purple corded seals ride three elephants. 
May the Emperor live as long as Heaven and Earth! 
When the officials had all done homage they divided into their groups. The Tang Emperor looked at them one by one with his dragon and phoenix eyes. Among the civil officials he observed Fang Xuanling, Du Ruhui, Xu Shiji, Xu Jingzong, Wang Gui and others; and among the military officers he saw Ma Sanbao, Duan Zhixian, Yin Kaishan, Cheng Yaojin, Liu Hongji, Hu Jingde, and Qin Shubao among others. Every one of them was standing there solemnly and with dignity, but he could not see Minister Wei Zheng among them. 
He summoned Xu Shiji into the palace hall and said to him, "We had a strange dream last night in which a man came and bowed to us, claiming that he was the Dragon King of the River Jing. He had broken the laws of Heaven, and was due to be beheaded by the official in the personnel department, Wei Zheng. He begged us to save him, and we agreed. Why is it that the only official missing at court today is Wei Zheng?" 
"If this dream is true," replied Xu Shiji, "Wei Zheng must be summoned to the palace, and Your Majesty must not let him out of doors. Once today is over the Dragon King will be saved." The Tang Emperor was overjoyed and he sent a personal aide with a decree summoning Wei Zheng to court. 
That night the minister Wei Zheng had been reading the stars in his residence and was just burning some precious incense when he heard a crane calling in the sky. It was a messenger from Heaven with a decree from the Jade Emperor ordering him to behead the Dragon King of the River Jing in a dream at half past one the following afternoon. The minister thanked Heaven for its grace, fasted and bathed himself, tried out the sword of his wisdom, and exercised his soul. This was why he did not go to court. When the imperial aide came with a summons he was frightened and nonplussed; but he did not dare to delay in obeying an order from his monarch, so he hurriedly tidied his clothes, tightened his belt, and went to the palace with the summons in his hands. He kowtowed to the Emperor and admitted his fault. 
"We forgive you," said the Emperor. The officials had not yet withdrawn, so the Emperor now ordered the curtains to be lowered and dismissed them. The only one of them he kept behind was Wei Zheng, whom he ordered to mount the golden chariot and come to his private quarters with him, where they discussed the policies to bring peace and stability to the country. 
At about noon he ordered the palace ladies to bring a large weiqi chess set and said, "We shall now have a game of chess." The Imperial concubines brought in a chess board and set it on the Emperor's table. Thanking the Tang Emperor for his grace, Wei Zheng started to play with him. As each moved in turn they built up their lines of battle. It was just as the Chess Classic says: The Way of chess: 
The best place is the middle of the board, 
And the comers are neither good nor bad. 
This is the eternal law of chess. 
"It is better to lose a piece 
Than to lose the initiative. 
When you are struck on the left, look to the right, 
When attacked in the rear, keep an eye on your front. 
Sometimes the leader is really behind, 
Sometimes the laggard is really ahead. 
If you have two 'live' areas do not let them be severed; 
If you can survive as you are, do not link up. 
Do not spread yourself out too thinly, 
Do not crowd your pieces too closely. 
Rather than being niggardly with your pieces, 
Lose them and win the game. 
Rather than moving for no reason, 
It is better to strengthen your position. 
When he has many and you have few, 
When you have many and he has few, 
The one who is good at winning does not have to struggle; 
The one who draws up a good position does not have to fight; 
The one who fights well does not lose; 
The one who loses well is not thrown into confusion. 
Open your game with conventional gambits, 
And end by winning with surprise attacks. 
When the enemy strengthens himself for no apparent reason, 
He is planning to attack and cut you off. 
When he abandons small areas and does not rescue them 
The man who places his pieces at random 
The man who responds without thinking 
As if you were walking on the edge of a precipice.' 
There is a poem that goes: 
The board is the Earth, the chessmen Heaven, 
The colours, Positive and Negative, 
When you reach that subtle state when all the changes become clear, You can laugh and brag about the chess−playing Immortals. 
As sovereign and minister played their game of chess it was half past one. Although the game was not over, Wei Zheng slumped down beside the table and started to snore, fast asleep. 
"Worthy Minister," said Taizong with a smile, "you have exhausted your mind in strengthening the country and tired yourself out building the empire; that is why you have fallen asleep without realizing it." The Emperor said no more and let him sleep. Not long afterwards Wei Zheng woke up, prostrated himself on the floor, and said, "Your subject deserves ten thousand deaths. I fell asleep without knowing what I was doing, and I beg Your Majesty to forgive your subject's criminal discourtesy to his sovereign." 
"What criminal discourtesy have you committed?" the Emperor asked. "Rise, and take the Pieces off the board so that we may start again." Wei Zheng thanked him for his grace, and was just taking the pieces in his hand when he heard shouting outside the palace gates. Qin Shubao, Xu Maogong and some others brought in a dragon's head dripping with blood, threw it to the floor in front of the Emperor, and reported, "Your Majesty, Seas have gone shallow and rivers have run dry, 
But such a sight as this was never seen by human eye." 
The Emperor and Wei Zheng rose to their feet and asked where it had come from. 
"This dragon's head fell from a cloud at the crossroads at the end of the Thousand Yard Portico, and your humble subjects dared not fail to report it," said Qin Shubao and Xu Maogong. 
"What does this mean?" the Tang Emperor asked Wei Zheng in astonishment. 
"Your subject beheaded it in a dream just now," replied Wei Zheng, kowtowing. 
"But I never saw you move your hand or body when you were dozing," said the shocked Emperor, "and you had no sword, so how could you have beheaded it?" 
"My lord," replied Wei Zheng, "your subject 
Was bodily in your presence, 
But far away in my dream. 
I was bodily in your presence reaching the end of a game. 
When I shut my eyes and felt drowsy; 
I went far away in my dream, riding a magic cloud, 
Was on the Dragon−slicing Scaffold 
Where he had been tied by the officers and soldiers of Heaven. 
'You have broken the laws of Heaven, 
And deserve the death penalty. 
I bear a heavenly mandate 
When the dragon heard he was bitterly grieved; 
Your subject marshalled his spirits. 
When the dragon heard he was bitterly grieved, 
Pulled in his claws, laid down his scales and gladly prepared to die. 
Your subject marshalled his spirits, 
Hitched up his clothes, stepped forward and raised the blade. 
With a snick the sword came down, 
And the dragon's head fell into the void." 
Emperor Taizong's feelings on hearing this were mixed. On the one hand he was happy, because he was proud of having so good a minister as Wei Zheng; for with a hero like that in his court he needed to have no worries about the safety of the empire. On the other hand he was distressed, because although he had promised in his dream to save the dragon, it had been executed. He had no choice but to pull himself together and order Qin Shubao to hang the dragon's head up in the market place as a warning to the common people of Chang'an. He also rewarded Wei Zheng, and then all the officials dispersed. 
When he returned to the palace that evening, the Emperor was depressed as he remembered how the dragon had wept so bitterly in his dream, begging to be saved. Yet the dragon had been unable to avoid its doom. 
After brooding over this for a long time he felt more and more exhausted and uneasy. In the second watch of the night he heard sobbing outside the palace gates, which made him more frightened than ever. As he lay in a fitful sleep, the dragon king of the River Jing reappeared, this time holding a head dripping with blood in his hands. 
"Emperor Taizong of the Tang," he shouted, "give me back my life, give me back my life. Last night you were full of promises to save me, so why did you double−cross me yesterday and order Wei Zheng, the official in charge of personnel, to behead me? Come out, come out, and we shall go to the King of Hell's place to have this out." He pulled at the Emperor's clothes and would not stop shouting. Taizong could find nothing to say, and struggled so hard to get away that he was pouring with sweat. Just at this most awkward moment he saw fragrant clouds and coloured mists to the South. A female Immortal came forward and waved a willow twig, at which the headless dragon went off to the Northwest, weeping pitifully. This Immortal was the Bodhisattva Guanyin, who had come to the East in obedience to the Buddha's decree to find the man to fetch the scriptures. She was now staying in the temple of the tutelary god of Chang'an, and when she heard the devilish howling she came to chase away the wicked dragon. The dragon then went down to Hell to submit a full report. 
When Taizong woke up he shouted, "A ghost, a ghost!" The empresses of the three palaces, the imperial consorts and concubines of the six compounds, the attendants and the eunuchs were all so terrified by this that they lay awake trembling for the rest of the night. Before long it was half past four, and all the military and civil officials were waiting for the morning court outside the palace gates. When dawn came and the Emperor had still not come to court they were so frightened that they did not know what to do. 
It was not till the sun was high in the sky that a decree was brought out that read, "As our mind is not at ease all the officials are excused court." Six or seven days quickly passed, and all the officials were so anxious that they wished they could rush to the palace gates to see the Emperor and ask after his health, but all that happened was that the Empress issued a decree summoning the royal doctors to the palace to administer medicine. Crowds of officials gathered at the palace gates waiting for news, and when the doctors came out a little later they asked what the matter was. 
"His Majesty's pulse in not as it should be: it is both faint and fast. He murmurs deliriously about having seen a ghost. His pulse stops every ten beats. His five viscera lack all spirit, and I am afraid that the worst must be expected within seven days." The officials went pale from shock. 
Amid all the panic it was learned that Taizong had sent for Xu Maogong, the Duke Protector Qin Shubao, and Lord Yuchi Jingde. When the three lords received the decree they hurried to the lower story of the side palace. 
When they had bowed to him, a serious−faced Taizong spoke forcefully to them. 
"Illustrious ministers," he said, "we started to command troops at the age of nineteen, and had many hard years of fighting from then on, conquering the North and the South, defending in the East, and wiping out our enemies in the West; but never once did we see anything sinister or evil. Yet now we are seeing ghosts." 
"Your Majesty has founded an empire and slaughtered men beyond number, so why should you be scared of ghosts?" asked Lord Yuchi. 
"You don't believe us," the Emperor replied, "but outside our bedroom door at night bricks and tiles fly about and the ghosts and demons howl. It is really terrible. Daytime is passable, but the nights are unbearable." 
"Don't worry, Your Majesty," said Qin Shubao. "Tonight I and Yuchi Jingde shall guard the palace doors to see whether there are any ghosts or not." Taizong agreed to his suggestion, and after thanking him for his kindness Xu Maogong and the other two generals withdrew. That evening the two of them put on their equipment and took up their positions outside the palace gates in full armour and helmet, with golden maces and battle−axes in their hands. Look how these splendid generals were dressed: On their heads were golden helmets bright, 
On their bodies was armour like dragon scales. 
Magic clouds glisten in front of their Heart−protecting Mirrors; Their lion coats are tightly buckled. 
Fresh are the colours of their embroidered belts. 
One looks up to the sky with his phoenix eyes, and the stars tremble; The other's eyes flash lightning and dim the moonlight. 
These true heroes and distinguished ministers 
Will be called gate−protectors for a thousand years 
And serve as door−gods for ten thousand ages. 
The two generals stood beside the doors till deep into the night, and not a single demon did they see. That night Taizong slept peacefully in the palace and nothing happened. When morning came he called the two generals in and gave them rich rewards. 
"We had not been able to sleep for several days since we fell ill," he said, "but last night was very peaceful, thanks to the awesome might of you two generals. Please go and rest now so that you can guard us again tonight." The two generals thanked him and left. For the next two or three nights they stood guard and all was quiet; but the Emperor ate less and less as his illness took a turn for the worse. Not wishing to put the two generals to any more trouble, he summoned them to the palace with Du Ruhui and Fang Xuanling. 
These were the instructions he gave them: "Although we have enjoyed peace for the last two days, we are unhappy about the night−long ordeals we have imposed on Generals Qin and Yuchi. We therefore wish to commission two skilled painters to make faithful portraits of the two generals to paste on the doors so that they may be saved trouble. What do you think?" In obedience to the imperial decree the officials chose two men who could draw a good likeness, and the two generals wore their armour as before while they were painted. Then the pictures were stuck on the doors, and there was no trouble that night. 
The next two or three days were peaceful too but then the Emperor heard bricks and tiles banging and crashing once again at the Hou Zai Gate. He summoned his officials at dawn and said, "There has, thank goodness, been no trouble at the front gates for several days now, but there were noises at the back gates last night that practically scared me to death." Xu Maogong went forward and submitted this suggestion: "When there was trouble at the front gates Yuchi Jingde and Qin Shubao protected Your Majesty. Now there is trouble at the back gates Wei Zheng should be ordered to stand guard." 
Taizong approved his suggestion, and ordered Wei Zheng to stand guard at the back gates that night. Wei Zheng received the edict, and that night he put on his best clothes, belted himself tightly, and took up his vigil outside the Hou Zai Gate. He was a true hero. He wore 
A black band of silk around his forehead, 
A brocade gown loosely belted with jade. 
His hood and billowing sleeves caught the frost and dew, 
And he looked more ferocious than the ghost−quellers Shenshu and Yul ti. 
On his feet he wore black boots for motionless movement; 
In his hand he wielded a keen−edged blade with great ferocity. 
He looked around with glaring eyes: 
What evil spirit would have dared approach? 
No devils were seen all night, but although nothing happened at the front or back gates the Emperor's condition still deteriorated. One day the Empress Dowager issued an edict summoning the officials to discuss funeral arrangements. Taizong sent for Xu Maogong and gave him orders about affairs of state, instructing him to look after the heir to the throne in the way that Liu Bei, the ruler of Shu, had instructed Zhuge Liang. 
When he had finished speaking he was bathed and put into clean clothes. All he had to do now was to wait for the end. Then in rushed Wei Zheng, who grabbed hold of his dragon robes and said, "Do not worry, Your Majesty. I can ensure Your Majesty long life." 
"The disease has reached my heart," replied the Emperor, "and my life will end at any moment now, so how can you save it?" 
"Your subject has a letter here," said Wei Zheng, "that I am offering to Your Majesty to take with you to the underworld and give to Cui Jue, the judge of Fengdu." 
"Who is this Cui Jue?" asked the Emperor. 
"He was one of the officers of Your Majesty's exalted predecessor. From being magistrate of Cizhou he was promoted to be vice−president of the Ministry of Rites. When he was alive he and I were close friends. Now that he is dead he is in charge of the Registers of Birth and Death in the underworld as judge of Fengdu, and he often comes to see me in my dreams. If you take this letter with you on your journey and give it to him, he is bound to allow Your Majesty to come back out of consideration for your humble subject. I can guarantee that Your Majesty's soul will return to the sunlight, and the dragon countenance will certainly return to the imperial capital." Taizong took the letter and put it in his sleeve, then he shut his eyes in death. The empresses, consorts and imperial concubines of the three palaces and the six compounds, the palace servants, the heir to the throne, and the civil and military officials all grieved and dressed in mourning. The imperial coffin lay in state in the White Tiger Hall. 
If you don't know how Taizong came back to life, listen to the explanation in the next chapter. 

`,
    },
  ],
  [
    11,
    {
      title: `
Chapter 11: After Touring the Underworld, Taizong Returns to Life.
	By Presenting a Pumpkin Liu Quan Continues His Marriage 
`,
      createdAt: new Date(),
      content: `
A hundred years flow by like water; 
A lifetime's career is no more than a bubble, 
The face that yesterday was the color of peach−blossom 
Today is edged with snow. 
When the white ants' line of battle collapses, all is illusion; 
"Repent, repent," is the cuckoo's urgent call. 
He who does good in secret can always prolong his life; 
Heaven looks after the one who asks no pity. 
Taizong was in a daze as his soul went straight to the Tower of Five Phoenixes, in front of which he saw the horsemen of the Imperial Guard who invited him out hunting with them. Taizong was glad to go and they went off into the distance; but after they had been going for some time he found himself walking alone in a wasteland: the horsemen had all disappeared. Just as he was discovering to his alarm that he could not find his way a man appeared not far away, shouting. 
"Great Tang Emperor, come here, come here." On hearing this Taizong looked up and saw him: A black silk turban, 
The black silk turban has tabs blowing in the breeze; 
The rhinoceros−horn belt has golden mountings. 
In his hands an ivory tablet, glowing auspiciously; 
His thin silk gown conceals his divine light. 
He wears a pair of boots with whitened soles 
As he climbs the clouds and grasps the mist, 
Holding to his chest the Registers of Life and Death, 
Noting down the quick and the dead. 
His tangled hair blows about his ears; 
His whiskers dance and fly beside his cheeks. 
Once he used to be a Tang minister 
But now he judges cases for the King of Hell. 
When Taizong went up to him, he fell on his knees beside the path and said, "Your Majesty, please forgive your subject for his crime of failing to come far enough to meet you." 
"Who are you?" asked the Emperor, "and why have you come to meet me?" 
"A fortnight ago your humble servant heard the Dragon King of the River Jing bringing a case against Your Majesty in the Senluo Palace because he was executed despite your promise to save him," replied the other. 
"The King of Qinguang of the First Palace sent devil messengers with an urgent summons to Your Majesty to be present when the case is heard between the Three Orders: the Human Order, the Underworld Order and the Water Order. When I heard this I came here to meet Your Majesty. I arrived late, so I beg for forgiveness." 
"What is your name and position?" asked Taizong. 
"When your humble servant was alive I used to serve His Late Majesty. I was magistrate of Cizhou, and later made vice−president of the Ministry of Rites. My name is Cui Jue. I have now been given office in the underworld as the judge in charge of cases at Fengdu." Taizong, greatly delighted to learn this, went up to him and supported him with his imperial hands as he said, "Sir, you have made a long and exhausting journey. 
Wei Zheng, our minister, gave us a letter for you; how lucky that we have met." The judge thanked him and asked where the letter was. Taizong produced it from his sleeve and handed it over to Cui Jue, who received it with a bow. When he opened it he saw that it read as follows: 
Your Excellency, Metropolitan Judge, and Venerable Elder Brother Cui, Remembering our former friendship; I still see and hear you as if you were alive; but many years have now flown by since I last received your pure instruction. On feast days I set out some vegetarian dishes as a sacrifice to you, but I have been unable to divine whether they are enjoyed by you. As I have the good fortune not to have been abandoned by you and you have appeared to me in dreams, I now know that my great elder brother has risen high. But, alas, there is a great gap between the worlds of darkness and of light, and we are unable to meet each other as we are each at different ends of the universe. 
As the Cultured Emperor Taizong has recently passed away of a sudden illness it seems likely that his case will be discussed by the Three Orders, so that he is bound to meet you, elder brother. I beseech you to remember the friendship of the days when you were 
alive and give His Majesty such assistance as will enable him to return to the sunlight. This would be a great favour, and I shall write again to thank you. I cannot go into all the details of the case here. 
Your younger brother kowtows to you. 
The judge was very pleased when he had read the letter. "I know about how the official Wei of the personnel department beheaded the dragon in a dream the other day," he said, "and this news filled me with great admiration. He has always looked after my sons and grandsons, and now that I have a letter from him, Your Majesty need have no worries. Your humble servant can undertake to escort Your Majesty back to the light, where you will once more ascend the throne." Taizong thanked him. 
As they were talking a pair of servant boys in black appeared, carrying banners and a precious canopy. "An invitation from King Yama," they shouted. Taizong and Judge Cui went along with them. A city wall appeared in front of them, and above its gates hung a large tablet on which was written DEVIL GATE OF 
THE WORLD OF DARKNESS in huge letters of gold. The two lictors waved their banners and led Taizong into the city and along its streets. Beside the road he saw his father and predecessor Li Yuan, as well as his dead brothers Jaincheng and Yuanji, who went up to him and said, "Shimin's here, Shimin's here," using his personal name. They grabbed and hit him, demanding their lives back; and as Taizong could not avoid them they held him fast until Judge Cui ordered a blue−faced devil with terrible fangs to drive them away. Only then was Taizong able to escape from their clutches. After another mile or so he saw a green−tiled tower rising majestically before him. 
A myriad coloured veils of haze drifting about it, 
A thousand wisps of red mist dimly appearing. 
The flying eaves had monsters at their ends, 
The matching tiles of the five roofs were gleaming bright. 
Rows of golden studs were driven into the doors, 
A length of whitest jade was placed across each threshold. 
When the windows faced the light they glowed like the dawn; 
Red lightning flashed from the lattice and the blinds. 
The tower soared into the azure sky 
While porticos led to sumptuous courtyards. 
Incense from braziers shaped like beasts perfumed the royal robes; The light from lanterns of purple gauze was thrown on palace fans. 
To the left a row of ferocious bull−headed demons; 
To the right were terrible horse−faced devils. 
Those who escorted the spirits of the dead had golden tablets; 
Those who summoned souls wore white sackcloth. 
This place was called the assembly of the underworld, 
The Palace of Yama, King of Hell. 
As Taizong gazed at it from the outside, jade ornaments could be heard tinkling as they swung from the belts of officials, and rare perfumes could be smelt. In front were two pairs of attendants holding lanterns, and behind them the ten generations of kings of the underworld came down the steps. The ten kings were the King of Qinguang, the King of Chujiang, King Songdi, King Wuguan, King Yama, King Impartial, King of Mount Tai, the Metropolitan King, the King of Biancheng, and the King of the Ever−turning Wheel. They came out of the Senluo Palace and bowed to Taizong in greeting. Taizong felt too humble to go forward. 
"Your Majesty is a monarch in the world of light, but we are only kings in the world of darkness. It is therefore only right that we should do this, so why this excessive modesty?" 
"We have offended against Your Majesties," replied Taizong, "so how can we venture to talk in terms of light and darkness, or men and ghosts?" After much yielding Taizong went into the Senluo Palace, and when they had finished bowing to each other they sat down as hosts and guest. 
A moment later the King of Qinguang clasped his hands together and said, "Why is it that the ghost dragon of the River Jing has brought a case against Your Majesty, saying that he was executed despite your promise to save him?" 
"I had a dream that an old dragon came to ask me to save him," replied Taizong, "and I did in fact promise that he would come to no harm; but as it turned out his crime was a capital one, for which he was due to be beheaded by the minister in the personnel department, Wei Zheng. We summoned Wei Zheng to come and play chess in the palace, and I never knew that he had beheaded the dragon in a dream. This happened because that officer can come and go miraculously, and also because the dragon king had committed a crime for which he deserved to die. We were in no way to blame for his death." 
When the Ten Kings heard his statement they bowed and replied, "Even before that dragon was born it was written in the registers of the Southern Pole Star that he was destined to die at the hands of a personnel minister, as we have long been aware. But because he has been arguing about the matter we had to send for Your Majesty. When the case has been argued between the three orders we shall send him to the Revolving Prayer−wheel for reincarnation. We hope that Your Majesty will forgive us for forcing you to attend." Then they ordered the judge in charge of the Registers of Birth and Death to fetch them at once to see how long His Majesty was due to live. Judge Cui hurried to his office and took down the general register of the lengths of the reigns Heaven had allowed to the kings of all the countries of the earth. As he was looking through it he saw to his horror that Emperor Taizong of the Great Tang in the Southern Jambu Continent was due to die in year 13 of his reign. He hurriedly seized a large brush soaked in ink, changed 13 into 33, then he handed the register up. The Ten Kings started at the beginning and read it through until they saw that Taizong was due to reign for thirty−three years. 
"How long has Your Majesty been on the throne?" asked the shocked kings of hell. 
"It is now thirteen years since my accession," Taizong replied. 
"Then there is no need for Your Majesty to worry," said King Yama. "You have twenty years of life ahead of you. Now that you have answered these charges satisfactorily, will you please return to the World of Light." 
On hearing this Taizong bowed and thanked the Ten Kings, who then ordered judge Cui and marshal Zhu to return Taizong his soul. As he was leaving the Senluo Palace Taizong raised his hand in salutation and asked the Ten Kings about the prospects for all the members of his family in his palace. 
"Good," they replied, "except that Your Majesty's younger sister does not seem to be going to live much longer." Taizong bowed once more to express his thanks. 
"When we return to the daylight we shall have nothing with which to show our gratitude except for fruit and melons." 
"We have gourds, Eastern melons and Western melons, or water−melons, here, but no pumpkins, no Southern melons," said the Ten Kings. 
"When we return to the world of the living we shall send some," replied Taizong, and with that they raised their clasped hands to each other, bowed, and parted. 
The marshal, with a soul−guiding flag in his hand, led the way, and Judge Cui followed with Taizong as they left the office of darkness. Taizong looked up and saw that they were not going the same way as they had come. 
"Have we taken the wrong road?" he asked the judge, who replied, "No. In the underworld you can only go; you can never come back. We are now taking Your Majesty out through the Revolving Prayer−wheel; thus you will be able to tour the underworld on your way back to life." Taizong had no choice but to follow them as they led the way. 
After a mile or two he saw a high mountain wrapped in dark clouds down to its foot, while a black mist blotted out the sky. 
"What's that mountain over there, Mr. Cui?" he asked; and the judge replied, "That is the Dark Mountain of the underworld." 
"However shall we cross it?" Taizong asked in terror. 
"Have no fears, Your Majesty; your subjects will lead the way," answered the judge. Taizong followed them shivering and trembling, and when they had climbed the mountain he looked around him. He saw that it was Jagged, 
High as the Sichuan ranges, 
It is not a famous peak of the world of light, 
But a crag of the underworld. 
Ogres hidden in the clumps of thorns, 
Evil monsters lurk behind the cliffs. 
Your ears hear no calls of animals or birds, 
The eyes can only see fiends. 
Is the smoke breathed from the mouths of magic soldiers; 
Is the vapour belched out by hidden trolls. 
Wherever you look the prospect is appalling; 
All you can see to left or right is unbridled evil. 
To be sure, there are hills, 
But no grass grows on the hills, 
There is no sky for the peaks to touch. 
No travelers cross the ranges, 
The caves hold no clouds, 
No water runs in the gullies. 
Before the cliffs there are only goblins, 
Below the ranges are trolls. 
Savage ghosts shelter in the caves, 
Evil spirits hide in the gullies. 
Ox−headed and horse−faced demons howl and roar; 
Hungry ghosts and desperate spirits sob to each other. 
The judge who claims men's lives 
Cannot wait to deliver the letter; 
The marshal who chases souls, 
Shouts and roars as he hastens along with his documents. 
Swirl along like a tornado; 
Stand as thick as clouds. 
Thanks entirely to the protection of the judge, Taizong crossed the Dark Mountain. 
As they continued on their way they went past very many courts, and from each of them piteous sounds assailed his ear, while the evil ghouls there struck terror into his heart. 
"What place is this?" asked Taizong. 
"It is the eighteen layers of hell that lie behind the Dark Mountain," the judge replied. 
"What are the eighteen layers?" asked Taizong. 
"Listen and I will tell you," the judge replied. 
"The Hanging−by−the−Sinews Hell, the Hell of Injustice, and the Hell of the Pit of Fire. 
Loneliness and desolation, 
All those here committed the thousand lower sins, 
And were sent here for punishment after death. 
The Fengdu Hell, the Tongue−extraction Hell, the Flaying Hell: Howling and wailing, 
They offended against Heaven by not being loyal or filial; 
They have Buddha−mouths but snake hearts, so fell down here. 
The Grinding Hell, the Pounding Hell, the Hell of Drawing and Quartering. 
Skin and flesh ripped and torn, 
Lips rubbed away till the teeth show. 
In the blindness of their hearts they did evil things; 
For all their fine words they harmed others in secret. 
The Ice Hell, the Skin−shedding Hell, the Disemboweling Hell. 
Filthy faces and matted hair, 
Frowning foreheads and sad eyes. 
They all used false measures to cheat the foolish, 
Thus piling up disasters for themselves. 
The Oil−cauldron Hell, the Hell of Blackness, the Hell of the Mountain of Knives. 
Because they used violence against the good 
They cower and hunch their shoulders in their suffering. 
The Hell of the Pool of Blood, the Avichi Hell, the Hell of the Steelyard Beam, Where skin is pulled away from the bone, 
Arms are broken and tendons cut. 
Because they killed for gain, 
Butchering living creatures, 
They fell into these torments that will not end in a thousand years; 
They will always lie here, never to escape. 
Every one of them is tightly bound, 
Are sent with their long halberds and short swords. 
With iron clubs and brazen hammers, 
Beat them till their wincing faces flow with blood, 
As they call on Heaven and Earth and get no answer. 
Let no man alive have any illusions: 
The devils carry out their orders and release nobody. 
Good and evil will always be rewarded: 
It is only a question of time." 
Before they had gone much further a group of devil soldiers holding banners knelt down beside the road and said, "The Commissioners of the Bridges welcome you." The Judge shouted to them that they were to rise and led Taizong across a golden bridge. Taizong saw that there was a silver bridge beside it over which some loyal, filial, worthy, just, and upright people were passing, led by banners. There was a third bridge on the other side with an icy wind roaring across it and waves of blood boiling below amid unbroken howls and wails. 
"What is that bridge called?" Taizong asked, and the Judge replied, "Your Majesty, that is called the Bridge of Punishment, and you must tell people about it when you return to the world of the living. Below the bridge there are 
A narrow, precipitous path 
Over a mighty, rushing river. 
It is like a strip of cloth across the Yangtse, 
Or a fiery pit rising up to Heaven. 
The icy vapours freeze one to the bone; 
Nauseating stenches assail the nostrils. 
There is no boat to ferry you 
Across the crashing waves. 
All who appear are sinful ghosts 
With bare feet and matted hair. 
The bridge is many miles long 
And only three fingers wide; 
The drop is a hundred feet, 
The waters are infinitely deeper. 
Above there are no railings for support, 
While trolls snatch their victims from below. 
They are driven along the dangerous path by the River of Punishment. 
See the ferocity of the divine generals by the bridge; 
Watch how the ghosts of the wicked suffer in the river. 
Hang silken clothes in blue, red, yellow and purple; 
In front of the precipice 
Squat lewd and shameless women who swore at their parents−in−law. 
Copper snakes and iron dogs feast on them at will, 
As they constantly fall in the river, never to escape. 
There is a poem that goes: 
As ghosts wail and spirits howl 
The waves of blood tower high. 
Countless ghouls with heads of bulls and horses 
Guard the bridge with great ferocity. 
The commissioners of the bridges had gone away while he was speaking. Taizong's heart was once more filled with horror, and he nodded his head and sighed silently in his distress, then followed the judge and the Marshal. Before long they crossed the evil River of Punishment and passed the terrors of the Bowl of Blood. 
Then they came to the City of the Unjustly Slain. Amid the hubbub, shouts of "Li Shimin's here, Li Shimin's here," could be made out, to the terror of Taizong. He saw that his way was blocked by a crowd of maimed and headless spectres. 
"Give us back our lives," they were all shouting, "give us back our lives." The panic−stricken Taizong tried to hide, yelling, "Help, Judge Cui, help, help." 
"Your Majesty," the judge replied, "these are the ghosts of the kings and chieftains of the sixty−four groups of rebels and the seventy−two troops of bandits. They were all killed unjustly, and nobody has given them a home or looked after them. They cannot get themselves reborn as they have no money for the journey, so they are all uncared−for cold and hungry ghosts. If Your Majesty is able to give them some money I can save you." 
"I came here empty−handed," Taizong replied, "so where could I possibly get any money?" 
"Your Majesty," the judge replied, "there is a man in the world of light who deposited a certain amount of money in the underworld. If Your Majesty is prepared to sign an I.O.U., I will endorse it, and we can borrow his store of money to distribute among these hungry ghosts; then we will be able to continue on our way," 
"Who is this man?" asked Taizong. 
"He is a man of Kaifeng in Henan," the judge replied, "and his name is Xiang Liang. He has thirteen hoards of gold and silver down here, and if Your Majesty borrows them, all you have to do is repay them when you return to the world of light." Taizong was very pleased, and only too eager to borrow one. He signed an I.O.U. 
at once and gave it to the judge, then borrowed a store, which he gave to the marshal to hand out. 
"You are to share out this gold and silver and let your Lord of the Great Tang past," said the judge. "As it is too early in his life, I am under orders from the ten kings to return his soul and tell him to hold a Great Mass when he is back in the world of light to enable all of you to be reborn, so don't be making any more trouble." 
When the ghosts heard what he had to say and were given the gold and silver they all withdrew, murmuring their obedient assent. The judge then told the marshal to wave his soul−leading flag, and Taizong was taken out of the City of the Unjustly Slain and floated along the highway to the daylight. 
After they had been going for a long time they reached the Wheel of the Six Paths of Being. Some people were soaring in the clouds, wearing cloaks of rosy mist. Others were being given office with golden insignia to hang from their waists. Monks and nuns, clergy and lay people, beasts of the field and birds of the air, ghosts and devils−−all were pouring under the wheel and each was going along his allotted path. 
"What's all this about?" asked the Tang Emperor. 
"Your Majesty is a man of deep understanding," the judge replied. "You must be sure to remember all this and tell the living about it. It is called the Wheel of the Six Paths of Being. Those who have done good deeds rise on the Path of the Immortals; those who have been loyal are reborn on the Path of Honour; those who have done their duty to their parents lead their next life on the Path of Happiness; those who have been just return to life on the Path of Man; those who have accumulated merit are reborn on the Path of Wealth; and the evildoers fall down into the Path of Devils." On hearing this the Tang Emperor nodded and said with a sigh: 
"Excellent, truly excellent, 
The virtuous come to no harm. 
The good heart is always mindful, 
The way of goodness always lies open. 
"Do not allow evil thoughts to arise; 
Thus you will avoid all trouble. 
Say not that there is no retribution; 
Whether you become a god or a ghost is all determined. 
The judge took Taizong straight to the Gate of Rebirth on the Path of Honour, bowed to him and said, "Your Majesty, this is the way out, where I shall have to take my leave and go back. Marshal Zhu will escort you for the next stage of your journey." 
"I have made you come an awfully long way, sir," said the Tang Emperor as he thanked him. 
"When Your Majesty returns to the world of the living you absolutely must hold a Great Mass to enable those forlorn ghosts to be reborn," replied the judge. "Don't on any account forget, as there can only be peace on Earth if there are no vengeance−seeking ghosts in the underworld. Every single wrong will have to be corrected. Teach all people to be good, and then you will be able to assure the continuity of your line and the eternal security of your empire." 
The Tang Emperor agreed to each of his proposals and took leave of him, then went through the gates with Marshal Zhu. Seeing a fine horse standing ready and saddled inside the gates, the marshal asked Taizong to mount it with the help of his assistants. The horse was as swift as an arrow, and it was soon at the banks of the River Wei, where a pair of golden carp could be seen sporting in the water. Taizong, captivated at the sight, pulled in his horse's reins and gazed at them. 
"Your Majesty," the marshal said, "please keep moving. We have to enter the city early." But all the Tang Emperor wanted to do was to look. As he would not move on the marshal grabbed him by the feet and shouted, "Get moving. What are you waiting for?" as he pushed him off his horse and into the River Wei with a splash. Taizong was now free of the underworld and back in the world of the living. 
The civil and military officials of the Tang court, Xu Maogong, Qin Shubao, Yuchi Jingde, Duan Zhixian, Ma Sanbao, Cheng Yaojin, Gao Shilian, Li Shiji, Fang Xuanling, Du Ruhui, Xiao Yu, Fu Yi, Zhang Daoyuan, Zhang Shiheng, Wang Gui and the others, as well as the empresses, imperial consorts and concubines, and pages were all in the White Tiger Hall. They were discussing whether to issue an edict of mourning to inform the world so that the heir could be put on the throne. 
Wei Zheng was saying, "Gentlemen, stop this discussion. We must not do that. If the country is alarmed, anything might happen. If we wait for another day our master is bound to come back to life." Xu Jingzong stepped forward from the lower ranks and protested, "Minister Wei is talking nonsense. As the old saying goes, 'split water can't be picked up and the dead can't come back to life.' What business have you to be spreading confusion with these groundless claims?" 
"Mr. Xu," Wei Zheng replied, "I can say truthfully that I have been given instruction in the magic arts since childhood and my predictions are extremely accurate. I can assure you that I have saved His Majesty from death." 
As they were arguing they heard loud shouts of "You're drowning me, you're drowning me," coming from the coffin. The civil officials and the generals were struck with terror; the empresses and consorts shivered. Every one of them had 
A face as yellow as a mulberry−leaf after autumn, 
A waist as weak as a willow sapling before spring. 
The heir went weak at the knees, 
As he stood in full mourning, unable to hold up his staff; 
The attendants' souls flew away: 
How would it do for them to be wearing mourning hats and clothes? 
The consorts and concubines collapsed, 
The palace beauties had to lie down. 
When the consorts and concubines collapsed, 
It was like a gale blowing down withered lotuses. 
When the palace beauties lay down 
It was like a rainstorm beating young lotuses down. 
All the ministers were terrified 
And their limbs went numb; 
The White Tiger Hall was like a bridge collapsing, 
And the confusion round the coffin 
Was like a temple falling down. 
All the palace women fled, as not one of them dared to approach the imperial coffin. Luckily the upright Xu Maogong, the trusty Wei Zheng, the brave Qin Shubao, and the ferocious Yuchi Jingde went forward to put their hands on the coffin and shouted, "What is it that worries Your Majesty and makes you speak to us? Tell us, and do not haunt us and scare the royal family." 
"His Majesty is not haunting us," Wei Zheng said. "His Majesty has come back to life. Bring tools at once." 
They opened the coffin and found Taizong sitting up inside and still shouting, "You're drowning me. Save me, someone." Xu Maogong and the others helped him to his feet and said, "There is nothing to fear as you come round, Your Majesty. We are all here to protect you." The Tang Emperor then opened his eyes and said, "We have been having an awful time: after escaping from the evil demons of the underworld, we were drowned." 
"Relax, Your Majesty, there is nothing to fear. How could you have drowned?" the ministers said. "We were riding along the banks of the River Wei and watching to fishes playing when that deceitful Marshal Zhu pushed us off the horse and made us fall into the river, where we all but drowned." 
"Your Majesty still has something of the ghost about you," said Wei Zheng, and he ordered the Imperial Medical Academy to send medicinal potions to settle the spirit and calm the soul at once; he also sent for some thin gruel. After one or two doses of the medicine the Emperor returned to normal and regained full consciousness. The Tang Emperor had been dead for three days and nights before returning to rule the world of the living once more. There is a poem to prove it: 
Since ancient times there have been changes of power; 
Dynasties have always waxed and waned. 
What deed of the kings of old could compare 
With the Emperor of Tang returning to life? 
As it was evening by then the ministers asked the Emperor to go to bed, and they all dispersed. 
The next day they all took off their mourning garments and put colorful clothes back on. Wearing red robes and black hats, and with their golden seals of office hanging from purple ribbons at their waists, they stood outside the gates of the court awaiting the summons. As for Taizong, after taking the medicine to settle his spirit and calm his soul and drinking some thin gruel he was helped to his bedroom by his ministers. He slept soundly all night, building up his energies, and at dawn he rose. See how he was arrayed as he summoned up his authority: 
On his head a hat that thrust into the sky; 
On his body a dark yellow robe 
Girt with a belt of Lantian jade; 
On his feet a pair of Shoes of Success. 
The dignity of his bearing 
Surpasses all others at court. 
What a peaceful and wise Great Tang Emperor, 
The king named Li who can die and rise again. 
The Tang Emperor entered the throne hall, and when the two groups of civil and military officials had finished acclaiming him they divided into sections according to their ranks. When they heard the decree, "Let all those with business step forward from their sections and submit memorials, and let those with no business retire," Xu Maogong, Wei Zheng, Wang Gui, Du Ruhui, Fang Xuanling, Yuan Tiangang, Li Chunfeng, Xu Jingzong and others stepped forward on the Eastern side; and on the Western side Yin Kaishan, Liu Hongji, Ma Sanbao, Duan Zhixian, Cheng Yaojin, Qin Shubao, Yuchi Jingde, Xue Rengui and others stepped forward also. 
They advanced together, bowed low before the white jade steps, and asked in a memorial, "Why did it take Your Majesty so long to awake from your dream the other day?" 
To this Taizong replied, "The other day we took Wei Zheng's letter and felt our soul leaving the palace. The horsemen of the Imperial Guard asked us to go hunting with them, and as we were going along the men and their horses all vanished. His Late Majesty and our dead brothers appeared and started to shout at us in a quarrelsome way. Things were getting very awkward when we saw a man in a black hat and gown who turned out to be the judge Cui Jue. When he had shouted at my dead brothers and driven them away we gave him Wei Zheng's letter. As he was reading it some servants in black holding banners led us in and took us to the Senluo Palace, where the Ten Kings of Hell were all sitting. They said that the dragon of the River Jing had falsely accused us of deliberately killing him after we had promised to save him, so we gave them a full account of what we told you about before. They said that the case had now been settled between the three orders, and ordered that the Registers of Birth and Death be brought at once so that they could see how long we were due to live. Judge Cui handed up the register, and they saw in it that we were due to reign for thirty−three years, which meant that we had another twenty years of life in front of us. They told Marshal Zhu and Judge Cui to escort us back. We took our leave of the Ten Kings and promised to send them some pumpkins and fruit as a mark of our thanks. After leaving the Senluo Palace we saw in the underworld how the disloyal, the unfilial, those who do not observe the rules of propriety, wasters of foodgrains, bullies, cheats, those who use false measures, adulterers, robbers, hypocrites, deceivers, debauchees, swindlers and the like undergo the agonies of being ground, burnt, pounded and sliced, and suffer the torments of being fried, boiled, hung in mid−air, and skinned. There were tens of thousands of them, far more than our eyes could take in. Then we went through the City of the Unjustly Slain where there were countless ghosts of the wrongly killed, and all of them, the chieftains of the sixty−four groups of rebels and the spirits of the seventy−two bands of rebels, blocking our way. Luckily Judge Cui acted as our guarantor and lent us one of the hoards of gold and silver of a Mr. Xiang of Henan, with which we were able to buy them off and continue on our way. 
Judge Cui told us that when we returned to the world of the living we had an inescapable obligation to hold a Great Mass to enable all those forlorn ghosts to be reborn, and with these instructions he took his leave. When I came out under the Wheel of the Six Paths of Being Marshal Zhu invited us to mount a horse. This horse seemed to fly to the banks of the River Wei, where I saw a pair of fish sporting in the water. Just as we were enjoying this sight the marshal grabbed our legs and tipped us into the water, and with that we returned to life." 
When the ministers had heard this they all congratulated him and they compiled a record of it; and all the prefectures and counties of the empire sent in memorials of felicitation. 
Taizong issued a decree of amnesty for all the convicted criminals in the empire and ordered inquiries into the cases of all those held in jail on serious charges. The inspectors submitted to the throne the names of more than four hundred criminals who had been sentenced by the Ministry of Punishments to beheading or strangulation, and Taizong gave them a stay of execution, allowing them to go home to see their families and give their property to their relations; on the same day the following year they were to report to the authorities for their sentences to be carried out. The criminals thanked him for his mercy and withdrew. He also issued a notice about charity for orphans and released three thousand women of all ages from the palace to be married to members of the army. From then on all was well within and without the palace. There is a poem to prove it: Vast is the mercy of the great Tang Emperor; 
He surpasses Yao and Shun in making the people prosper. 
Four hundred condemned men all left their prisons, 
Three thousand mistreated women were released from the palace. 
All the officials of the empire proclaim the monarch's long life; The ministers at court congratulate the Great Dragon. 
Heaven responds to the thoughts of the good heart, 
Its blessing will protect his seventeen successors. 
When he had released the women from the palace and let the condemned men out of prison he issued a notice that was posted throughout the empire. It read: 
"Great are Heaven and Earth; 
Sun and Moon shine clearly. 
Although the universe is vast, 
Earth and sky have no room for evil plots. 
If you use your wits and skill to cheat people, 
You will get retribution in this life; 
If you are good at giving and ask for little, 
You are sure to find a reward before your future life. 
Cannot compare with living according to one's lot; 
Ten thousand kinds of robbers 
Are no match for those who live frugally and accept their fate. 
If you are good and merciful in thought and deed, 
What need is there to bother to read the scriptures? 
If your mind is full of malice towards others, 
To read the whole of the Buddha's canon would be a waste of time." 
From then on everyone in the country did good deeds. Another notice was issued calling for a worthy man to take pumpkins to the underworld, and at the same time Yuchi Jingde, the Duke of E, was sent to Kaifeng in Henan to visit Xiang Liang and pay him back a hoard of jewels and a hoard of gold and silver. Some days after the notice had been issued a worthy man called Liu Quan from Junzhou came forward to deliver the pumpkins. He came from a family worth ten thousand strings of cash. When his wife Li Cuilian had taken a gold pin from her hair to give as an offering to a monk at the gate, Liu Quan had cursed her for being a loose wife who would not stay in the women's quarters. Li Cuilian, bitterly resenting this, had hanged herself, leaving a little boy and girl who had been crying night and day ever since. Liu Quan, unable to bear it any longer, wanted only to end his own life and abandon his family and his children. For this reason he had volunteered to deliver the pumpkins in death and came to the Tang Emperor with the imperial notice in his hand. The Emperor ordered him to go to the Golden Pavilion, where he was to put a pair of pumpkins on his head and some gold in his sleeve and drink poison. 
Liu Quan drank the poison and died. In an instant his soul appeared at the Devil Gate with the pumpkins on his head. The demon officer at the gate asked, "Who are you, and how did you come here?" 
"I have come on the orders of Emperor Taizong of the Great Tang to present some pumpkins to the Ten Kings of Hell." The officer was only too pleased to let him in, and he went straight to the Senluo Palace, and when he was given audience with the Kings of Hell he presented the pumpkins to them and said, "I have brought these pumpkins a great distance in obedience to the decree of the Tang Emperor, who wishes to thank Your Majesties for their great mercy to him." 
"How splendid of the Tang Emperor to be as good as his word," exclaimed the ten delighted kings as they accepted the pumpkins. Then they asked him what he was called and where he was from. 
"I am a commoner of the city of Junzhou," he replied, "and my name is Liu Quan. As my wife Miss Li hanged herself and left a boy and a girl with nobody to look after them I wanted to abandon my family and children by giving my life for my country, so I brought this offering of pumpkins on behalf of my sovereign, who wanted to thank Your Majesties for your great mercy." On hearing this the Ten Kings ordered a search for Liu Quan's wife, Miss Li. The devil messengers soon brought her to the Senluo Palace, outside which Liu Quan was reunited with her. They thanked the Ten Kings for their kindness and told them about the harsh words that had been spoken. On consulting the Registers of Birth and Death, the kings found that they were fated to become Immortals, so they ordered demon officers to take them back at once. The demon officers, however, asked in a report, "As Li Cuilian has been dead for some time her body has perished, so what is her soul to be attached to?" 
"Li Yuying, the sister of the Tang Emperor, is due to die a sudden death today," said the Kings of Hell, "so we can borrow her body to put Li Cuilian's soul back into." On receiving this order the demon officers took Liu Quan and his wife out of the underworld to be brought back to life. 
If you don't know how they returned to life, listen to the explanation in the next installment. 

`,
    },
  ],
  [
    12,
    {
      title: `Chapter 12: The Tang Emperor Keeps Faith and Holds a Great Mass 
Guanyin Appears to the Reincarnated Golden Cicada 
`,
      createdAt: new Date(),
      content: `
When the devil officers left the underworld with Liu Quan and his wife, a dark and whirling wind blew them straight to the great capital Chang'an, where Liu Quan's soul was sent to the Golden Pavilion and Li Cuilian's to an inner courtyard of the palace, where Princess Yuying could be seen walking slowing beside some moss under the shade of some blossoming trees. Suddenly the devil officers struck her full in the chest and knocked her over; they snatched the soul from her living body and put Li Cuilian's soul into the body in its place. With that they returned to the underworld. 
When the palace serving−women saw her drop dead they rushed to the throne hall to report to the three empresses that Her Royal Highness the Princess had dropped dead. The shocked empresses passed the news on to Taizong who sighed and said, "We can well believe it. When we asked the Ten Lords of Hell if young and old in our palace would all be well, they replied that they would all be well except that our younger sister was going to die suddenly. How true that was." 
He and everyone else in the palace went with great sorrow to look at her lying under the trees, only to see that she was breathing very lightly. 
"Don't wail," the Tang Emperor said, "don't wail; it might alarm her." Then he raised her head with his own hand and said, "Wake up, sister, wake up." 
All of a sudden the princess sat up and called out, "Don't go so fast, husband. Wait for me." 
"Sister, we're waiting for you here," said the Emperor. 
The princess lifted her head, opened her eyes, and looked at him. "Who are you?" she asked. "How dare you put your hands on us?" 
"It's your august brother, royal sister," replied Taizong. 
"I've got nothing to do with august brothers and royal sisters," said the princess. "My maiden name is Li, and my full name is Li Cuilian. My husband is Liu Quan, and we both come from Junzhou. When I gave a gold hairpin to a monk at the gate three months ago my husband said harsh words to me about leaving the women's quarters and not behaving as a good wife should. It made me so angry and upset that I hanged myself from a beam with a white silk sash, leaving a boy and a girl who cried all night and all day. As my husband was commissioned by the Tang Emperor to go to he underworld to deliver some pumpkins, the Kings of Hell took pity on us and let the two of us come back to life. He went ahead, but I lagged behind. When I tried to catch him up I tripped. You are all quite shameless to be mauling me like this. I don't even know your names." 
"We think that Her Royal Highness is delirious after passing out when she fell," said Taizong to the palace women. He sent an order to the Medical Academy for some medicinal potions, and helped Yuying into the palace. 
When the Tang Emperor was back in his throne−hall, one of his aides came rushing in to report, "Your Majesty, Liu Quan, the man who delivered the pumpkins, is awaiting your summons outside the palace gates." 
The startled Taizong immediately sent for Liu Quan, who prostrated himself before the vermilion steps of the throne. 
"What happened when you presented the pumpkins?" asked the Tang Emperor. 
"Your subject went straight to the Devil Gate with the pumpkins on my head. I was taken to the Senluo Palace where I saw the Ten Kings of Hell, to whom I presented the pumpkins, explaining how very grateful my emperor was. The Kings of Hell were very pleased. They bowed in Your Majesty's honour and said, 'How splendid of the Tang Emperor to be as good as his word.'" 
"What did you see in the underworld?" asked the Emperor. 
"I did not go very far there so I did not see much. But when the kings asked me where I was from and what I was called, I told them all about how I had volunteered to leave my family and my children to deliver the pumpkins because my wife had hanged herself. They immediately ordered demon officers to bring my wife, and we were reunited outside the Senluo Palace. Meanwhile they inspected the Registers of Births and Deaths and saw that my wife and I were both due to become Immortals, so they sent devil officers to bring us back. I went ahead with my wife following behind, and although I was fortunate enough to come back to life, I don't know where her soul has been put." 
"What did the Kings of Hell say to you about your wife?" asked the astonished Emperor. 
"They didn't say anything," replied Liu Quan, "but I heard a demon officer say, 'As Li Cuilian has been dead for some time her body has decomposed.' To this the Kings of Hell said, 'Li Yuying of the Tang house is due to die today, so we can borrow her body to put Li Cuilian's soul back into.' As I don't know where this Tang house is or where she lives, I haven't been able to go and look for her yet." 
The Tang Emperor, who was now very pleased, said to his officials, "When we were leaving the Kings of Hell, we asked them about our family. They said all its members would be well except for my sister. She collapsed and died under the shade of some blossoming trees, and when we hurried over to support her she came to, shouting 'Don't go so fast, husband. Wait for me.' We thought at the time that she was just talking deliriously after passing out, but when we asked her to tell us more her story tallied precisely with Liu Quan's." 
"If Her Royal Highness died suddenly and came to shortly afterwards talking like this, then it means that Liu Quan's wife must have borrowed her body to come back to life," said Wei Zheng. "Things like this do happen. 
The princess should be asked to come out so that we can hear what she says." 
"We have just ordered the Imperial Medical Academy to send some medicine, so we don't know whether it will be possible," said the Tang Emperor, who then sent a consort into the palace to ask her to come out. The princess, meanwhile, was shouting wildly inside the palace, "I'm taking none of your medicine. This isn't my home. My home is a simple tiled house, not like this jaundiced, yellow place with its flashy doors. Let me out, let me out." 
Four of five women officials and two or three eunuchs appeared while she was shouting and helped her go straight to the throne hall, where the Tang Emperor asked, "Would you recognize your husband if you saw him?" 
"What a thing to ask! We've been married since we were children, and I've given him a son and a daughter, so of course I'd recognize him." The Emperor told his attendants to help her down and she went down from the throne hall. As soon as she saw Liu Quan in front of the white jade steps she seized hold of him. 
"Husband!" she exclaimed, "where did you go? Why didn't you wait for me? I tripped over, and all these shameless people surrounded me and shouted at me. Wasn't that shocking?" Although Liu Quan could hear that it was his wife talking, she looked like somebody else, so he did not dare to recognize her as his wife. 
"Indeed," said the Emperor, 
"Sometimes mountains collapse and the earth yawns open, 
But few men will shorten their lives to die for another." 
As he was a good and wise monarch he gave all of the princess' dressing−cases, clothes and jewelry to Liu Quan as if they were a dowry, presented him with an edict freeing him from labor service for life, and told him to take the princess home with him. Husband and wife thanked him before the steps and returned home very happily. There is a poem to prove it: 
Life and death are pre−ordained; 
Some have many years, others few. 
When Liu Quan came back to the light after taking the pumpkins, Li Cuilian returned to life in a borrowed body. 
After leaving the Emperor the pair went straight back to the city of Junzhou, where they found that their household and their children were all well. There is no need to go into how the two of them publicized their virtue rewarded. 
The story turns to Lord Yuchi, who went to Kaifeng in Henan with a hoard of gold and silver for Xiang Liang, who made a living by selling water and dealing in black pots and earthenware vessels with his wife, whose maiden name was Zhang, at the gate of their house. When they made some money they were content to keep enough for their daily expenses, giving the rest as alms to monks or 
using it to buy paper ingots of gold and silver, which they assigned to various hoards in the underworld and burnt. That was why they were now to be so well rewarded. Although he was only a pious pauper in this world, he owned mountains of jade and gold in the other one. When Lord Yuchi brought them the gold and silver, Mr. and Mrs. Xiang were terrified out of their wits. Apart from his lordship there were also officials from the local government office, and horses and carriages were packed tight outside their humble cottage. The two of them fell to their knees dumbfounded and began to kowtow. 
"Please rise," said Lord Yuchi. "Although I am merely an imperial commissioner, I bring gold and silver from His Majesty to return to you." Shivering and shaking Xiang Liang replied, "I've lent out no silver or gold, so how could I dare to accept this mysterious wealth?" 
"I know that your are a poor man," said Lord Yuchi, "but you have given monks everything they need and bought paper ingots of gold and silver which you have assigned to the underworld and burnt, thus accumulating large sums of money down there. When His Majesty the Emperor Taizong was dead for three days before returning to life he borrowed one of your hoards of gold and silver down there, which he is now repaying to you in full. Please check it through so that I can go back and report that I have carried out my instructions." Xiang Liang and his wife just went on bowing to Heaven and refused to take the gold and silver. 
"If humble folk like ourselves took all this gold and silver it'd soon be the death of us. Although we have burned some paper and assigned it to various stores, it was a secret. Anyhow, what proof is there that His Majesty−−may he live for ten thousand years−−borrowed gold and silver down there? We refuse to accept it." 
"The Emperor said that Judge Cui was his guarantor when he borrowed your money, and this can be verified, so please accept it," replied Lord Yuchi. 
"I would sooner die than do so," said Xiang Liang. 
Seeing how earnestly he refused Lord Yuchi had to send a man back with a detailed report to the throne. On reading this report that Xiang Liang had refused to accept the gold and silver, Taizong said, "He really is a pious old fellow." He sent orders to Yuchi Jingde that he was to build a temple in his name, erect a shrine to him, and invite monks to do good deeds on his behalf: this would be as good as paying him back the gold and silver. On the day this decree reached him Yuchi Jingde turned towards the palace to thank the Emperor, and read it aloud for all to hear. Then he bought fifty mu of land at a place inside the city that would not be in the way from either the civil or the military point of view, and here work was begun on a monastery to be called The Imperially Founded Xiang Quo Monastery. To its left was erected a shrine to Mr. and Mrs. Xiang with an 
inscribed tablet that read "Built under the supervision of Lord Yuchi." This is the present Great Xiang Guo Monastery. 
When he was informed that work had been completed Taizong was very pleased, and assembling the multitude of officials he issued a notice summoning monks to come and hold a Great Mass for the rebirth of those lonely souls in the underworld. As the notice traveled throughout the empire the local officials everywhere recommended holy and venerable monks to go to Chang'an for the service. By the end of the month many monks had arrived in Chang'an from all over the empire. The Emperor issued a decree ordering Fu Yi, the Deputy Annalist, to select some venerable monks to perform Buddhist ceremonies. On hearing this command Fu Yi sent up a memorial requesting a ban on the building of pagodas and saying that there was no Buddha. It read: 
By the Law of the West there are no distinctions between ruler and subject or between father and son; the Three Paths and the Six Roads are used to deceive the foolish; past sins are chased away to filch future blessings; and Sanskrit prayers are recited in attempts to avoid retribution. Now birth, death and the length of life are in fact decided by nature; and punishments, virtue, power and blessings come from the lord of men. 
But these days vulgar believers distort the truth and say that they all come from Buddha. In the time of the Five Emperors and Three Kings of antiquity this Buddha did not exist, yet rulers were enlightened, subjects were loyal, and prosperity lasted for many a long year. When foreign gods were first established in the time of Emperor Ming of the Han Dynasty, sramanas from the West began to propagate their religion. This is in reality a foreign encroachment on China, and it does not merit belief. 
When he had heard this read to him Taizong tossed it to his other officials for debate. The minister Xiao Yu stepped forward from the ranks, kowtowed and said, "The Buddha's law has flourished for several dynasties, and by spreading good and preventing evil it gives unseen help to the state; there is no reason why it would be abolished. Buddha was a sage. Those who deny sages are lawless. I request that he be severely punished." Fu Yi argued with Xiao Yu, pointing out that correct behavior was derived from serving one's parents and one's sovereign, whereas the Buddha turned his back on his parents, resisting the Son of Heaven although he was but a commoner, and rebelling against his mother and father with the body that they gave him. Xiao Yu had not been born in an empty mulberry tree, but he honoured a religion that denied fathers; this indeed proved that he who had no sense of filial piety denied his father. 
All Xiao Yu did was to put his hands together and say, "Hell must have been made for men such as him." 
Taizong sent for the High Chamberlain Zhang Daoyuan and the Head of the Secretariat Zhang Shiheng to ask them how effectively Buddhist ritual obtained blessings. 
"The Buddha dwells in purity, benevolence and mercy," the two officers replied, "and the True Result is Buddha−emptiness. Emperor Wu of the Northern Zhou Dynasty placed the Three Teachings in an order. The Chan Master Dahui wrote a poem in praise of the distant and mysterious. If the masses support monks, anything can happen. The Five Patriarchs came down to their mothers' wombs, and Bodhidharma appeared. 
From remotest antiquity everyone has said that the Three Teachings are highly venerable and cannot be destroyed or abolished. We humbly beg Your Majesty to give us his perceptive ruling." 
"Your submission makes sense," said the delighted Taizong. "If anyone else makes further comments, he will be punished." He then ordered Wei Zheng, Xiao Yu and Zhang Daoyuan to invite all the monks and select one of great virtue to be Master of Ceremonies. They all bowed to thank him and withdrew. From then on there was a new law: anyone who injured a monk or slandered the Buddha would lose his arm. 
The next day the three court officials assembled all the monks at the altar among rivers and hills, and they went through them all one by one. From among them they chose a venerable and virtuous monk. Do you know who he was? 
Fully versed in the basic mystery, his title was Golden Cicada; But because he did not want to hear the Buddha preach 
He transferred to the mortal world to suffer torment, 
Was born among the common mortals to fall into the net. 
From the moment he entered the womb he met with evil, 
Before he left it he encountered a gang of villains. 
His father was Top Graduate Chen from Haizhou, 
His grandfather a senior imperial commander. 
His birth offended the meteor that dropped into the water, 
He drifted with the current and followed the waves. 
Jinshan Island had a great destiny: 
The abbot Qian'an brought him up. 
Only at seventeen did he meet his mother, 
And go to the capital to find his grandfather. 
Commander Yin Kaishan, raising a great army, 
Wiped out and punished the bandits at Hongzhou. 
Graduate Chen Guangrui escaped from the heavenly net, 
And father and son were happily reunited. 
Accepting the invitation he receives once more the monarch's grace, And his fame is spread as he climbs the lofty tower. 
Refusing to take office he wants to be a monk, 
So as sramana of the Hongfu Temple he learns about the Way, 
The child of an ancient Buddha who used to be called Jiangliu, 
And took the dharma−name of Chen Xuanzang. 
That day the Reverend Xuanzang was chosen from among all the monks. He had been a monk from infancy, and ever since birth he had eaten vegetarian food and observed the prohibitions. His maternal grandfather was an imperial commander, Yin Kaishan. His father Chen Guangrui had come top in the Palace Examination and had been appointed a grand secretary in the Imperial Library. Xuanzang, however, had no interest in honour and glory, and his only joy was to cultivate Nirvana. Investigation revealed that his origins were good and his virtue great; of the thousand sutras and ten thousand holy books there was not a single one that he did not know; he could sing every Buddhist chant and knew all the religious music. The three officials took him to the imperial presence, where they danced and stirred up the dust. When they had bowed they reported, "Your subject Xiao Yu and the rest of us have chosen a venerable monk called Chen Xuanzang in obedience to the imperial decree." 
On hearing his name Taizong thought deeply for a long time and then asked, "Is that the Xuanzang who is the son of Grand Secretary Chen Guangrui?" 
"Your subject is he," replied Xuanzang with a kowtow. 
"Then you were indeed well chosen," said the Emperor with satisfaction. "You are indeed a monk of virtuous conduct of a mind devoted to meditation. I give you the offices of Left Controller of the Clergy, Right Controller of the Clergy, and Hierarch of the Empire." Xuanzang kowtowed to express his thanks and accepted the appointments. The Emperor then gave him a multicolored golden cassock and a Vairocana miter, telling him to be sure he conscientiously continued to visit enlightened monks, and giving him the position at the top of the hierarchy. He gave him a decree in writing ordering him to go to the Huasheng Temple to pick a propitious day and hour on which to begin the recitations of the scriptures. 
Xuanzang bowed, took the decree, and went to the Huasheng Temple where he assembled many monks, had meditation benches made, prepared for the mass, and chose the music. He selected a total of twelve hundred high and humble monks of enlightenment, who he divided into an upper, a middle and a lower hall. All the holy objects were neatly arranged before all the Buddhas. The third day of the ninth month of that year was chosen an auspicious day on which to start the seven times seven days of the Great Land and Water Mass. 
This was all reported to the throne, and at the appointed time Taizong, the high civil and military officials, and the royal family went to the service to burn incense and listen to the preaching. There is a poem to prove it that goes: 
At the dragon assembly in the thirteenth year of Zhen Guan 
The Emperor called a great meeting to talk about the scriptures. 
At the assembly they began to expound the unfathomable law, 
While clouds glowed above the great shrine. 
The Emperor in his grace orders the building of a temple; 
The Golden Cicada sheds his skin to edify the West. 
He spreads the news that rewards for goodness save from ill, 
Preaching the doctrine of the three Buddhas of past and future. 
In the year jisi, the thirteenth of Zhen Guan, on the day jiaxu, the third of the ninth month, the Hierarch Chen Xuanzang assembled twelve hundred venerable monks at the Huasheng Temple in the city of Chang'an for a chanting of all the holy scriptures. After morning court was over the Emperor left the throne hall in his dragon and phoenix chariot at the head of a host of civil and military officials and went to the temple to burn incense. 
What did the imperial chariot look like? Indeed 
Propitious vapours filled the sky 
That shone with ten thousand beams of sacred light. 
A mellow breeze blew softly, 
The sunlight was strangely beautiful. 
A thousand officials with jade at their belts walked in due order. 
The banners of the five guards are drawn up on either side. 
Dragons fly and phoenixes dance, 
True is the enlightened Son of Heaven, 
Good are his just and loyal ministers. 
This age of prosperity surpasses the time of Shun and Yu; 
The eternal peace he has given outdoes that of Yao and Tang. 
Under a parasol with curved handle 
The dragon robe sweeps in, 
Shimmer with a magic glow. 
Pearl crowns and belts of jade, 
Gold seals on purple cords. 
A thousand regiments of soldiers protect the imperial chariot, Two lines of generals carry the royal chair. 
Bathed and reverent, the Emperor comes to worship the Buddha, 
Submitting to the True Achievement as he joyfully burns incense. 
When the carriage of the Tang Emperor reached the temple, orders were given to stop the music as he descended from the vehicle and went at the head of his officials to bow to the Buddha and burn incense. When he had done this three times he looked up and saw what a magnificent assembly it was: Dancing banners, 
The sky shook with the clouds of silk; 
The sun gleamed as the red lightning flashed. 
Perfect the image of the statue of the Honoured One, 
Mighty the grandeur of the Arhats' countenances. 
Censers burning sandalwood and laka. 
As the fairy flowers stand in vases 
Trees like brocade fill the temple with their brightness. 
As the censers burn sandalwood and laka 
Clouds of incense rise to the azure heaven. 
Fresh fruit of the season is piled in vermilion dishes, 
Exotic sweets are heaped on the silk−covered tables. 
Serried ranks of holy monks intone the surras 
To save abandoned souls from suffering. 
Taizong and his civil and military officials all burned incense, bowed to the golden body of the Lord Buddha, and paid their respects to the Arhats. The Hierarch Chen Xuanzang then led all the monks to bow to the Emperor, and when this was over they divided into their groups and went to their meditation places while the Hierarch showed the Emperor the notice about the delivery of the lonely ghosts. It read: 
"Mysterious is the ultimate virtue, and the Sect of Meditation leads to Nirvana. The purity of the truth is all−knowing; it pervades the Three Regions of the universe. Through its countless changes it controls the Negative and Positive; unbounded are the embodiments of the eternal reality. In considering those forlorn ghosts one should be deeply distressed. At the sacred command of Taizong we have assembled some chosen monks for meditation and preaching. He has opened wide the gates of enlightenment and rowed far the boat of mercy, saving all the beings in the sea of suffering, and delivering those who had long been afflicted by the six ways of existence. They will be led back to the right road and revel in the great chaos; in action and in passivity they will be at one with primal simplicity. For this wonderful cause they are invited to see the purple gates of the pure capital, and through our assembly they will escape from the confines of Hell to climb to the World of Bliss and be free, wandering as they please in the Paradise of the West. As the poem goes: A burner of incense of longevity, 
A few spells to achieve rebirth. 
The infinite Law is proclaimed, 
The boundless mercy of Heaven is shown. 
When sins are all washed away, 
The neglected souls leave Hell. 
We pray to protect our country; 
May it stay at peace and be blessed." 
When he had read this the Tang Emperor's heart was filled with happiness and he said to the monks, "Hold firm to your sincerity and never allow yourselves a moment's slackness in the service of the Buddha. Later on, when the Assembly is over, you will be blessed and we shall richly reward you. You shall certainly not have labored in vain." The twelve hundred monks all kowtowed to thank him. When the three vegetarian meals for the day were over the Tang Emperor went back to the palace. He was invited to come back to the Grand Assembly to burn incense once more on the seventh day. As evening was now drawing in all the officials went away. It was a fine evening: 
A light glow suffused the boundless sky; 
A few crows were late in finding their roosts. 
Lamps were lit throughout the city as all fell still; 
It was just the hour for the monks to enter the trance. 
We will omit a description of the night or of how the monks intoned the scriptures when their master took his seat again the next morning. 
The Bodhisattva Guanyin from Potaraka Island in the Southern Sea had been long in Chang'an, looking on the Buddha's orders for the man to fetch the scriptures, but she had not yet found anyone really virtuous. Then she heard that Taizong was propagating the True Achievement and selecting venerable monks for a Grand Assembly, and when she saw that the Master of Ceremonies was the monk Jiangliu who was really a Buddha's son came down from the realms of supreme bliss, an elder whom she herself had led into his earthly mother's womb, she was very pleased. She took her disciple Moksa and the treasures that the Buddha had given her out on the street to offer them for sale. 
Do you know what these treasures were? There was a precious brocade cassock and−a monastic staff with nine rings. She also had those three golden bands, but she put them away safely for future use; she was only selling the cassock and the staff. 
There was a monk in Chang'an city too stupid to be chosen for the service but who nonetheless had some ill−gotten banknotes. When he saw the bald, scabby, barefoot figure wearing a tattered robe−−the form the Bodhisattva had taken−−offering the cassock of dazzling beauty for sale he went up and asked, "How much d'you want for that cassock, Scabby?" 
"The price of the cassock is five thousand ounces of silver and the staff two thousand," replied the Bodhisattva. The stupid monk roared with laughter. 
"You must be a nutcase, Scabby, or else a dope. Those two lousy things wouldn't be worth that much unless they gave you immortality and turned you into a Buddha. No deal. Take'em away." 
Not bothering to argue, the Bodhisattva walked on with Moksa. After they had been going for quite a long time they found themselves in front of the Donghua Gate of the palace, where the minister Xiao Yu happened to be returning home from morning court. Ignoring the crowd of lictors who were shouting to everyone to get out of the way, the Bodhisattva calmly went into the middle of the road with the cassock in her hands and headed straight for the minister. When the minister reined in his horse to look he saw the cassock gleaming richly and sent an attendant to ask its price. 
"I want five thousand ounces of silver for the cassock and two thousand for the staff," said the Bodhisattva. 
"What's so good about the cassock to make it worth that much?" asked Xiao Yu. 
"On the one hand it is good and on the other it isn't," replied the Bodhisattva. "On the one hand it has a price and on the other it hasn't." 
"What's good about it and what isn't?" asked the minister. 
"Whoever wears this cassock of mine will not sink into the mire, will not fall into Hell, will not be ensnared by evil and will not meet disaster from tiger or wolf: these are its good points. But as for a stupid monk who is greedy and debauched, who takes delight in the sufferings of others, does not eat vegetarian food, and breaks the monastic bans; or a common layman who harms the scriptures and slanders the Buddha−−such people have great difficulty even in seeing this cassock of mine: that is its disadvantage." 
"What did you mean by saying that it both has a price and hasn't got one?" asked the minister, continuing his questions. 
"Anyone who doesn't obey the Buddha's Law or honour the Three Treasures but still insists on buying the cassock and the staff will have to pay seven thousand ounces for them: in that case they have a price. But if anyone who honors the Three Treasures, takes pleasure in goodness, and believes in our Buddha, wants to have them, then I'll give him the cassock and staff as a gift. In that case they have no price." Xiao Yu's cheeks coloured, showing that he was a good man, and he dismounted to greet the Bodhisattva. 
"Elder of the Great Law," he said, "forgive me. Our Great Tang Emperor is a true lover of goodness, and every one of the civil and military officials in his court acts piously. This cassock would be just right for the Hierarch, Master Chen Xuanzang, to wear in the Great Land and Water Mass that is now being conducted. 
You and I shall go into the palace to see His Majesty." 
The Bodhisattva gladly followed him as he turned around and went straight in through the Donghua Gate. The eunuchs reported their arrival, and they were summoned to the throne hall. Xiao Yu led the two scabby monks in, and they stood beneath the steps of the throne. 
"What have you come to report, Xiao Yu?" the Emperor asked. Xiao Yu prostrated himself in front of the steps and replied, "When your subject went out through the Donghua Gate I met two monks who were selling a cassock and a staff. It occurred to me that this cassock would be suitable for Master Xuanzang to wear. So I have brought the monks for an audience with Your Majesty." The delighted Taizong asked how much the cassock cost. Still standing beneath the steps, and not making any gestures of courtesy, the Bodhisattva and Moksa replied, "The cassock costs five thousand ounces of silver, and the staff two thousand." 
"What advantages does the cassock have to make it worth so much?" the Emperor asked. To this the Bodhisattva replied: 
Has a strand of dragon cape, 
To save from being eaten by the Roc, 
And a thread of a stork jacket, 
To deliver from mortality and lead to sainthood. 
Ten thousand spirits come to pay homage; 
The Seven Buddhas will be with you. 
"This cassock is made of silk reeled from giant ice−worms, Twisted into yarn by skilful craftsmen, 
The strips of cloth are joined with embroidered seams, 
Each piece thick with brocade. 
The openwork decoration has a flower pattern 
Shimmering with color, shining with jeweled beauty. 
The wearer of the cassock is wreathed in red mist, 
And when it is taken off, coloured clouds fly. 
Its primal light slipped out through the Three Gates of Heaven, The magic vapour arose before the Five Sacred Peaks. 
It is embroidered with layer upon layer of passion−flowers, 
And gleams with pearls that shine like stars. 
At the four corners are night−shining pearls, 
Set at the top is an emerald. 
Although it does not completely illuminate the Original Body 
It shines with the light of the Eight Treasures. 
And will only be worn by a sage. 
A rainbow shines through its thousand layers of wrapping; 
When it is worn by a sage, 
It will astonish the heavenly spirits and scare all demons. 
On top is an as−you−wish pearl, 
And a wind−calming pearl; 
And relics of the Buddha. 
They steal the white of the moon, 
Rival the sun in redness. 
Their magic essence fills the sky, 
Their auspicious light honors the sage. 
Their magic essence fills the sky, 
Shining through the gates of Heaven; 
Their auspicious light honors the sage, 
Illuminating the whole world. 
Shining on mountains and rivers, 
The essence frightens tigers and leopards; 
Illuminating oceans and islands, 
The light startles fishes and dragons. 
At the side are two rows of gold−plated hooks, 
At the neck are loops of whitest jade." 
There is a poem that goes: 
"Great are the Three Jewels, and honoured be the Way; 
The Four Kinds of Life and Six Paths are all explained. 
Whoever knows and teaches the law of Man and Heaven, 
Can pass on the lamp of wisdom when he sees his original nature. 
It protects the body and makes it a world of gold, 
Leaves body and mind pure as an ice−filled jar of jade. 
Ever since Buddha made his cassock 
No one will ever dare to end the priesthood." 
When the Tang Emperor heard these words spoken in his throne hall he was filled with joy, and he asked another question: "Monk, what is so wonderful about your nine−ringed staff?" 
"This staff of mine," the Bodhisattva replied, "is: A nine−ringed iron staff inlaid with copper, 
A nine−sectioned Immortal's cane to preserve eternal youth. 
Held in your hand it's as light as a bone, 
As you go down the mountain it brings white clouds. 
The Fifth Patriarch took it through the gates of Heaven; 
When Lo Bu searched for his mother he used it to smash the gates of Earth. 
Untouched by the filth of mortal dust, 
It gladly accompanies the godly monk as he climbs the jade mountain." 
The Tang Emperor then ordered that the cassock be unfolded. On examining it from top to bottom he saw that it was indeed a fine article. 
"Elder of the Great Law," he said, "I tell you truthfully that I am now propagating the good word and widely sowing seeds of blessing. At this moment many monks are assembled at the Huasheng Monastery for recitation of the surras. Among them is one monk of outstanding virtue whose Buddha−name is Xuanzang, and we wish to buy those two treasures of yours to give him. So what is your price?" 
The Bodhisattva and Moksa put their hands together, intoned the name of the Buddha, and bowed down. "If he really is a virtuous monk," she said, "I shall give them to him, and I refuse to accept any money for them." 
With that she turned and left. 
The Emperor immediately told Xiao Yu to stop her as he rose to his feet and called out, "You told us that you wanted five thousand ounces for the cassock and two thousand for the staff, but now that we have said we shall buy them, you refuse to take any money. Are you going to say that I abused my power to seize your things? We would never dream of it. We shall pay the price you asked, and will take no refusal." 
Raising her hand the Bodhisattva said, "I made a vow that I would give them free to anyone who honoured the Three Treasures, delighted in goodness, and believed in our Buddha. Now I have seen that Your Majesty is a good and virtuous respecter of our Buddhist faith, and have heard that there is a monk of virtuous conduct who preaches the Great Law, it is only right that I should offer them to him; I don't want any money for them. 
I am leaving the things here. Good−bye." The Tang Emperor was very pleased with the monk's sincerity, and ordered that a large vegetarian banquet be given to thank him in the Imperial Kitchen. This the Bodhisattva refused to accept and went airily off. There is no need to describe how she returned to her hide−out in the local god's temple. 
Taizong arranged for a court to be held at midday and sent Wei Zheng with a decree summoning Xuanzang to attend. He found the monastic official assembling the monks as he climbed the rostrum for the chanting of surras and gathas. The moment he heard the decree he came down from the rostrum, tidied his clothes, and went with Wei Zheng to the imperial presence. 
"Up till now we have had nothing suitable with which to thank you, Your Grace, for your efforts in acquiring merit. This morning Xiao Yu met two monks who have vowed to give you a precious brocade cassock and a nine−ringed monk's staff. We have therefore sent for you, Master, to come and receive them," said the Emperor. Xuanzang kowtowed in thanks. 
"If you do not reject it, Your Grace, let us see what it looks like on you." Xuanzang shook it open, draped it across his shoulders, took the staff in his hand, and stood respectfully before the steps of the throne. The monarch and all his ministers were overjoyed. He truly was a son of the Tathagata. Look at him: 
How elegant his imposing features; 
His Buddha−vestments fit as if they had been made for him. 
The glow radiating from them fills Heaven and Earth, 
While the colours crystallize in the sky. 
Rows of gleaming pearls above and below, 
Layers of golden threads joining front and back. 
A hood edged with brocade, 
Embroidered with ten thousand strange designs. 
Patterns of the Eight Treasures hold the threads of the buttons, While the golden collar is fastened with catches of velvet. 
The Buddha−Heavens are set out in order of eminence, 
While to left and right are the high and humble stars. 
Great is the destiny of Xuanzang Master of the Law, 
Who is worthy to accept this gift at present. 
He is just like a living Arhat, 
Excelling the Enlightened One of the West. 
On the monkish staff the nine rings clink, 
And richly glows the Vairocana miter. 
How true that be is a Buddha's son; 
It is no lie that he has surpassed enlightenment. 
All the civil and military officials cried out with admiration, and the Emperor was delighted. Telling the Master of the Law to put the cassock on properly and take the staff, he granted him two bands of ceremonial attendants and had a host of officials see him out of the palace and walk with him to his monastery. It was just like the procession for a top graduate in the palace examination. Xuanzang bowed once more to thank the Emperor and then set out, striding majestically along the highway. All the travelling merchants, the shop−keepers, the fashionable young men, the professional scribes, the men and women, young and old, in the city of Chang'an fought to get a look at him and praise him. 
"What a splendid Master of the Law," they said. "He's an Arhat come down to earth, a living Bodhisattva come to see us mortals." Xuanzang went straight to his monastery, where all the monks left their places of meditation to welcome him. When they saw the cassock he was wearing and the staff in his hand they all said that King Ksitigarbha had come, did homage to him, and stood in attendance to right and left. Ascending the main hall, Xuanzang burned incense and worshipped Buddha, and when he had given an account of the Emperor's grade they all returned to their seats for meditation. Nobody noticed that the red wheel of the sun was now sinking in the West. 
As the sun sinks, plants and trees are veiled in mist 
While the capital echoes to the bell and drum. 
After three chimes of the bell nobody moves: 
The streets throughout the city are still. 
The monastery gleams with the light of its lamps; 
The village is lonely and silent. 
The Chan monks enter the trance and repair damaged sutras. 
A good way to purify oneself of evil and nourish the true nature. 
Time passed in the snap of a finger, and it was time for the special assembly on the seventh day, so Xuanzang wrote a memorial inviting the Tang Emperor to come and burn incense. His reputation for piety had now spread throughout the empire. Taizong therefore led a large number of civil and military officials and his empresses, consorts and their families to the monastery in a procession of carriages to the temple early that morning. Everyone in the city, whether young or old, humble or mighty, went to the temple to hear the preaching. 
The Bodhisattva said to Moksa, "Today is a special day of the Great Mass of Land and Water, which will go on from this first seventh day to the seventh seventh day, as is proper. You and I are going to mingle with the crowds for three reasons: to see the service, to see the Golden Cicada enjoying the blessing of wearing our treasure, and to hear what branch of the scriptures he preaches on." The pair of them went to the temple. They were fated to meet their old acquaintance, just as the Wisdom returned to its own preaching place. When they went inside the monastery they saw that this great and heavenly dynasty surpassed any other in the world; 
while the Jetavana Monastery and Sravana were no match for this temple. Sacred music sounded clear above the shouting of Buddha names. When the Bodhisattva approached the preaching dais she saw in Xuanzang the likeness of the wise Golden Cicada. As the poem goes: 
Pure in every image, free of every speck of dirt, 
The great Xuanzang sat on his lofty dais. 
The lonely souls who have been delivered come in secret, 
While the well−born arrive to hear the law. 
Great is his wisdom in choosing suitable methods; 
All his life he has opened the doors of the scriptures. 
As they watch him preach the infinite Law, 
The ears of young and old alike are filled with joy. 
As Guanyin went to the temple preaching hall 
She met an old acquaintance who was no common mortal. 
He spoke about every current matter, 
And mentioned the achievements of many a mortal era. 
The clouds of the Dharma settle over every mountain, 
The net of the teaching spreads right across the sky. 
If one counts the number of pious thoughts among humans 
They are as plentiful as raindrops on red blossom. 
On his dais the Master of the Law read through the Sutra to Give Life and Deliver the Dead, discussed the Heavenly Charm to Protect the Country and preached on the Exhortation to Cultivate Merit. The Bodhisattva went up to the dais, hit it, and shouted out at the top of her voice, "Why are you only talking about the doctrine of the Little Vehicle, monk? Can you preach about the Great Vehicle?" 
On hearing these questions a delighted Xuanzang leapt down from the preaching dais, bowed to the Bodhisattva, and said, "Venerable teacher, your disciple has sinned grievously in failing to recognize you. We monks who stand before you only preach the law of the Little Vehicle, and we know nothing of the doctrine of the Great Vehicle." 
"That doctrine of the Little Vehicle of yours will never bring the dead to rebirth; it's only good enough for a vulgar sort of enlightenment. Now I have the Three Stores of the Buddha's Law of the Great Vehicle that will raise the dead up to Heaven, deliver sufferers from their torments, and free souls from the eternal coming and going." 
As the Bodhisattva was talking, the Master of Incense, an official who patrolled the temple, made an urgent report to the Tang Emperor that just when the Master of the Law was in the middle of preaching the wonderful Law a pair of scabby itinerant monks had dragged him down and were engaging him in wild argument. The Emperor ordered them to be arrested and brought before him, and a crowd of men hustled the two of them into the rear hall of the monastery. 
When they saw Taizong they neither raised their hands in greeting nor bowed, but looked him in the eye and said, "What does Your Majesty want to ask us about." 
Recognizing them, the Emperor asked, "Are you not the monk who gave us the cassock?" 
"That's right," replied the Bodhisattva. 
"If you came here to listen to the preaching you should be satisfied with getting something to eat," said Taizong. "Why did you start ranting at the Master of the Law, disturbing the scripture hall and interfering with our service to the Buddha?" 
"That master of yours was only teaching the doctrine of the Little Vehicle, which will never send the dead up to Heaven," replied the Bodhisattva. "I have the Three Stores of the Buddha's Law of the Great Vehicle, which can save the dead, deliver from suffering, and ensure that the body will live for ever without coming to harm." Showing no signs of anger, Taizong earnestly asked where the Buddha's Law of the Great Vehicle was. 
"It is in the Thunder Monastery in the land of India in the West, where our Buddha lives," the Bodhisattva replied, "and it can untie the knots of all injustice and save the innocent from disaster." 
"Can you remember it?" the Emperor asked, and the Bodhisattva answered "Yes." Taizong then gave orders that this Master of the Law was to be taken to the dais and invited to preach. 
The Bodhisattva and Moksa flew up to the dais, then soared into the sky on magic clouds. She appeared in her own form as the deliverer from suffering, holding a twig of willow in a vase, and Moksa stood beside her as Huian, holding a stick and bristling with energy. The Tang Emperor was so happy that he bowed to Heaven, while his civil and military officials all fell to their knees and burned incense. Everyone in the temple−−monks, nuns, clerics, lay people, scholars, workmen and merchants−−all bowed down and prayed, 
"Good Bodhisattva, good Bodhisattva." There is a description of her appearance: The sacred radiance shines around her, 
The holy light protects her Dharma body. 
In the glory of the highest Heaven 
Appears a female Immortal. 
A plain blue robe with flying phoenixes, 
Patterned with running water, 
On which curled golden dragons. 
Jade−set circlet full of fragrance. 
A skirt of embroidery and brocade from the Jade Pool 
Made from the silk of ice−silkworms, 
That rode on coloured clouds. 
A white and yellow red−beaked parrot, 
To fly across the Eastern Ocean, 
The vase she held gave grace and salvation, 
And in the vase was a sprig of 
Weeping willow to sweep away the fog, 
Scattering water on the heavens, 
Rings of jade looped over brocade buttons 
And her golden−lotus feet were concealed. 
She was able to visit the three heavens, 
For she was Guanyin, the rescuer from suffering. 
Taizong was so entranced that he forgot all about his empire; the ministers and generals were so captivated that they forgot all about court etiquette; and the masses all intoned, "Glory be to the Bodhisattva Guanyin." 
Taizong ordered that a skilled painter was to make a true likeness of the Bodhisattva, and no sooner had the words left his mouth than the brilliant and enlightened portrayer of gods and Immortals, Wu Daozi, was chosen. He was the man who later did the pictures of distinguished ministers in the Cloud−piercing Pavilion. 
Wielding his miraculous brush, he painted a true likeness on the spot. The Bodhisattva's magic cloud slowly faded into the distance, and a moment later the golden light could be seen no more. All that was visible was a note drifting down from the sky on which could be read the following brief address in verse: 
"Greetings to the lord of the Great Tang. 
In the West are miraculous scriptures. 
Although the road is sixty thousand miles long, 
The Great Vehicle will offer its help. 
When these scriptures are brought back to your country 
They will save devils and deliver the masses. 
If anyone is willing to go for them, 
His reward will be a golden body." 
When he had read these lines Taizong issued an order to the assembly of monks: "Suspend this service until we have sent someone to fetch the scriptures of the Great Vehicle, and then you shall once more strive sincerely to achieve good retribution." The monks all obeyed his instructions. The Emperor then asked those present in the monastery, "Who is willing to accept our commission to go to the Western Heaven to visit the Buddha and fetch the scriptures?" 
Before he had finished his question, the Master of the Law came forward, bowed low in greeting, and said, 
"Although I am lacking in ability, I would like to offer my humble efforts to fetch the true scriptures for Your Majesty and thus ensure the eternal security of your empire." The Tang Emperor, who was overjoyed to hear this, went forward to raise him to his feet. 
"Master," he said, "if you are prepared to exert your loyalty and wisdom to the full, not fearing the length of the journey or the rivers and mountains you will have to cross, I shall make you my own sworn brother." 
Xuanzang kowtowed to thank him. As the Tang Emperor was indeed a man of wisdom and virtue he went to a place before the Buddha in the monastery where he bowed to Xuanzang four times, calling him "younger brother" and "holy monk." Xuanzang thanked him effusively. 
"Your Majesty," he said, "I have no virtue or talent that fits me for the sacred honour of being treated as your kinsman. On this journey I shall give my all and go straight to the Western Heaven. If I fail to reach there or to obtain the true scriptures, then I shall not return to this country even in death, and shall fall for eternity into Hell." He burned incense in front of the Buddha to mark this vow. The happy Emperor ordered his chariot to take him back to the palace; later on an auspicious day would be chosen on which Xuanzang would be given a passport and set out. With that he returned and everyone dispersed. 
Xuanzang went back to the Hongfu Monastery, where the many monks and his few personal disciples had already heard that he was going to fetch the scriptures. They came to ask if it was true that he had vowed to go to the Western Heaven. On being told by Xuanzang that it was indeed true, his pupils said, "Teacher, we have heard that the journey to the Western Heaven is a long one, and that there are many tigers, leopards, fiends, and demons on the way. We are afraid that you may lose you life and never come back." 
"I have sworn a great vow that I shall fall into Hell for eternity if I do not get the true scriptures," replied Xuanzang. "Besides, as I have been so favored by His Majesty, I shall have to show my loyalty to the utmost if I am to repay the country for his honour. But it will be a journey into the unknown, and there is no saying what my fate will be. My pupils," he went on to say, "two or three years after I set out, or it may be as much as six or seven, that pine tree inside the monastery gate will turn to the East, which will mean that I am coming back. If it does not, you can be sure that I will not return." All his disciples committed his words most carefully to memory. 
At court the next morning Taizong assembled his civil and military officials and wrote out the document Xuanzang would need to fetch the scriptures, stamping it with the imperial seal that gave the right to travel freely. When an imperial astrologer reported that this day was under an auspicious star for setting out on a long journey, the Tang Emperor was delighted. A eunuch official came in to report, "The Imperial Younger Brother, the Master of the Law, awaits a summons outside the palace doors." Calling him into the throne hall, Taizang said, "Brother, today is a lucky one for starting on a journey, and here is the pass that will let you through the checkpoints. I am also giving you a golden bowl with which you may beg for food on your journey, in addition to choosing two experienced travelers to accompany you and presenting you with a horse to carry you on your long journey. You may now set out." Xuanzang, who was very happy to hear this, thanked the Emperor and took the presents. He was now more eager than ever to be off. Taizong and a host of officials went by carriage to accompany him to the checkpoint. When they got there they found that the monks of the Hongfu Monastery and Xuanzang's own disciples were waiting outside with his summer and winter clothing. As soon as he saw this the Tang Emperor ordered that it be packed and horses be provided, then told an official to pour out some wine. Raising his cup he asked, "Brother, what is your courtesy name?" 
"As I am not of the world, I do not have one," replied Xuanzang. "The Bodhisattva said yesterday that there are Three Stores (son zang) of scriptures in the Western Heaven. You, brother, should take a courtesy name from this. What about Sanzang?" 
Thanking the Emperor for his kindness, he accepted the cup of wine with the words, "Your Majesty, liquor is the first of the things from which a monk must abstain, and so I have never drunk it." 
"Today's journey is exceptional," Taizong replied, "and besides, this is a nonalcoholic wine, so you should drink this cup and let us feel that we have seen you off properly." Unable to refuse any longer, Sanzang took the wine, and was on the point of drinking it when he saw Taizong bend down, take a pinch of dust in his fingers, and flick it into his cup. Seeing Sanzang's incomprehension, Taizong laughed and said, 
"Dear brother, when will you return from this journey to the Western Heaven?" 
"I shall be back in this country within three years," Sanzang replied. "The days and years will be long, the mountains will be high, and the road will lead you far away," said Taizong, "so you should drink this wine to show that you have more love for a pinch of dust from home than fir thousands of ounces of foreign gold." 
Only then did Sanzang understand the significance of the pinch of dust, and thanking the Emperor once more he drained the cup, took his leave of him, and went out through the checkpoint. The Emperor went back to the palace. 
If you don't know what happened on the journey, listen to the explanation in the next installment. 

`,
    },
  ],
  [
    13,
    {
      title: `Chapter 13: He Falls into the Tiger's Den and Is Saved by the Planet Venus 
On Double−Forked Peak Boqin Entertains the Priest 
`,
      createdAt: new Date(),
      content: `
The Great Tang Emperor issued an edict 
Sending Sanzang to learn the Dhyana teachings. 
With firmness and patience he seeks the dragon's lair, 
Determined to carry on till he climbs the Vulture Peak. 
On his long journey he will visit many a country; 
Thousands of cloud−capped mountains lie before him. 
Now he leaves the Emperor and sets out for the West 
Cleaving to the faith, and aware of the Great Void. 
It has been told already how Sanzang was seen off at the checkpoint outside Chang'an by the Tang Emperor and a host of officials on the twelfth day of the ninth month in the thirteenth year of Zhen Guan. For two days his horse's hoofs were never still, and he soon reached the Fa Men Monastery, where the abbot came out to meet him at the head of five hundred and more monks drawn up in two lines. Taking Sanzang inside, he greeted him, offered him tea, and then gave him a monastic meal. By the time the meal was over night had fallen. 
As it approached the Milky Way, 
The moon was free from any dust. 
The wild goose called to the distant traveler, 
While washing−boards could be heard by neighbors. 
Roosting birds perch in the withered trees; 
The dhyana monks chant Sanskrit music. 
On their seats with hassocks of rushes 
They sit until the middle of the night. 
In the lamplight the monks were discussing the true teachings of the Buddhist faith and the reasons for going to the Western Heaven to fetch the scriptures. Some said that there would be wide rivers and high mountains to cross, some that there would be many a tiger and leopard along the way, some that the lofty ranges and cliffs would be hard to cross, and some that there would be evil demons and foul fiends difficult to subdue. 
Sanzang kept his lips sealed; he said nothing, only pointing to his heart and nodding occasionally. 
The monks, unable to understand what he meant, put their hands together and asked, "Why do you point to your heart and nod your head, Master?" 
"When the heart and mind live," Sanzang replied, "every kind of evil lives; but when they are extinguished, evil is extinguished too. I made a great vow to the Buddha in the Huasheng Monastery that if I failed to achieve this mission it would not be for lack of trying. I am determined to reach the Western Heaven, where I may see the Buddha and ask for the scriptures, so that the Wheel of the Law may revolve, and our sage Emperor enjoy eternal security." 
On hearing his words the monks all expressed their admiration, saying as if with one voice, "What a loyal and brave Hierarch." With praises still on their lips they invited the Master to go to bed and wished him a peaceful night's sleep. 
Before long the bamboo clappers were sounding for the setting moon, while the cocks greeted the dawn with their crowing. The monks all got up and prepared tea and breakfast. Sanzang put on his cassock and went to worship the Buddha in the main hall. 
"Your disciple Chen Sanzang," he said, "is going to the Western Heaven to fetch the scriptures, but my fleshly eye is too dim to see the true image of the living Buddha. I now vow that whenever I come across a temple on my journey I shall burn incense; whenever I see a Buddha's image I shall worship it; and whenever I pass a stupa I shall sweep it. My only wish is that Buddha in his mercy will soon appear to me in his golden body and give me the true scriptures to take back and propagate in the land of the East." When he had prayed he went back to the abbot's room for breakfast. After breakfast his two attendants saddled the horse and set off at a good pace. At the gate of the monastery Sanzang took his leave of the monks, who were so unwilling to be parted from him that they accompanied him for some three miles before turning back with tears in their eyes, while Sanzang carried on Westwards. It was autumn weather: 
Leafless the village trees, and fallen the reed flowers; 
The red leaves had dropped from maple and willow. 
The way was foggy and damp, and few were the friends that he met. 
Beautiful the yellow chrysanthemums, 
Delicate the mountain spurs; 
Sad to see the lotus withered now the water was cold. 
White duckweed and red smartweed were turned to snow by the frost. 
Solitary ducks coming down from the clouds, dropping from the sky, Where pale and wispy clouds were scudding. 
The swallows had departed, 
The migrant geese were here, 
And their honking shattered the night. 
When the master and his attendants had been travelling for several days they reached the city of Gongzhou, where all the local officials were waiting to greet them and take them into the city. After a night's rest they set out again the next morning. They ate when they were hungry and drank when they were thirsty, travelling by day and stopping at night. Two or three days later they reached the garrison city of Hezhou, which was on the frontier of the Great Tang Empire. The garrison commander and the local Buddhist monks and priests had all heard that the Master of the Law, the Imperial Younger Brother, was going to the West on His Majesty's orders to see the Buddha, so they were all very respectful. The Director of Monks took him into the city, provided him with all he needed, and invited him spend the night in the Fuyuan Monastery. All the monks of the monastery came to pay their respects to him, and when he had finished the meal they prepared for him he told his attendants to give the horse a good feed as they would be setting out before dawn. As soon as the cocks started to crow he called for his attendants, thus disturbing the monks, who brought him tea and food. 
When he had eaten he crossed the frontier. 
In his impatience Sanzang had got up too soon. As it was late autumn the cocks had crowed very early, and it was still only about two in the morning. The three of them−−four, including the horse−−covered about a dozen miles through the frost, finding their way by the light of the moon, until they saw a large mountain in front of them. They had to push the undergrowth aside as they looked for their way, and the going was indescribably rough and difficult. Just when they were wondering whether they were lost, all three of them and the horse stumbled and fell into a pit. 
Sanzang was thrown into a panic, and his attendants were trembling with fear, when to add their terror they heard roars coming from further inside and loud shouts of, "Get'em! Get'em!" With a ferocious blast of wind a crowd of fifty or sixty fiends fell upon them and dragged them out. When the shivering and shaking Master of the Law took a stealthy look he saw a thoroughly evil demon king sitting above them. Truly he was Mighty of stature, 
His eyes flashed like lightning, 
His thunderous voice shook the four quarters. 
Protruding, saw−edged teeth; 
Bared fangs like chisels. 
His body was clad in brocade, 
And his back was covered with its patterns. 
A beard of steel concealing his face, 
Hooked claws sharp as frost: 
The white−browed king of the Southern mountain, 
Feared by the Yellow Lord of the Eastern Sea. 
The sight of him frightened Sanzang out of his wits and made his two attendants feel their bones turn to jelly and their muscles go numb. When the demon king roared out an order to tie them up the fiends bound them with rope. He was just on the point of devouring them when a great noise was heard outside and the arrival of Mountain Lord Bear and Hermit Ox was announced. Sanzang looked up and saw that one of them was a dark fellow. Can you imagine what he looked like? 
Light and strong in body, 
Powerful in crossing rivers, 
Showing his awesome might as he runs through the woods. 
Always blessed with lucky dreams, 
He now revealed his unique valour. 
He could uproot and snap a green tree, 
And when he left cold he could change the weather. 
Clearly he shows his miraculous powers, For which he is known as the Mountain Lord. 
Behind him Sanzang saw a fat man. Do you know what he looked like? 
A hat with two towering horns, 
His shoulders squarely set. 
He liked to wear dull−coloured clothes, 
And his pace was always sluggish. 
His male ancestors were called Bull; 
His mother was known as Cow, 
As he could work for farmers, 
When these two came swaggering in, the demon king rushed out to greet them. "General Yin," said Mountain Lord Bear, "I must congratulate you: you're always so successful." 
"General Yin," said Hermit Ox, "my felicitations on being ever−victorious." 
"How have things been with you two gentlemen recently?" asked the demon king. 
"Much as usual," replied Mountain Lord. 
"I get by," answered the Hermit. These preliminaries over, the three of them sat down to laugh and joke together. 
Sanzang's two attendants meanwhile were howling pitifully in their bonds. 
"How did those three get here?" asked the dark fellow. 
"They delivered themselves to the front door," the demon king replied. 
"Will you be serving them to your friends?" asked the Hermit with a smile. 
"I should be honoured to," answered the demon king. 
"We won't need them all," remarked the Mountain Lord. "We could eat two and keep the third." With a 
"na−a−aw" of obedience the demon king told his servants to cut open the two attendants, scoop their hearts out, and chop their bodies into mince. He presented the heads, hearts, and livers to his two guests, eating the limbs himself and dividing the rest of the flesh and bones among the fiends. All that could be heard was a crunching and a munching that sounded just like tigers devouring lambs, and in a few moments it had all been eaten up. Sanzang was almost dead with fright, yet this was only his first tribulation, coming so soon after leaving Chang'an. 
In his despair he noticed that the East was beginning to grow light, and when dawn broke the two monsters left, saying, "We have been handsomely entertained today, and we shall repay your hospitality in full another day." With that they both rushed out. A moment later the red sun rose high in the sky, but Sanzang was too befuddled to know where he was. Just when all seemed lost, an old man appeared, walking towards him with the help of a stick. He came up to Sanzang, broke all his bonds with a wave of his hand, and revived him by blowing into his face. Sanzang fell to his knees and bowed low to him, saying, "Thank you, venerable ancient, for saving my humble life." 
The old man returned his bow and said, "Get up. Have you lost anything?" 
"My attendants have been eaten by monsters, and I don't know where my baggage or my horse is," replied Sanzang. 
The old man pointed with his stick and asked, "Isn't that a horse with two baggage−rolls over there?" When Sanzang turned round he saw that his things had not been lost after all, which somewhat relieved his anxiety. 
"Venerable sir," he asked, "What is this place, and how did you get here?" 
"This is the Double Forked Mountain, where tigers and leopards make their dens. How did you fall in here?" 
"I crossed the frontier at the garrison city of Hezhou at cockcrow, not realizing that I had got up too early," replied Sanzang. "Just as we were making our way through frost and dew we suddenly fell into this pit. A dreadfully ferocious demon king appeared and had me and my attendants tied up. Then a dark fellow called Mountain Lord Bear and a fat one called Hermit Ox came in, and they addressed the demon king as General Yin. The three of them ate up my two attendants, and their party only ended at dawn. I cannot imagine why I should have been fated with the good fortune of you coming to rescue me, venerable sir." 
"The Hermit is a wild bull spirit, the Mountain Lord is a bear spirit, and General Yin is a tiger spirit," the old man replied. "The fiends who serve him are mountain spirits, tree devils, monsters, and wolves. The reason they did not eat you was because your fundamental nature is enlightened. Come with me and I'll show you the way." Overcome with gratitude, Sanzang put the packs on his horse and led it by the bridle as he followed the old man out of the pit and on to the main road. Tying the horse to a bush beside the road, he turned round to bow low to the old man and thank him, but the old man changed into a puff of wind and rose into the sky on the back of a red−crested white crane. All that could be seen was a piece of paper drifting down in the wind with four lines of verse written on it: 
"I am the Planet Venus of the Western Heaven, 
Who came to save your life. 
In the journey ahead you will have divine disciples: 
Do not in your troubles feel angry with the scriptures." 
When he had read this Sanzang worshipped Heaven and said, "Many thanks, Planet, for delivering me from this danger." This done, he continued on his difficult journey, feeling very lonely as he led his horse along. On this mountain there were 
Cold rains and winds howling in the trees, 
Streams splashing noisily down gullies, 
Screens of rocks and boulders. 
Deer and ape made raucous howls, 
Roebuck and muntjac ran in herds. 
Many were the songs of birds. 
But there was no trace of man. 
Was trembling and uneasy; 
Could barely lift its hoofs. 
Sanzang did not spare himself as he pressed ahead amid the mountain peaks. He had been going for many hours without seeing any sign of a human house; he was hungry and finding the going heavy. Just at this critical moment he saw in front of him a pair of ferocious tigers roaring, while two long snakes were coiled up behind him. To his left were venomous reptiles, and to his right were terrible monsters. Being by himself and unable to think of a way out, Sanzang prepared to abandon his mind and body and let Heaven do as it would. 
Besides, the horse's back was now so tired and its legs so bent that it fell to its knees on the ground and collapsed. Sanzang could not move it, either by blows or by dragging at its bridle. 
The poor Master of the Law, who had nowhere to shelter, was feeling thoroughly wretched, convinced that nothing could save him from death. But when his troubles were at their worst someone came to his rescue. 
Just when all seemed lost he saw the venomous reptiles and the evil monsters flee, while the tigers and the snakes hid themselves. Sanzang looked up and saw a man coming across the hillside with a steel trident in his hand and bow and arrows at his waist. Just look and see what a fine chap he was: On his head 
A leopard skin hat with artemisia patterns: 
Round his waist was tied a lion belt, 
On his feet a pair of deerskin boots. 
His eyes were as round as an evil spirit's; 
His curly beard was like the evil god of the moon's. 
From his waist hung a bow with poisoned arrows, 
And in his hand was a steel−tipped trident. 
The thunder of his voice would make a wild beast tremble, 
And his ferocity terrified the pheasants. 
Seeing him approach, Sanzang knelt down beside the path, put his hands together, and shouted at the top of his voice, "Spare me, bandit king, spare me." The man went over to him, put down his trident, and raised him to his feet. 
"Don't be frightened, venerable monk," he said, "I'm not a bad man; I'm a hunter who lives in these mountains. My name is Liu Boqin and I am known as the warden of the mountain. I came along here because I wanted a couple of animals for the pot. I never expected to meet you here−−I must have offended you." 
"I am a monk sent by the Emperor of the Great Tang to visit the Buddha in the Western Heaven and ask for the scriptures," Sanzang replied. "I had just got here when I found myself completely surrounded by wolves, tigers, snakes and other creatures, which meant that I could go no further. Then suddenly you appeared, High Warden, and saved my life. Thank you very much indeed." 
"Those of us who live here," replied Liu Boqin, "can only support ourselves by killing tigers and wolves, and catching snakes and other reptiles, which is why all those animals fled in terror from me. As you are from the Tang Empire, we are compatriots. This is still the territory of the Great Tang, and I am a Tang citizen. Both of us depend on the Emperor's lands and rivers for our food and drink, and we are fellow−countrymen, so there is nothing to fear. You must come with me to my hut, and your horse can rest. I'll take you on your way tomorrow." Sanzang, who was delighted to hear this, thanked him and went along behind him, leading the horse. 
When they had crossed the mountainside they heard a sound like the howling of a wind. "Sit down here and don't move, venerable monk," said Boqin. "That noise like a wind means that a mountain cat is coming. Just wait a moment while I catch it, then I can take it home to feed you with." This news so terrified Sanzang that he dared not move. The high warden was striding forward, brandishing his trident, to meet the animal, when a striped tiger appeared in front of him. At the sight of Liu Boqin the animal turned to flee, but the high warden let out a thunderclap of a shout: "Where d'you think you're going, wretch?" When the tiger realized that Liu Boqin was in hot pursuit, it turned and charged him, baring its claws. The high warden raised his trident to meet his opponent. At the sight of all this Sanzang collapsed on the grass, paralyzed with fear; never had he seen anything so terrifying in all his born days. The tiger and the high warden fought a magnificent battle under the mountain: 
The warden bristled, immensely strong. 
The striped tiger snorted out red dust as it showed its might. 
One bared its teeth and brandished its claws, 
The other twisted and turned. 
The trident thrust against the heavens and blotted out the sun; 
The patterned tail stirred up mist and clouds. 
One made wild stabs at the chest, 
The other struck at the head. 
To avoid the blows was to win a new life; 
A hit was an appointment with the King of Hell. 
All that could be heard was the tiger bellowing 
And the high warden shouting. 
Mountains and rivers split open, to the terror of birds and beasts. 
At the high warden's shouts, 
The sky was parted and the stars revealed. 
The tiger's golden eyes were bulging with fury, 
The hunter's valiant heart was full of wrath. 
How admirable was high warden Liu of the mountain, 
How splendid the lord of the beasts of the land. 
As man and tiger fought for victory 
Whoever weakened would lose his life. 
After the pair of them had been fighting for about two hours the tiger's claws began to slacken as it grew tired, and just then the high warden smote him full in the chest with his trident. Its points pierced the animal's liver and heart, a pitiful sight. Within an instant the ground was covered with its blood as the hunter dragged it along the path by its ears. What a man! Without panting, and with his expression unchanged, he said to Sanzang, "What a piece of luck. This mountain cat will be enough! to feed you for a whole day." Sanzang was full of praise for him. 
"High Warden, you really are a mountain god." 
"It was nothing," said Liu Boqin, "so please don't exaggerate. This is all the result of your blessings. Come on, let's skin it and boil up some of its meat as soon as we can so as to get you fed." Holding his trident in one hand and dragging the tiger with the other he led the way, while Sanzang followed, leading his horse. As they wound their way across the mountain, a cottage suddenly came into view. In front of its gate there were: 
Ancient trees reaching to the sky, 
Wild creepers covering the path. 
Cool were the wind and dust in the valleys, 
Strange vapours coiled around the cliffs. 
The scent of wild flowers was all along the path, 
Deep, deep the green of the bamboos. 
Both pretty as a picture. 
The loneliness of autumn, 
Yellow leaves lay fallen beside the path, 
White clouds drifted above the peaks. 
Mountain birds sang in the woods 
While a puppy barked outside the gate. 
When he reached the gate, the high warden Liu Boqin threw down the tiger and shouted, "Where are you, lads?" Three or four servants of strange and repulsive appearance came out, and with much pulling and tugging they carried the tiger in. Boqin told them to skin it at once and prepare it to offer to their guest, then turned round to welcome Sanzang in. When they had formally greeted each other Sanzang bowed to Boqin to thank him for taking pity on him and saving his life. 
"Why bother to thank me? We're fellow countrymen." When Sanzang had been offered a seat and served with tea, an old woman came out to greet him followed by a young one. Liu Boqin explained that they were his mother and his wife. 
"Madam, please take the highest seat while I bow to you," said Sanzang. 
"You are a guest from afar, venerable monk, so let us each preserve our dignity and neither bow to the other," 
"Mother," said Liu Boqin, "he has been sent by His Majesty the Tang Emperor to go to the Western Heaven to see the Buddha and fetch the scriptures. I met him on the mountain, and I thought that as we were fellow−countrymen I should invite him home to rest before I take him on his way tomorrow." The old woman was delighted. 
"Good, good," she said. "But it would be even better to ask him to stay longer. Tomorrow is the anniversary of your father's passing away, and I would like to trouble the venerable monk to say some prayers and read a sutra for him; you could take him on his way the day after." Although this Boqin was a tiger−killer and the high warden of the mountain, he was a dutiful son, and when he heard this suggestion he made ready paper and incense and asked Sanzang to stay. 
While they talked they had not noticed the evening drawing in. The servants set out a table and stools, then brought in several dishes of tender tiger−meat, which they placed steaming hot on the table. Liu Boqin asked Sanzang to help himself while he served the rice. Putting his hands together in front of his chest, Sanzang replied, "This is wonderful, but I must tell you frankly that I have been a monk ever since I left my mother's womb, so I am quite unable to eat meat." Boqin thought for a while before replying, "Venerable monk, our family has not eaten vegetarian food for generations. When we cut bamboo shoots, pick fungus, gather wild vegetables for drying, or make bean−curd we always cook them in the fat of roebuck, deer, tiger or leopard, so even they aren't really vegetarian; and our two cooking pots are steeped in fat, so what are we to do? I'm afraid it was wrong of me to ask you here." 
"There's no need to worry," Sanzang answered. "Please go ahead and eat. I'd go without food for four or five days, or even starve, rather than break the monastic rule about vegetarian food." 
"But we can't have you starving to death," protested Liu Boqin. 
"Thanks to your great kindness, High Warden, I was saved from the packs of tiger and wolves. Even if I were to starve to death, it would be better than providing a meal for tigers." 
Liu Boqin's mother, who had been listening to their conversation, said, "Don't talk nonsense, son. I've got some vegetarian things that we can offer to him." 
"Where did you get them from?" Liu Boqin asked, to which mother replied, "Never you mind how, but I've got them." She told her daughter−in−law to take down the little cooking−pot, burn the fat out of it, scrub it and wash it several times over, then put it back on the stove. Then they half filled it with boiling water that they threw away. Next she poured boiling water on mountain−elm leaves to make tea, boiled up some millet, and cooked some dried vegetables. This was then all put into two bowls and set on the table. Then the old woman said to Sanzang, "Please eat, venerable monk. This is completely pure tea and food that I and my daughter−in−law have prepared." Sanzang thanked them and sat down in the seat of honour. Another place was laid for Liu Boqin, where were set out bowls and dishes full of the meat of tiger, roebuck, snake, fox, and hare, as well as dried venison, all cooked without salt or sauce, which he was going to eat while Sanzang had his vegetarian meal. He had just sat down and was on the point of picking up his chopsticks when he noticed Sanzang put his hands together to recite some scripture, which so alarmed him that instead of picking up his chopsticks he stood beside him. When Sanzang had recited a few lines he urged Boqin to eat. 
"Are you a short−sutra monk then?" Boqin asked. 
"That wasn't a sutra, it was a grace before eating." 
"You get up to all sorts of tricks. Fancy reciting sutras at mealtimes," was Boqin's comment. 
When the meal was over and the dishes had been cleared away, Liu Boqin invited Sanzang out into the gathering darkness for a stroll at the back. They went along an alley and came to a thatched hut. On pushing the door open and going in Sanzang saw bows and crossbows hanging on the walls and quivers filled with arrows. From the beams were slung two gory and stinking tiger−skins, and at the foot of the wall were stood many spears, swords, tridents and clubs. In the middle were two seats. Liu Boqin urged Sanzang to sit down, but Sanzang could not bear to stay there long among the horrifying filth, and so he went outside. Going further to the back they came to a large garden full of clumps of yellow chrysanthemums and red maple−trees. 
Then with a whinnying noise about a dozen plump deer and a large herd of roebuck ran out; they were docile and unfrightened on seeing humans. 
"Were those roebuck and deer raised by you?" asked Sanzang. 
"Yes," replied Boqin. "When you Chang'an people have some money you buy valuables, and when you have land you accumulate grain; but we hunters can only keep a few wild animals for a rainy day." Dusk had fallen unnoticed as the two of them talked, and now they went back to the house to sleep. 
Early the next morning the whole family, young and old, got up and prepared vegetarian food for the monk, and then they asked him to start reciting sutras. Sanzang washed his hands, went to the family shrine of the high warden, burned incense there, and worshipped, then beat his "wooden fish" as he recited first a prayer to purify his mouth, then a holy spell to purify his body and mind, and finally the Sutra to Deliver the Dead. 
When he had finished, Boqin asked him to write out a letter of introduction for the dead man and also recite the Diamond Sutra and the Guanyin Sutra. Sanzang recited them in a loud, clear voice and then ate lunch, after which he read out the several chapters of the Lotus Sutra, the Amitabha Sutra, as well as one chapter of the Peacock Sutra and told the story of the cleansing of the bhikshu. By now it was dark, and when they had burned all kinds of incense, paper money, and paper horses for all the gods, and the letter of introduction for the dead man, the service was over and everyone went to bed and slept soundly. 
The soul of Boqin's father, now delivered from being a drowned ghost, came to the house that night and appeared in a dream to everyone in the family. 
"I suffered long in the underworld, unable to find deliverance," he said, "but now that the saintly monk has wiped out my sins by reading some scriptures. King Yama has had me sent back to the rich land of China to be reborn in an important family. You must reward him generously, and no half measures. Now I'm going." 
Great is the significance of the majestic Law, 
That saves the dead from suffering and the morass. 
When they all awoke from their dreams, the sun had already risen in the East. Boqin's wife said, "Warden, your father came to me in a dream last night. He said that he had suffered long in the underworld, and couldn't find deliverance. Now that the saintly monk has wiped out his sins by reading some scriptures, King Yama has had him sent back to the rich land of China to be reborn in an important family. He told us to thank him generously, and no half measures. When he'd said this he went out through the door and drifted away. He didn't answer when I called, and I couldn't make him stay. Then I woke up and realized that it was a dream." 
"I had a dream just like yours," replied Liu Boqin. "Let's go and tell mother about it." As they were on the point of doing this they heard his mother shout, "Come here, Boqin my son. There's something I want to tell you." The two of them went in to her to find the old woman sitting on the bed. 
"My child, I had a happy dream last night. Your father came home and said that thanks to his salvation by the venerable monk, his sins have been wiped out and he has gone to be reborn in an important family in the rich land of China." Husband and wife laughed for joy and her son said, "I and my wife both had this dream, and we were just coming to tell you when you called to us. So now it turns out that you it too." They told everyone in the house to get up to thank Sanzang and get his horse loaded and ready. They all bowed to him and he said, "Many thanks, venerable monk, for recommending my father for delivery from his sufferings and for rebirth. We can never repay this debt of gratitude." 
"What powers have I that you should thank me?" replied Sanzang. 
Boqin told him about what the three of them had been told in their dreams, and Sanzang was happy too. Then they gave him his breakfast and an ounce of silver as an expression of their thanks, but he would not take a single penny of it, although the whole family begged and beseeched him to do so. 
"If in your mercy you could escort me for the next stage of my journey I would be deeply touched," he said. 
All that Boqin, his mother, and his wife could do then was to prepare some scones of coarse wheaten flour as his provisions, and make sure that Boqin escorted him a long way. Sanzang gladly accepted the food. On his mother's orders the high warden told two or three servants to bring hunting gear as they set off together along the road. They saw no end of wild mountain scenery. 
When they had been travelling for some time they saw a mountain in front of them, a high and precipitous one that towered right up to the azure sky. Before long they had reached its base. The high warden climbed it as if he were walking on level ground, and when they were half−way over it he turned round, stood beside the path and said, "Venerable monk, I must ask you to take yourself on from here. I have to go back." On hearing this Sanzang tumbled out of his saddle to say, "Please, please, take me another stage, High Warden." 
"You don't seem to know that this is called Double Boundary Mountain," said the high warden. The Eastern part belongs to our Great Tang, but the Western parts is Tatar territory. The tigers and wolves on that side are not subject to my control, which is why I can't cross the boundary. You mast go on by yourself. The monk was so alarmed to hear this that he waved his arms around and grabbed hold of the hunter's clothes and sleeves, weeping and refusing to let him go. When at last Sanzang was bowing repeatedly to the hunter to take his leave, a shout like thunder came from under the mountain: "My master's come, my master's come." 
Sanzang stood frozen with fear at the sound of it, and Boqin had to hold him up. 
If you don't know who it was who shouted, listen to the explanation in the next installment. 

`,
    },
  ],
  [
    14,
    {
      title: `Chapter 14: The Mind−Ape Returns to Truth 
The Six Bandits Disappear Without Trace 
`,
      createdAt: new Date(),
      content: `
Buddha is the mind, the mind is Buddha, 
Mind and Buddha have always needed things. 
When you know that there are no things and no mind 
Then you are a Buddha with a true mind and a Dharma body. 
A Dharma−bodied Buddha has no form; 
A single divine light contains the ten thousand images. 
The bodiless body is the true body. 
The imageless image is the real image. 
It is not material, not empty, and not non−empty; 
It does not come or go, nor does it return. 
It is not different nor the same, it neither is nor isn't. 
It can't be thrown away or caught, nor seen or heard. 
The inner and outer divine light are everywhere the same; 
A Buddha−kingdom can be found in a grain of sand. 
A grain of sand can hold a thousand worlds; 
In a single body and mind, all dharmas are the same. 
For wisdom, the secret of no−mind is essential, 
To be unsullied and unobstructed is to be pure of karma. 
When you do no good and do no evil, 
You become a Kasyapa Buddha. 
The terror−stricken Liu Boqin and Sanzang then heard another shout of "My master's come." 
"That must be the old monkey who lives in a stone cell under this mountain shouting," said the servants. 
"Yes, yes," said the high warden. 
"What old monkey?" asked Sanzang, and the high warden replied, "This mountain used to be called Five Elements Mountain, and its name was only changed to Double Boundary Mountain when our Great Tang Emperor fought his Western campaign to pacify the country. I once heard an old man say that in the days when Wang Mang usurped the Han throne, Heaven sent down this mountain and crushed a monkey under it. 
This monkey doesn't mind heat or cold and neither eats nor drinks. He's guarded by a local tutelary god who gives him iron pellets when he's hungry and molten copper when he's thirsty. Although he's been there since ancient times, he hasn't died of cold or hunger. It must have been him shouting; there's nothing for you to be afraid of, venerable sir. Let's go down and have a look." Sanzang had to follow him, leading his horse down the mountain. 
A mile or two later they saw that there really was a monkey poking out his head out of a stone cell, and making desperate gestures with his outstretched hands as he shouted, "Master, why didn't you come before? 
Thank goodness you're here, thank goodness. If you get me out of here I guarantee that you'll reach the Western Heaven." 
Do you know what the venerable monk saw when he went forward for a closer look? 
A pointed mouth and sunken cheeks, 
Fiery eyes with golden pupils. 
His head was thick with moss, 
And climbing figs grew from his ears. 
By his temples grew little hair but a lot of grass, 
Under his chin there was sedge instead of a beard. 
Dirt between his eyebrows, 
He was so happy that he rolled his eyes 
And made pleasant noises. 
Although his tongue was nimble, 
He couldn't move his body. 
He was the Great Sage of five hundred years ago, 
Who today could not escape the net of Heaven. 
High warden Liu showed great courage in going up to him, pulling away the grass that was growing beside his temples and the sedge under his chin, and asking, "What have you got to say?" 
"I've got nothing to say," the monkey replied. "You just tell that monk to come over here while I ask him a question." 
"What question do you want to ask me?" said Sanzang. 
"Are you the fellow sent to the Western Heaven by the Emperor of the East to fetch the scriptures?" asked the monkey. 
"Yes, I am," Sanzang replied. "Why do you ask?" 
"I am the Great Sage Equaling Heaven who wrecked the Heavenly Palace five hundred years ago. The Lord Buddha put me under this mountain for my criminal insubordination. Some time ago the Bodhisattva Guanyin went to the East on the Buddha's orders to find someone who could fetch the scriptures. When I asked her to save me she told me that I was to give up evil−doing, return to the Buddha's Law, and do all I could to protect the traveler when he went to the Western Paradise to worship Buddha and fetch the scriptures; she said that there'll something in it for me when that's done. Ever since then I've been waiting day and night with eager anticipation for you to come and save me, Master. I swear to protect you on your way to fetch the scriptures and to be your disciple." 
Sanzang, delighted to hear this, said, "Although you now have these splendid intentions and wish to become a monk thanks to the teaching of the Bodhisattva, I've no axe or chisel, so how am I to get you out?" 
"There's no need for axes or chisels. As long as you're willing to save me, I can get myself out," the monkey replied. 
"I'm willing to save you," Sanzang said, "but how are you going to get out?" 
"On the top of this mountain there is a detention order by the Tathagata Buddha written in letters of gold. If you climb the mountain and tear it off, I'll be straight out." Accepting his suggestion, Sanzang turned round to ask Liu Boqin if he would go up the mountain with him. 
"I don't know whether he's telling the truth or not," said Boqin, at which the monkey shouted at the top of his voice, "It's true. I wouldn't dare lie about that." 
So Liu Boqin told his servants to lead the horse while he helped Sanzang up the mountain. By hanging on to creepers they managed to reach the summit, where they saw a myriad beams of golden light and a thousand wisps of propitious vapour coming from a large, square rock on which was pasted a paper seal bearing the golden words Om mani padme hum. Sanzang went up and knelt down before the rock, then read the golden words and bowed his head to the ground a number of times. 
He looked to the West and prayed, "I am the believer Chen Xuanzang sent on imperial orders to fetch the scriptures. If I am fated to have a disciple, may I be able to tear off the golden words and release the divine monkey to come with me to the Vulture Peak. If I am not fated to have a disciple, and this monkey is an evil monster who has deceived me and will do me no good, then may I be unable to remove it." When he had prayed he bowed again, after which he went up and gently tore the paper seal off. 
A scented wind blew in his face and carried the paper up into the sky as a voice called, "I am the Great Sage's guard. Now that his sufferings are over I am going back to see the Tathagata and hand in this seal." 
The startled Sanzang, Liu Boqin, and the rest of them all bowed to Heaven, then went down the mountain to the stone cell, where they said to the monkey, "The restriction order has been torn off, so you can come out." 
The delighted monkey said, "Master, please stand well clear so that I don't give you a fright when I come out." 
On hearing this Liu Boqin took Sanzang and the rest of them to the East, and when they had covered some two or three miles they heard the monkey shout, "Further, further!" So Sanzang went much further until he was off the mountain. Then there was a great noise as the mountain split open. 
As they were all shaking with terror, the monkey appeared kneeling stark naked in front of Sanzang's horse and saying, "Master, I'm out." He bowed four times to Sanzang, then jumped up, addressed Liu Boqin with a respectful noise, and said, "Thank you, elder brother, for escorting my master, and thank you too for weeding the grass off my face." He then picked up the luggage and put it on the horse's back. At the sight of him the horse felt so weak and trembling that it could not stay on its feet. Because the monkey had once been the Protector of the Horses and looked after the dragon steeds of Heaven, and mortal horses were terrified at the very sight of him. 
Seeing that his intentions were indeed good and that he really was now a Buddhist, Sanzang asked him what was his surname. 
"My surname's Sun," replied the Monkey King. 
"I'll give you a Buddhist name that I can call you by," said Sanzang. 
"There's no need to trouble yourself," said the Monkey King, "I've already got one: Sun Wukong−−Monkey Awakened to Emptiness." 
"That's just right for our sect," exclaimed the monk. "As you look so much like a young novice, I'll give you another name and call you Brother Monkey. Is that all right?" 
"Yes, yes, yes," said Sun Wukong, and from then on he was also called Brother Monkey, or Sun the Novice. 
When he saw that Brother Monkey was determined to go, the high warden turned to Sanzang, chanted a noise of respect and said, "It's splendid that you have got so good a disciple, venerable sir. He'll certainly make the journey. I must now take my leave." 
Sanzang bowed to him in thanks, saying, "I have brought you a long way, and am deeply indebted to you. 
When you return home please convey my respects to your venerable mother and your wife; I caused them a lot of trouble, and hope that I shall be able to come and thank them on my return." Boqin returned his bow, and with that they parted. 
Brother Monkey asked Sanzang to mount the horse while he ambled ahead, stark naked, carrying the luggage on his back. Before long they were over the Double Boundary Mountain. 
Suddenly a ferocious tiger rushed at them, roaring and lashing about with its tail. Sanzang on his horse was terrified. Brother Monkey, who was standing beside the path, put down the luggage and said happily, "Don't be scared, master, it's just bringing me my clothes." He pulled a needle out of his ear and shook it in the wind, turning it into an iron cudgel as thick as a bowl. 
"I haven't used this little treasure in over five hundred years," he said, holding it in his hand. "Today I'm bringing it out to get myself some clothes to wear." 
Just watch as he rushes at the tiger, shouting, "Where d'you think you're going, wretch?" The tiger crouched in the dust, not daring to move, as the cudgel smashed into its head. 
Thousands of drops of red brain and many a pearly piece of tooth flew everywhere, so terrifying Sanzang that he fell out of the saddle, biting on his finger and crying, "Heavens, the high warden had to fight for ages before killing the striped tiger the other day, but this Sun Wukong has smashed a tiger to pull with a single blow. He really is a tough's tough." 
"Sit down for a moment, master, while I strip the clothes off him to wear on the journey," said Brother Monkey as he dragged the tiger over. 
"But he hasn't got any clothes," Sanzang protested. 
"Don't bother yourself about it, I know how to cope." The splendid Monkey King pulled a hair from his body, breathed some magic breath on it, and said "Change!," on which it turned into a pointed knife shaped like a cow's ear. Cutting into the skin on the tiger's belly, he took it all off in a single stroke, chopped off the head and claws, then held up the square hide to get an idea of its size. 
"It's on the big side," he said, "so I could make two kilts out of it," and with these words he took his knife and cut it in two. One piece he put away, and the other he wrapped round his waist to cover the lower half of his body and tied firmly with a creeper he pulled down from beside the path. 
"Let's go on, master, let's go on," he said. "The sewing can wait till we reach a house where we can borrow a needle and thread." He pinched his iron cudgel to make it as small as a needle again, put it back in his ear, took the luggage on his back, and asked Sanzang to mount the horse. 
As the two of them went along the venerable monk asked from the horse's back, "Wukong, why has the iron cudgel you used to kill the tiger disappeared?" 
"What you don't know, master," replied Brother Monkey with a laugh, "is that I got it from the dragon palace of the Eastern Sea, and that it's called the Magic Iron to Hold the Bed of the Milky Way in Place or 
'As−You−Will Gold−Banded Cudgel'. When I raised my great rebellion against the Heavenly Palace in the old days it served me well. It can change into anything and be whatever size I want it to be. Just now I turned it into an embroidery needle and put it away in my ear. I only take it out when I need it." 
Concealing his delight at hearing this, Sanzang went on to ask, "Why didn't that tiger move when it saw you? 
Why on earth did it let you hit it?" 
"I can tell you in all truthfulness, master, that not just tigers but even dragons have to be on their best behavior when they meet me. I know a few tricks for putting them in their place and have the power to make rivers run backwards and stir up the seas. I can tell what things are really like from appearances alone, and sort out the truth behind what is said. When I want to make myself big I measure myself against the universe, and when I shrink I can be held on a downy hair. There's no limit to the transformations I can perform, and nobody can tell when I'm going to vanish or when I'm going to reappear. There was nothing wonderful about skinning that tiger. Wait till I show you a thing or two." This took a great load off Sanzang's mind, and he whipped his horse on. As master and disciple went along their way talking together, the sun was sinking in the West, and they saw: 
In the fiery glow of the setting sun 
The clouds return to ends of the sky and the sea. 
The birds on a thousand mountains chirrup and call, 
Flying in flocks to the woods for the night. 
The wild beasts go two by two; 
All species return to their dens. 
A crescent moon breaks through the dusk, 
As countless points of starlight shimmer. 
"You must hurry up, master, as it's late," said Monkey. "There must be a house in that clump of trees over there, so let's get there as soon as possible to settle down for the night." Sanzang whipped on his horse and galloped to the house, where he dismounted. 
Brother Monkey put down the luggage, went up to the gate, and shouted, "Open up, open up." An old man came out, leaning on a bamboo stick, and the gate creaked as he opened it. At the sight of Monkey's ugly face and the tiger−skin wrapped around him, which made him look like the god of thunder, the old man was so terrified that his legs turned to jelly and his body went numb. 
"A devil.... A devil," he muttered deliriously. 
Sanzang went up to support him, saying, "Don't be afraid, aged benefactor. He's no devil, he's my disciple." 
When the old man looked up and saw Sanzang's pure face he felt steady on his feet at once, and he asked what monastery Sanzang was from, and why had he brought that evil−looking creature to his house. 
"I come from the Tang Court," said Sanzang, "and I am going to the Western Heaven to visit the Buddha and ask for the scriptures. As we were passing this way at nightfall we came to your mansion, good benefactor, to ask for a night's lodging. We shall be off before dawn tomorrow. I very much hope that you will be able to help us." 
"You may be a Tang man," the old fellow replied, "but that ugly brute certainly isn't." 
"You've got no eyes in your head, you silly old man," shrieked Brother Monkey. "He's my master and I'm his disciple. I'm no Tang man or Spike man, I'm the Great Sage Equaling Heaven. Some of the people who live in this house must know me, and I've seen you before." 
"Where've you seen me?" the old man asked. 
"Didn't you gather firewood in front of my face and pick wild vegetables from my cheeks when you were a child?" said Sun Wukong. 
"Rubbish," retorted the old man. 
"Where did you live and where did I live when I was supposed to gather firewood and wild vegetables in front of your face?" 
"It's you who's talking rubbish, my child," replied Sun Wukong. "You don't know who I am, but I'm the Great Sage from the stone cell under the Double Boundary Mountain. Take another look and see if you can recognize me now." The old man at last realized who he was and said, "I suppose you do look a bit like him, but however did you get out?" Sun Wukong told him the whole story of how the Bodhisattva had converted him and told him to wait till the Tang Priest came to take off the seal and release him. The old man went down on his knees and bowed his head, inviting the Tang Priest inside and calling his wife and children to come and meet him; they were all very happy when they heard what had happened. 
When they had drunk tea he asked Sun Wukong, "How old are you, Great Sage?" 
"How old are you, then?" said Sun Wukong. 
"In my senile way I have reached a hundred and thirty." 
"Then you could be my remote descendant," said Brother Monkey. "I can't remember when I was born, but I spent over five hundred years under that mountain." 
"True, true," remarked the old man, "I remember my grandfather saying that this mountain fell from heaven to crush a magical monkey, and you weren't able to get out before now. When I saw you in my childhood, grass grew on your head and there was mud on your face, so I wasn't afraid of you. But now that the mud and grass have gone you look thinner, and the tiger−skin round your waist makes you as near a devil as makes no difference." 
This conversation made everyone roar with laughter, and as he was a kind old man he had a vegetarian meal set out. When the meal was over Sanzang asked him his surname. 
"Chen," the old man replied. On hearing this, Sanzang raised his hands in greeting and said, "Venerable benefactor, you are of the same clan as myself." 
"Master," protested Brother Monkey, "You're called Tang, aren't you, so how can you belong to the same clan as him?" 
"My secular surname is Chen, and I am from Juxian Village, Hongnong Prefecture, Haizhou, in the Tang Empire. My Buddhist name is Chen Xuanzang. But as our Great Tang Emperor Taizong called me his younger brother and gave me the surname Tang, I am known as the Tang Priest." The old fellow was delighted to hear that they shared a surname. 
"Chen, old fellow," said Monkey, "I'm afraid this will be putting your family out, but I haven't washed for over five hundred years, so could you go and boil up some water for me and my master to have a bath before 
we set out again? Thank you." The old man gave instructions for water to be boiled and a tub brought, and he lit the lamp. 
When master and disciple had bathed they sat down by the lamp, and Brother Monkey asked once more, "Old Chen, there's another thing I'd like to ask you: could you lend me a needle and thread?" 
"Yes, of course," the old man replied, sending his wife to fetch them and then handing them to Monkey. 
Monkey's sharp eyes had observed his master take off a short white cotton tunic, which he did not put on again, so Monkey grabbed it and put it on himself. Then he took off his tiger skin, joined it up with a pleat, wrapped it round his waist again, tied it with a creeper, went up to his master, and asked, "How would you say these clothes compared with what I was wearing before?" 
"Splendid, splendid," replied Sanzang, "it makes you look quite like a real monk. If you don't mind cast−offs," 
he added, "you can go on wearing that tunic." Sun Wukong chanted a "na−a−aw" of obedience and thanked him, then went off to find some hay for the horse. When all the jobs were finished, master and disciple went to bed. 
Early the next morning Sun Wukong woke up and asked his master to set out. Sanzang dressed and told Monkey to pack the bedding and the rest of the luggage. They were just on the point of leaving when the old man appeared. He had prepared hot water for washing as well as breakfast. After breakfast they set out, Sanzang riding the horse and Brother Monkey leading. They ate when they were hungry and drank when they were thirsty, travelling by day and resting by night. Thus they went on until they realized it was early winter. 
When the frost destroys the red leaves the woods are sparse; 
On the ridge only pine and cypress flourish. 
The unopened plum buds exhale a dark perfume, 
When the chrysanthemum and lotus is finished, the wild tea blossoms. 
By the cold bridge and the ancient trees the birds quarrel for branches. 
In the twisting gully the waters of the spring run low, 
Pale snow clouds drift across the sky. 
The North wind blows strong, 
Who can bear the cold towards evening? 
When master and disciple had been travelling for a long time they heard a whistle from beside the path, and six men rushed out with spears, swords, cutlasses, and strongbows. 
"Where do you think you're going, monk?" they roared. "If you give us your horse and luggage we'll spare your life." Sanzang fell from his horse, scared out of his wits and unable to utter a word. Brother Monkey helped him to his feet and said, "Don't worry, master, it's nothing serious. They're come to bring us some clothes and our travelling expenses." 
"Are you deaf, Wukong?" the other asked. "They told us to give them our horse and luggage, so how can you ask them for clothes and money?" 
"You look after the clothes, the luggage and the horse while I go and have a bash at them. We'll see what happens." 
"A good hand is no match for two fists," said Sanzang, "and a pair of fists is no match for four hands. They are six big men against little you, all by yourself. You can't possibly have the nerve to fight them." 
The brave Brother Monkey did not stop to argue. Instead he stepped forward, folded his arms across his chest, bowed to the six bandits and said, "Why are you gentlemen obstructing our way?" 
"We are mighty robber kings, benevolent lords of the mountain. We have been very famous for a long time, although you don't seem to have heard of us. If you abandon your things at once, we'll let you go on your way; but if there's even a hint of a 'no' from you, we'll turn your flesh into mincemeat and your bones into powder." 
"I too am a hereditary robber king, and have ruled a mountain for many years, but I've never heard of you gentlemen." 
"Since you don't know our names, I'll tell them to you: Eye−seeing Happiness, Ear−hearing Anger, Nose−smelling Love, Tongue−tasting Thought, Mind−born Desire, and Body−based Sorrow." Sun Wukong laughed at them. "You're just a bunch of small−time crooks. You can't see that I'm your lord and master although I'm a monk, and you have the effrontery to get in our way. Bring out all the jewels you've stolen, and the seven of us can share them out equally. I'll let you off with that." 
This made the bandits happy, angry, loving, thoughtful, desirous, and sorrowful respectively, and they all charged him, yelling, "You've got a nerve, monk. You've got nothing to put in the kitty, but you want to share our stuff." Waving their spears and swords they rushed him, hacking wildly at his face. Seventy or eighty blows crashed down on him, but he simply stood in the middle of them, ignoring everything. 
"What a monk!" the bandits said. "He's a real tough nut." 
"I think we've seen enough of that," said Brother Monkey with a smile. "Your hands must be tired after all that bashing. Now it's my turn to bring out my needle for a bit of fun." 
"This monk must have been an acupuncturist," said the bandits. "There's nothing wrong with us. Why is he talking about needles?" 
Taking the embroidery needle from his ear, Brother Monkey shook it in the wind, at which it became an iron cudgel as thick as a ricebowl. With this in his hand he said, "Stick around while I try my cudgel out." The terrified bandits tried to flee in all directions, but Monkey raced after them, caught them all up, and killed every one of them. Then he stripped the clothes off them, took their money, and went back with his face wreathed in smiles. 
"Let's go, master; I've wiped those bandits out," he said. 
"Even though they were highwaymen, you're really asking for trouble," Sanzang replied. "Even if they had been arrested and handed over to the authorities, they wouldn't have been sentenced to death. You may know a few tricks, but it would be better if you'd simply driven them away. Why did you have to kill them all? Even taking a man's life by accident is enough to stop someone from becoming a monk. A person who enters the religious life 
Spares the ants when he sweeps the floor, 
Covers the lamps to save the moth. 
What business did you have to slaughter the lot of them, without caring which of them were the guilty and which were innocent? You haven't a shred of compassion or goodness in you. This time it happened in the wilds, where nobody will be able to trace the crime. Say someone offended you in a city and you turned murderous there. Say you killed and wounded people when you went berserk with that club of yours. I myself would be involved even though I'm quite innocent." 
"But if I hadn't killed them, they'd have killed you, master," protested Sun Wukong. 
"I am a man of religion, and I would rather die than commit murder," said Sanzang. "If I'd died, there'd only have been me dead, but you killed six of them, which was an absolute outrage. If the case were taken to court, you couldn't talk your way out of this even if the judge were your own father." 
"To tell you the truth, master, I don't know how many people I killed when I was the monster who ruled the Mountain of Flowers and Fruit," said Sun Wukong, "but if I'd acted your way I'd never have become the Great Sage Equaling Heaven." 
"It was precisely because you acted with such tyrannical cruelty among mortals and committed the most desperate crimes against Heaven that you got into trouble five hundred years ago," retorted Sanzang. "But now you have entered the faith, you'll never reach the Western Heaven and never become a monk if you don't give up your taste for murder. You're too evil, too evil." 
Monkey, who had never let himself be put upon, flared up at Sanzang's endless nagging. 
"If you say that I'll never become a monk and won't ever reach the Western Heaven, then stop going on at me like that. I'm going back." 
Before Sanzang could reply, Monkey leapt up in a fury, shouting, "I'm off." Sanzang looked up quickly, but he was already out of sight. All that could be heard was a whistling sound coming from the East. Left on his own, the Priest nodded and sighed to himself with great sadness and indignation. 
"The incorrigible wretch," he reflected. "Fancy disappearing and going back home like that just because I gave him a bit of a telling−off. So that's that. I must be fated to have no disciples or followers. I couldn't find him now even if I wanted to, and he wouldn't answer if I called him. I must be on my way." So he had to strive with all his might to reach the West, looking after himself with nobody to help. 
Sanzang had no choice but to gather up the luggage and tie it on the horse. He did not ride now. Instead, holding his monastic staff in one hand and leading the horse by the reins with the other, he made his lonely way to the West. Before he had been travelling for long he saw an old woman on the mountain path in front of him. She was holding an embroidered robe, and a patterned hat was resting upon it. As she came towards him he hurriedly pulled the horse to the side of the path to make room for her to pass. 
"Where are you from, venerable monk," the old woman asked, "travelling all alone and by yourself?" 
"I have been sent by the great King of the East to go to the West to visit the Buddha and ask him for the True Scriptures," he replied. 
"The Buddha of the West lives in the Great Thunder Monastery in the land of India, thirty−six thousand miles away from here. You'll never get there, just you and your horse, without a companion or disciple." 
"I did have a disciple, but his nature was so evil that he would not accept a little reproof I administered to him and disappeared into the blue," said Sanzang. 
"I have here an embroidered tunic and a hat inset with golden patterns that used to be my son's," the woman said, "but he died after being a monk for only three days. I've just been to his monastery to mourn him and say farewell to his master, and I was taking this tunic and this hat home to remember the boy by. But as you have a disciple, venerable monk, I'll give them to you." 
"Thank you very much for your great generosity, but as my disciple has already gone, I couldn't accept them." 
"All I heard was a whistling sound as he went back to the East." 
"My home isn't far to the East from here," she said, "so I expect he's gone there. I've also got a spell called True Words to Calm the Mind, or the Band−tightening Spell. You must learn it in secret, and be sure to keep it to yourself. Never leak it to anyone. I'll go and catch up with him and send him back to you, and you can give him that tunic and hat to wear. If he's disobedient again, all you have to do is recite the spell quietly. That will stop him committing any more murders or running away again." 
Sanzang bowed low to thank her, at which she changed into a beam of golden light and returned to the East. 
He realized in his heart that it must have been the Bodhisattva Guanyin who had given him the spell, so he took a pinch of earth as if he were burning incense and bowed in worship to the East most reverently. Then he put the tunic and hat in his pack, sat down beside the path, and recited the True Words to Calm the Mind over and over again until he knew them thoroughly, and had committed them to his memory. 
Let us turn to Sun Wukong, who after leaving his master went straight back to the Eastern Ocean on his somersault cloud. Putting his cloud away, he parted the waters and went straight to the undersea palace of crystal. His approach had alarmed the dragon king, who came out to welcome him and took him into the palace, where they sat down. 
When they had exchanged courtesies the dragon king said, "I'm sorry that I failed to come and congratulate you on the end of your sufferings, Great Sage. I take it that you are returning to your old cave to put your immortal mountain back in order." 
"That's what I wanted to do," Monkey replied. "But I've become a monk instead." 
"A monk? How?" the dragon king asked. 
"The Bodhisattva of the Southern Sea converted me. She taught me to work for a good reward later by going to the West with the Tang Priest from the East, visiting the Buddha, and becoming a monk. And my name has been changed to Brother Monkey." 
"Congratulations, congratulations," said the dragon king. "You've turned over a new leaf and decided to be good. But in that case why have you come back to the East instead of going West?" Monkey laughed. 
"Because that Tang Priest doesn't understand human nature. He started nagging away at me about a few small−time highwaymen I killed, and said that everything about me was wrong. You know how I can't stand people going on at me, so I left him to come home to my mountain. I looked in on you first to ask for a cup of tea." 
"Delighted to oblige," said the dragon king, and his dragon sons and grandsons came in with some fragrant tea which they presented to Monkey. 
When he had drunk his tea, Monkey looked round and saw a picture called, "Presenting the Shoe at the Yi Bridge" hanging on the wall behind him. 
"What's that a view of?" asked Monkey. 
"You wouldn't know about it because it happened after your time," the dragon king replied. "It's called 
'Presenting the Shoe Three Times at the Yi Bridge.'" 
"What's all that about?" Monkey asked. 
"The Immortal is Lord Yellow Stone, and the boy is Zhang Liang, who lived in Han times," the dragon king replied. "Lord Yellow Stone was sitting on the bridge when suddenly he dropped one of his shoes under it and told Zhang Liang to fetch it for him. The boy Zhang Liang did so at once, and knelt down to present it to him. 
Lord Yellow Stone did this three times, and because Zhang Liang never showed a trace of arrogance or disrespect, Lord Yellow Stone was touched by his diligence. One night he gave Zhang Liang some heavenly books and told him to support the Han cause. Later he won victories hundreds of miles away through his calculations within the walls of his tent. When peace came he resigned his office and went back to roam on his mountain with Master Red Pine and achieve the Way of Immortality through enlightenment. Great Sage, if you don't protect the Tang Priest with all your might, and if you reject his instruction, then you might as well stop trying to win yourself a good later reward, because it will mean you're only an evil Immoral after all." 
Monkey hummed and hawed, but said nothing. 
"Great Sage," said the dragon king, "you must make your mind up. Don't ruin your future for the sake of any easy life now." 
"Enough said. I'll go back and look after him," replied Sun Wukong. The dragon king was delighted. 
"In that case I shan't keep you. I ask you in your mercy not to leave your master waiting for long." Being thus pressed to go, Monkey left the sea palace, mounted his cloud, and took leave of the dragon king. 
On his way he met the Bodhisattva Guanyin. "What are you doing here, Sun Wukong?" she asked. "Why did you reject the Tang Priest's teaching and stop protecting him?" Brother Monkey frantically bowed to her from his cloud and replied, "As you had predicted, Bodhisattva, a monk came from the Tang Empire who took off the seal, rescued me, and made me his disciple. I ran away from him because he thought I was wicked and incorrigible, but now I'm going back to protect him." 
"Hurry up then, and don't have any more wicked thoughts." With that they each went their separate ways. 
A moment later Monkey saw the Tang Priest sitting gloomily beside the path. He went up to him and said, 
"Why aren't you travelling, master? What are you still here for?" Sanzang looked up. 
"Where have you been?" he asked. "I couldn't move without you, so I had to sit here and wait till you came back." 
"I went to visit the Old Dragon King of the Eastern Sea to ask him for some tea," Monkey replied. 
"Disciple, a religious man shouldn't tell lies. How can you say that you went to drink tea at the dragon king's place when you haven't been gone two hours?" 
"I can tell you quite truthfully," replied Monkey with a smile, "that with my somersault cloud I can cover thirty−six thousand miles in a single bound. That's how I got there and back." 
"When I spoke to you a little severely you resented it and went off in a huff," said Sanzang. "It was all right for a clever person like you−−you begged yourself some tea. But I couldn't go, and had to stay here hungry. 
You ought to be sorry for me." 
"If you're hungry, master, I'll go and beg you some food," suggested Monkey. 
"No need," his master replied, "there are still some dry provisions in my bundle that the high warden's mother gave me. Take that bowl and fetch some water. When we've eaten some of it we can be on our way." 
Opening the bundle, Brother Monkey found some scones made of coarse flour, which he took out and gave to his master. He also noticed the dazzling brocade tunic and the hat with inlaid golden patterns. 
"Did you bring this tunic and hat with you from the East?" he asked. Sanzang had to make something up on the spot. 
"I used to wear them when I was young. With that hat on you can recite scriptures without ever having been taught them, and if you wear that tunic you can perform the rituals without any practice." 
"Dear master, please let me wear them," Monkey pleaded. 
"I don't know whether they'll fit you, but if you can get them on, you can wear them." Monkey took off the old white tunic, put the brocade one on instead, and found that it was a perfect fit. Then he put the hat on his head. 
As soon as he had the hat on, Sanzang stopped eating and silently recited the Band−tightening Spell. 
"My head aches, my head aches," cried Brother Monkey, but his master went on and recited the spell several times more. Monkey, now rolling in agony, tore the hat to shreds, and Sanzang stopped reciting the spell for fear he would break the golden band. The moment the spell stopped the pain finished. Reaching up to feel his head, Monkey found something like a golden wire clamped so tightly around it that he could not wrench or snap it off. It had already taken root there. He took the needle out of his ear, forced it inside the band, and pulled wildly at it. Sanzang, again frightened that he would snap it, started to recite the spell once more. The pain was so bad this time that Monkey stood on his head, turned somersaults, and went red in the face and ears. His eyes were popping and his body went numb. Seeing the state he was in, Sanzang had to stop, and the pain stopped again too. 
"Master," said Monkey, "What a curse you put on me to give me a headache like that." 
"I didn't put a curse on you, I recited the Band−tightening Spell," Sanzang replied. 
"Say it again and see what happens," said Monkey, and when Sanzang did as he asked, Monkey's head ached again. "Stop, stop," he shouted, "the moment you started reciting it my head ached. Why did you do it?" 
"Will you accept my instruction now?" Sanzang asked. 
"Will you misbehave again in future?" 
"I certainly won't," said Monkey. 
Although he had made this verbal promise, he was still nurturing evil thoughts, and he shook his needle in the wind till it was as thick as a ricebowl. He turned on the Tang Priest, and was on the point of finishing him off when the terrified Sanzang recited the spell two or three more times. 
The monkey dropped his cudgel and fell to the ground, unable to raise his arm, "Master," he shouted, "I've seen the light. Stop saying the spell, please stop." 
"How could you have the perfidy to try to kill me?" asked Sanzang. 
"I'd never have dared," said Brother Monkey, adding, "who taught you that spell, master?" 
"An old lady I met just now," replied Sanzang. Monkey exploded with rage. 
"Tell me no more," he said, "I'm sure and certain the old woman was that Guanyin. How could she do this to me? Just you wait. I'm going to the Southern Sea to kill her." 
"As she taught me this spell," Sanzang replied, "she's bound to know it herself. If you go after her and she recites it, that will be the end of you." Seeing the force of his argument, Monkey changed his mind and gave up the idea of going. He knelt down and pleaded pitifully, "Master, she's used this to force me to go with you to the West. I shan't go to make trouble for her, and you must recite scriptures instead of saying that spell all the time. I promise to protect you, and I shall always be true to this vow." 
"In that case you'd better help me back on the horse," Sanzang replied. Monkey, who had been plunged into despair, summoned up his spirits, tightened the belt round his brocade tunic, got the horse ready, gathered up the luggage, and hurried off towards the West. 
If you want to know what other stories there are about the journey, then listen to the explanation in the next installment. 

`,
    },
  ],
  [
    15,
    {
      title: `Chapter 15: On the Coiled Snake Mountain the Gods Give Secret Help 
In the Eagle's Sorrow Gorge the Thought−Horse Is Reined in 
`,
      createdAt: new Date(),
      content: `
Monkey looked after the Tang Priest as they headed West. They had been travelling for several days in the twelfth month of the year, with its freezing North winds and biting cold. Their path wound along overhanging precipices and steep cliffs, and they crossed range after range of dangerous mountains. One day Sanzang heard the sound of water as he rode along, and he turned around to shout, "Monkey, where's that sound of water coming from?" 
"As I remember, this place is called Eagle's Sorrow Gorge in the Coiled Snake Mountain. It must be the water in the gorge." Before he had finished speaking, the horse reached the edge of the gorge. Sanzang reined in and looked. He saw: 
A thin cold stream piercing the clouds, 
Deep, clear waves shining red in the sun. 
The sound shakes the night rain and is heard in the quiet valley, Its color throws up a morning haze that obscures the sky. 
A thousand fathoms of flying waves spit jade; 
The torrent's roar howls in the fresh wind. 
The current leads to the misty waves of the sea; 
The egret and the cormorant never meet by a fisherman. 
As master and disciple watched they heard a noise in the gorge as a dragon emerged from the waves, leapt up the cliff, and grabbed at Sanzang. In his alarm Monkey dropped the luggage, lifted Sanzang off his horse, turned, and fled. The dragon, unable to catch him up, swallowed the white horse, saddle and all, at a single gulp, then disappeared once more beneath the surface of the water. Monkey made his master sit down on a high peak and went back to fetch the horse and the luggage. When he found that the horse had gone and only the luggage was left, he carried the luggage up to his master and put it down before him. 
"Master," he said, "that damned dragon has disappeared without a trace. It gave our horse such a fright that it ran away." 
"However are we going to find the horse, disciple?" 
"Don't worry, don't worry, wait here while I go and look for it." 
He leapt into the sky, whistling. Putting up his hand to shade his fiery eyes with their golden pupils, he looked all around below him, but saw no sign of the horse. He put his cloud away and reported, "Master, that horse of ours must have been eaten by the dragon−−I can't see it anywhere." 
"Disciple," Sanzang protested, "how could that wretched creature have a mouth big enough to swallow a horse that size, saddle and all? I think the horse must have slipped its bridle in a panic and run into that valley. Go and have a more careful look." 
"You don't know about my powers," Monkey replied. "These eyes of mine can see what's happening three hundred miles away, and within that range I can even spot a dragonfly spreading its wings. There's no way I could miss a big horse like that." 
"But we'll never get across those thousands of mountains and rivers." As he spoke, his tears fell like rain. The sight of him crying was too much for Brother Monkey, who flared up and shouted, "Stop being such an imbecile, master. Sit there and wait while I find that wretch and make him give us back our horse." 
"You mustn't go," said Sanzang, grabbing hold of him. "I'm frightened that he'll come creeping out again and kill me this time. Then I'll be dead as well as the horse, and that would be terrible." 
This made Monkey angrier than ever, and he roared with a shout like thunder, "You're hopeless, absolutely hopeless. You want a horse to ride but you won't let me go. This way you'll be sitting there looking at the luggage for the rest of your life." 
As he was yelling ferociously in a flaming temper, a voice was heard in the sky that said, "Don't be angry, Great Sage; stop crying, younger brother of the Tang Emperor. We are gods sent by the Bodhisattva Guanyin to give hidden protection to the pilgrim who is fetching the scriptures." 
At these words Sanzang immediately bowed, but Monkey said, "Tell me your names, you lot." 
"We are the Six Dings, the Six Jias, the Revealers of the Truth of the Five Regions, the Four Duty Gods, and the Eighteen Protectors of the Faith; we shall take it in turns to be in attendance every day." 
"The Dings and Jias, the Four Duty Gods, and the Protectors of the Faith will take turns. Of the Revealers of the Five Regions, the Gold−headed Revealer will always be with you by day and by night." 
"Very well then," said Monkey, "all those of you who are not on duty may withdraw. The Six Ding Heavenly Generals, the Duty God of the Day, and the Revealers of the Truth will stay here to protect my master, while I shall go to find that evil dragon in the gorge and make him give our horse back." The gods all did as they were told, and Sanzang, now greatly relieved, sat on the cliff and gave Monkey detailed instructions. 
"There's no need for you to worry," said the splendid Monkey King as he tightened the belt round his brocade tunic, folded up his tiger−skin kilt, grasped his cudgel, went to the edge of the gorge, and stood amid clouds and mist above the water. "Give us back our horse, mud loach, give us back our horse," he shouted. 
Now when the dragon had eaten Sanzang's white horse it lay low in the stream, hiding its miraculous powers and nourishing its vital nature. When it heard someone shouting and cursing it and demanding the horse back, it was unable to hold back its temper. 
Leaping up through the waves it asked, "How dare you make so free with your insults?" 
The moment he saw it, Monkey roared, "Don't go! Give us back our horse!" and swung his cudgel at the dragon's head. Baring its fangs and waving its claws, the dragon went for him. It was a noble battle that the pair of them fought beside the ravine. 
The dragon stretched its sharp claws, 
The monkey raised his gold−banded cudgel. 
The beard of one hung in threads of white jade, 
The other's eyes flashed like golden lamps. 
The pearls in the dragon's beard gave off a coloured mist, 
The iron club in the other's hands danced like a whirlwind. 
One was a wicked son who had wronged his parents; 
The father, the evil spirit who had worsted heavenly generals. 
Both had been through trouble and suffering, 
And now they were to use their abilities to win merit. 
Coming and going, fighting and resting, wheeling and turning, they battled on for a very long time until the dragon's strength was exhausted and his muscles numb. Unable to resist any longer, it turned around, dived into the water, and lay low at the bottom of the stream. It pretended to be deaf as the Monkey King cursed and railed at it, and did not emerge again. 
Monkey could do nothing, so he had to report to Sanzang, "Master, I swore at that ogre till it came out, and after fighting me for ages it fled in terror. It's now in the water and won't come out again." 
"Are you sure that it really ate our horse?" Sanzang asked. 
"What a thing to say," said Monkey, "If it hadn't eaten the horse, it wouldn't have dared to say a word or fight against me." 
"When you killed that tiger the other day you said you had ways of making dragons and tigers submit to you, so how comes it that you couldn't beat this one today?" Monkey had never been able to stand provocation, so when Sanzang mocked him this time he showed something of his divine might. 
"Say no more, say no more. I'll have another go at it and then we'll see who comes out on top." 
The Monkey King leapt to the edge of the ravine, and used a magical way of throwing rivers and seas into turmoil to make the clear waters at the bottom of the Eagle's Sorrow Gorge as turbulent as the waves of the Yellow River in spate. The evil dragon's peace was disturbed as he lurked in the depths of the waters, and he thought, "How true it is that blessings never come in pairs and troubles never come singly. Although I've been accepting my fate here for less than a year since I escaped the death penalty for breaking the laws of Heaven, I would have to run into this murderous devil." 
The more he thought about it, the angrier he felt, and unable to bear the humiliation a moment longer he jumped out of the stream cursing, "Where are you from, you bloody devil, coming here to push me around?" 
"Never you mind where I'm from," Monkey replied. "I'll only spare your life if you give back that horse." 
"That horse of yours is in my stomach, and I can't sick it up again, can I? I'm not giving it back, so what about it?" 
"If you won't give it back, then take this! I'm only killing you to make you pay for the horse's life." The two of them began another bitter struggle under the mountain, and before many rounds were up the little dragon could hold out no longer. With a shake of his body he turned himself into a water−snake and slithered into the undergrowth. 
The Monkey King chased it with his cudgel in his hands, but when he pushed the grass aside to find the snake the three gods inside his body exploded, and smoke poured from his seven orifices. He uttered the magic word om, thus calling out the local tutelary god and the god of the mountain, who both knelt before him and reported their arrival. 
"Put out your ankles," Monkey said, "while I give you five strokes each of my cudgel to work off my temper." 
The two gods kowtowed and pleaded pitifully, "We beg the Great Sage to allow us petty gods to report." 
"What have you got to say?" Monkey asked. 
"We didn't know when you emerged after your long sufferings, Great Sage," they said, "which is why we didn't come to meet you. We beg to be forgiven." 
"In that case," Monkey said, "I won't beat you, but I'll ask you this instead: where does that devil dragon in the Eagle's Sorrow Gorge come from, and why did he grab my master's white horse and eat it?" 
"Great Sage, you never had a master," said the two gods, "and you were a supreme Immortal with an undisturbed essence who would not submit to Heaven or Earth, so how does this master's horse come in?" 
"You two don't know that either," Monkey replied. "Because of that business of offending against Heaven, I had to suffer for five hundred years. Now I've been converted by the Bodhisattva Guanyin, and she's sent a priest who's come from the Tang Empire to rescue me. She told me to become his disciple and go to the Western Heaven to visit the Buddha and ask for the scriptures. As we were passing this way we lost my master's white horse." 
"Ah, so that's what's happening," the gods said. "There never used to be any evil creatures in the stream, which ran wide and deep with water so pure that crows and magpies never dared to fly across it. This was because they would mistake their own reflections in it for other birds of their own kind and often go plummeting into the water. That's why it's called Eagle's Sorrow Gorge. Last year, when the Bodhisattva Guanyin was on her way to find a man to fetch the scriptures, she rescued a jade dragon and sent it to wait here for the pilgrim without getting up to any trouble. But when it's hungry it comes up on the bank to catch a few birds or a roedeer to eat. We can't imagine how it could be so ignorant as to clash with the Great Sage." 
"The first time he and I crossed swords we whirled around for a few rounds," Brother Monkey replied. "The second time I swore at him but he wouldn't come out, so I stirred up his stream with a spell to throw rivers and seas into turmoil, after which he came out and wanted to have another go at me. He didn't realize how heavy my cudgel was, and he couldn't parry it, so he changed himself into a water snake and slithered into the undergrowth. I chased him and searched for him, but he's vanished without a trace." 
"Great Sage, you may not be aware that there are thousands of interconnected tunnels in this ravine, which is why the waters here run so deep. There is also a tunnel entrance round here that he could have slipped into. 
There's no need for you to be angry, Great Sage, or to search for it. If you want to catch the creature, all you have to do is to ask Guanyin to come here, and it will naturally submit." 
On receiving this suggestion Monkey told the local deity and the mountain god to come with him to see Sanzang and tell him all about what had happened previously. "If you go to ask the Bodhisattva to come here, when will you ever be back?" he asked, adding, "I'm terribly cold and hungry." 
Before the words were out of his mouth they heard the voice of the Gold−headed Revealer shouting from the sky, "Great Sage, there's no need for you to move. I'll go and ask the Bodhisattva to come here." Monkey, who was delighted, replied, "This is putting you to great trouble, but please be as quick as you can." The Revealer then shot off on his cloud to the Southern Sea. Monkey told the mountain god and the local deity to protect his master, and sent the Duty God of the Day to find some vegetarian food, while he himself patrolled the edge of the ravine. 
The moment the Gold−headed Revealer mounted his cloud he reached the Southern Sea. Putting away his propitious glow, he went straight to the Purple Bamboo Grove on the island of Potaraka, where he asked the Golden Armour Devas and Moksa to get him an audience with the Bodhisattva. 
"What have you come for?" the Bodhisattva asked. 
"The Tang Priest," the Revealer replied, "has lost his horse in the Eagle's Sorrow Gorge, and the Great Sage Sun Wukong is desperate, because they can neither go forward nor back. When the Great Sage asked the local deity he was told that the evil dragon you sent to the ravine, Bodhisattva, had swallowed it, so he has sent me to ask you to subdue this dragon and make it give back the horse." 
"That wretched creature was the son of Ao Run, the Dragon King of the Western Sea, whom his father reported for disobedience when he burned the palace jewels. The heavenly court condemned him to death for it, but I went myself to see the Jade Emperor and asked him to send the dragon down to serve the Tang Priest as a beast of burden. Whatever made it actually eat the Tang Priest's horse? I'd better go and look into it." The Bodhisattva descended from her lotus throne, left her magic cave, and crossed the Southern Sea, travelling on propitious light with the Revealer. There is a poem about it that goes: Honey is in the Buddha's words that fill Three Stores of scripture, The Bodhisattva's goodness is longer than the Great Wall. 
The wonderful words of the Mahayana fill Heaven and Earth, 
The truth of the prajna rescues ghosts and souls. 
It even made the Golden Cicada shed his cocoon once more, 
And ordered Xuanzang to continue cultivating his conduct. 
Because the road was difficult at the Eagle's Sorrow Gorge, 
The dragon's son returned to the truth and changed into a horse. 
The Bodhisattva and the Revealer reached the Coiled Snake Mountain before long, and stopping their cloud in mid−air they looked down and saw Brother Monkey cursing and shouting at the edge of the ravine. When the Bodhisattva told him to call Monkey over, the Revealer brought his cloud to land at the edge of the ravine. 
Instead of going to see Sanzang first, he said to Monkey, "The Bodhisattva's here." 
Monkey leapt straight into the air on his cloud and shouted at her at the top of his voice, "Teacher of the Seven Buddhas, merciful head of our religion, why did you think up this way of hurting me?" 
"I'll get you, you outrageous baboon, you red−bottomed ape," she replied. "I was at my wit's end two or three times over how to fetch that pilgrim, and I told him to save your life. But far from coming to thank me for saving you, you now have the effrontery to bawl at me." 
"You've been very good to me, I must say," retorted Monkey. "If you'd let me out to roam around enjoying myself as I pleased, that would have been fine. I was all right when you met me above the sea the other day, spoke a few unkind words, and told me to do all I could to help the Tang Priest. But why did you give him that hat he tricked me into wearing to torture me with? Why did you make this band grow into my head? Why did you teach him that Band−tightening Spell? Why did you make that old monk recite it over and over again so that my head ached and ached? You must be wanting to do me in." The Bodhisattva smiled. 
"You monkey. You don't obey the commands of the faith, and you won't accept the true reward, so if you weren't under control like this you might rebel against Heaven again or get up to any kind of evil. If you got yourself into trouble as you did before, who would look after you? Without this monstrous head, you'd never be willing to enter our Yogacatin faith." 
"Very well then," Monkey replied, "let's call this object my monstrous head. But why did you send that criminal and evil dragon to become a monster here and eat my master's horse? Letting evil creatures out to run amuck like that is a bad deed." 
"I personally asked the Jade Emperor to put the dragon here as a mount for the pilgrim," said the Bodhisattva. 
"Do you think an ordinary horse would be able to cross the thousands of mountains and rivers to reach the Buddha−land on the Vulture Peak? Only a dragon horse will be able to do it." 
"But he's so afraid of me that he's skulking down there and won't come out, so what's to be done?" Monkey asked. 
The Bodhisattva told the Revealer to go to the edge of the ravine and shout, "Come out, Prince Jade Dragon, son of the Dragon King Ao Run, to see the Bodhisattva of the Southern Sea," after which the offspring would emerge. The Revealer went to the edge of the gorge and shouted this twice, immediately the young dragon leapt up through the waves, took human form, stepped on a cloud, and greeted the Bodhisattva in mid−air. 
"In my gratitude to you, Bodhisattva, for saving my life, I have been waiting here for a long time, but I have had no news yet of the pilgrim who is going to fetch the scriptures." The Bodhisattva pointed to Brother Monkey and said, "Isn't he the pilgrim's great disciple?" 
"He's my enemy," the young dragon replied when he looked at him. "I ate his horse yesterday because I was starving, so he used some powers of his to fight me till I returned exhausted and terrified, then swore at me so that I had to shut myself in, too frightened to come out. He never said a word about anyone fetching scriptures." 
"You never asked me my name, so how could I have told you?" Monkey retorted. 
"I asked you 'Where are you from, you bloody devil?' and you yelled, 'Never mind where I'm from, and give me back that horse.' You never so much as breathed the word 'Tang.'" 
"You monkey, you are so proud of your own strength that you never have a good word for anyone else," said the Bodhisattva. 
"There will be others who join you later on your journey, and when they ask you any questions, the first thing you must mention is fetching the scriptures. If you do that, you'll have their help without any trouble at all." 
Monkey was happy to accept instruction from her. The Bodhisattva then went forward, broke off some of the pearls from the dragon's head, soaked the end of her willow twig in the sweet dew in her bottle, sprinkled it on the dragon's body, and breathed on it with magic breath, shouted, and the dragon turned into the exact likeness of the original horse. 
"You must concentrate on wiping out your past sins," she told him, "and when you have succeeded, you will rise above ordinary dragons and be given back your golden body as a reward." The young dragon took the bit between his teeth, and her words to heart. The Bodhisattva told Sun Wukong to take him to see Sanzang as she was returning to the Southern Sea. Monkey clung to her, refusing to let her go. 
"I'm not going," he said, "I'm not going. If the journey to the West is as tough as this, I can't possibly keep this mortal priest safe, and if there are many such more trials and tribulations, I'll have enough trouble keeping alive myself. How can I ever achieve any reward? I'm not going, I'm not going." 
"In the old days, before you had learned to be a human being," the Bodhisattva replied, "you were prepared to work for your awakening with all your power. But now that you have been delivered from a Heaven−sent calamity, you have grown lazy. What's the matter with you? In our faith, to achieve nirvana you must believe in good rewards. If you meet with injury or suffering in future, you have only to call on Heaven and Earth for them to respond; and if you get into a really hopeless situation I shall come to rescue you myself. Come over here as I have another power to give you." 
The Bodhisattva plucked three leaves from her willow twig, put them on the back of Brother Monkey's head, and shouted "Change," on which they turned into three life−saving hairs. "When the time comes and nobody else will help you," she said, "they will turn into whatever is needed to save you from disaster." 
After hearing all these fine words, Monkey finally took his leave of the All−merciful Bodhisattva, who went back to Potaraka amidst scented breezes and coloured mists. 
Monkey brought his cloud down to land, and led the dragon horse by the mane to see Sanzang. "Master," he said, "we've got our horse." Sanzang cheered up the moment he saw it. 
"Why is it sturdier than it was before?" he asked. "Where did you find it?" 
"Master, you must have been dreaming. The Golden−headed Revealer asked the Bodhisattva to come here, and she turned the dragon in the gorge into our white horse. The coloring is the same, but it hasn't got a saddle or a bridle, which is why I had to drag it here." Sanzang was astounded. 
"Where's the Bodhisattva? I must go and worship her," he said. 
"She's back in the Southern Sea by now, so don't bother," Monkey replied. Sanzang took a pinch of earth as if he were burning incense, knelt down, and bowed to the South. When he had finished he got up and helped Monkey put their things together for the journey. Monkey dismissed the mountain god and the local deity, gave orders to the Revealer and the Duty Gods, and invited his master to mount the horse. 
"I couldn't possibly ride it−−it's got no saddle or bridle," his master replied, "but we can sort this out when we've found a boat to ferry us across the stream." 
"Master, you seem to have no common sense at all. Where will a boat be found in these wild mountains? This horse has lived here for a long time and is bound to know about the currents, so you can ride him and use him as your boat." Sanzang had no choice but to do as Monkey suggested and ride the horse bareback to the edge of the stream while Monkey carried the luggage. 
An aged fisherman appeared upstream, punting a raft along with the current. As soon as he saw him, Monkey waved his hand and shouted, "Come here, fisherman, come here. We're from the East, and we're going to fetch the scriptures. My master is having some trouble crossing the river, so come and ferry him over." 
The fisherman punted towards them with all speed, while Monkey asked Sanzang to dismount and helped him on board the raft. Then he led the horse on and loaded the luggage, after which the fisherman pushed off and started punting with the speed of an arrow. Before they realized it they had crossed the Eagle's Sorrow Gorge and were on the Western bank. 
When Sanzang told Brother Monkey to open the bundle and find a few Great Tang coins and notes to give the fisherman, the old man pushed his raft off from the shore with the words, "I don't want your money, I don't want your money," and drifted off into mid−stream. Sanzang was most upset, but could do nothing except put his hands together and thank him. 
"There's no need to thank him, master," Monkey said. "Can't you see who he is? He's the water god of this stream, and I should be giving him a beating for not coming to welcome me. He should consider himself lucky to get off the beating−−how could he possibly expect money too?" His master, who was only half−convinced, mounted the saddleless horse once more and followed Monkey to join the main path, and then they hurried on towards the West. Indeed: 
The great truth landed on the opposite bank, 
The sincere heart and complete nature climbed Vulture Peak. 
As disciple and master went forward together, the sun slipped down in the West and evening drew in. 
The moon dim over the mountains, 
As the cold frost fills the heavens, 
And the wind's howl cuts through the body. 
With the lone bird gone, the grey island seems vast; 
Where the sunset glows, the distant mountains are low. 
In the sparse forests a thousand trees moan, 
On the deserted peak a lonely ape screams. 
The path is long, and bears no footprints, 
As the boat sails thousands of miles into the night. 
As Sanzang was gazing into the distance from the back of his horse, he noticed a farm−house beside the path. 
"Monkey," he said, "let's spend the night in the house ahead of us and go on in the morning." 
Monkey looked up and replied, "Master, it's not a farm−house." 
"A farm−house wouldn't have all those decorative fishes and animals on the roof. It must be a temple or a nunnery." 
As they were talking they reached the gate, and when Sanzang dismounted he saw the words TEMPLE OF 
THE WARD ALTAR written large above the gate and went inside. 
Here an old man with a rosary of pearls hanging round his neck came out to meet them with his hands held together and the words, "Please sit down, master." Sanzang quickly returned his courtesies and entered the main building to pay his respects to the divine image. The old man told a servant to bring tea, and when that had been drunk Sanzang asked the old man why the temple was dedicated to the ward altar. 
"This place is in the territory of the Western land of Kami," the old man replied, "and behind the temple lives the devout farm family which built it. 'Ward' means the ward of a village, and the altar is the altar of the local tutelary deity. At the time of the spring ploughing, the summer weeding, the autumn harvest, and the storing away in winter they all bring meat, flowers, and fruit to sacrifice to the altar. They do this to ensure good fortune throughout the four seasons, a rich crop of the five grains, and good health for the six kinds of livestock." 
On hearing this Sanzang nodded and said in approval, "How true it is that 'Go three miles from home, and you're in another land.' We have nothing as good as this in our country." The old man then asked him where his home was. 
"I come from the land of the Great Tang in the East," Sanzang replied, "and I have imperial orders to go to the Western Heaven to worship the Buddha and ask for the scriptures. As our journey brought us this way and it is almost night, we have come to this holy temple to ask for a night's lodging. We shall set off at dawn." The old man, who was very pleased to hear this, apologized profusely for having failed in his hospitality and told the servant to prepare a meal. When Sanzang had eaten he thanked the old man. 
Monkey's sharp eyes had noticed a clothes−line under the eaves of the building. He went over, tore it down, and hobbled the horse with it. "Where did you steal that horse from?" the old man asked with a smile. 
"You don't know what you're talking about," Monkey replied. "We're holy monks going to visit the Buddha, so how could we possibly steal a horse." 
"If you didn't steal it," the old man continued, the smile still on his lips, "then why do you have to break my clothes−line because it's got no saddle, bridle or reins?" 
Sanzang apologized for Monkey and said to him, "You're too impatient, you naughty monkey. You could have asked the old gentleman for a piece of rope to tether the horse with. There was no need to snap his clothes−line. Please don't be suspicious, sir," Sanzang went on, addressing the old man. "This horse isn't stolen, I can assure you. When we reached the Eagle's Sorrow Gorge yesterday I was riding a white horse complete with saddle and bridle. We did not know that there was an evil dragon in the stream who had become a spirit, and this dragon swallowed my horse saddle, bridle and all, in a single gulp. Luckily this disciple of mine has certain powers, and he brought the Bodhisattva Guanyin to the side of the gorge, where she caught the dragon and changed it into a white horse, exactly like the original one, to carry me to the Western Heaven to visit the Buddha. It's been less than a day from when we crossed that stream to when we reached your holy shrine, sir, and we haven't yet saddle or bridle for it." 
"Please don't be angry, Father. I was only joking," the old man replied. "I never thought your respected disciple would take it seriously. When I was young I had a bit of money, and I was fond of riding a good horse, but many years of troubles and bereavement have taken the fire out of me, and I've come to this miserable end as a sacristan looking after the incense. Luckily the benefactor who owns the farm behind here provides me with the necessities of life. As it happens, I still have a saddle and bridle−−I was so fond of them in the old days that I have never been able to bring myself to sell them, poor as I am. Now that I have heard, venerable master, how the Bodhisattva saved the divine dragon and changed it into a horse to carry you, I feel that I must help too, so I shall bring that saddle and bridle out tomorrow for you to ride on. I beg you to be gracious enough to accept them." 
Sanzang thanked him effusively. The servant boy had by now produced the evening meal, and when it was over they spread out their bedding, lamp in hand, and all went to sleep. 
When Monkey got up the next morning he said, "Master, that old sacristan promised us the saddle and bridle last night. You must insist and not let him off." Before the words were out of his mouth, the old man appeared with the saddle and bridle in his hands, as well as saddle−cloth, saddle−pad, reins, muzzle and all the other trappings for a horse. Nothing was missing. 
As he put it all down in front of the verandah he said, "Master, I humbly offer this saddle and bridle." When Sanzang saw them he accepted them with delight. Then he told Monkey to put them on the horse to see if they fitted him. Monkey went over and picked them up to look at them one by one: they were all fine pieces. There are some verses to prove it that go 
The well−carved saddle shines with silver stars 
The jeweled stirrups gleam with golden light. 
Several layers of saddle−pads are made from wool, 
The lead−rope is plaited from purple silk. 
The reins are inlaid with flashing flowers, 
The blinkers have dancing animals outlined in gold. 
The bit is made of tempered steel, 
And woollen tassels hang from either end. 
Monkey, who was secretly very pleased, put the saddle and bridle on the horse and found that they fitted as if they had been made to measure. Sanzang knelt and bowed to the old man in thanks, at which the old man rushed forward and said, "No, no, how could I allow you to thank me?" The old man did not try to keep them a moment longer, and bade Sanzang mount the horse. When he was out of the gate Sanzang climbed into the saddle, while Monkey carried the luggage. The old man then produced a whip from his sleeve and offered it to Sanzang as he stood beside the road. Its handle was of rattan bound with leather, and its thong of tiger sinew bound at the end with silk. 
"Holy monk," he said, "I would also like to give you this as you leave." As Sanzang took it sitting on horseback, he thanked the old man for his generosity. 
As Sanzang was on the point of clasping his hands together to take his leave of him, the old man disappeared, and on turning round to look at the temple, the monk could see nothing but a stretch of empty land. He heard a voice saying in the sky, "Holy monk, we have been very abrupt with you. We are the mountain god and the local deity of Potaraka Island, and we were sent by the Bodhisattva Guanyin to give you the saddle and bridle. 
You two are now to make for the West as fast as you can, and not to slacken your pace for a moment." 
Sanzang tumbled out of the saddle in a panic, and worshipped the heavens, saying, "My eyes of flesh and my mortal body prevented me from recognizing you, noble gods; forgive me, I beg you. Please convey my gratitude to the Bodhisattva for her mercy." Look at him, kowtowing to the sky more often than you could count. The Great Sage Sun Wukong, the Handsome Monkey King, was standing by the path overcome with laughter and beside himself with amusement. He went over and tugged at the Tang Priest. 
"Master," he said, "get up. They're already much too far away to hear your prayers or see your kowtows, so why ever are you doing that?" 
"Disciple," Sanzang replied, "what do you mean by standing beside the path sneering at me and not even making a single bow while I've done all those kowtows?" 
"You don't know anything," Monkey retorted. "A deceitful pair like that deserve a thrashing. I let them off out of respect for the Bodhisattva. That's quite enough: they couldn't expect me to bow to them too, could they? 
I've been a tough guy since I was a kid, and I don't bow to anyone. Even when I meet the Jade Emperor or the Supreme Lord Lao Zi I just chant a 'na−a−aw' and that's all." 
"You inhuman beast," said Sanzang, "stop talking such nonsense. Get moving, and don't hold us up a moment longer." With that Sanzang rose to his feet and they set off to the West. 
The next two months' journey was peaceful, and they only met Luoluos, Huihuis, wolves, monsters, tigers, and leopards. The time passed quickly, and it was now early spring. They saw mountains and forests clad in emerald brocade as plants and trees put out shoots of green; and when all the plum blossom had fallen, the willows started coming into leaf. Master and disciple traveled along enjoying the beauties of spring, and they saw that the sun was setting in the West. Sanzang reined in his horse to look into the distance, and in the fold of a mountain he dimly discerned towers and halls. 
"Wukong," he said, "can you see if there's anywhere we can go there?" Monkey looked and said, "It must be a temple or a monastery. Let's get there quickly and spend the night there." Sanzang willingly agreed, and giving his dragon horse a free rein he galloped towards it. 
If you don't know what sort of place it was that they were going to, listen to the explanation in the next installment. 

`,
    },
  ],
  [
    16,
    {
      title: `Chapter 16: The Monks of the Guanyin Monastery Plot to Take the Treasure 
The Monster of the Black Wind Mountain Steals the Cassock 
`,
      createdAt: new Date(),
      content: `
The master whipped on his horse and hurried straight to the temple gate with his disciple to have a look. They saw that it was indeed a monastery: 
Countless coloured clouds are massed; 
Before the Hall of Five Blessings 
Coil a thousand wisps of red mist. 
Two rows of pine and bamboo, 
A forest of locust and cypress trees. 
The two rows of pine and bamboo 
Are ageless in their elegant purity; 
The forest of locust and cypress trees 
See how high the drum and bell towers are, 
In peaceful mediation the monks make firm their natures, 
As birds sing in the trees outside. 
Peace beyond mortal dust is the only true peace; 
Emptiness with the Way is the real emptiness. 
A supreme Jetavana hidden in a green valley, 
A monastery set in scenery unbeaten in the world. 
Such pure lands are rare on earth; 
On most of the famous mountains dwell monks. 
Sanzang dismounted, Monkey laid down his burden, and they were just on the point of going in when a crowd of monks came out. This is how they were dressed: 
On their heads they wore hats pinned on the left, 
On their bodies were clothes of purity. 
Copper rings hung from their ears, 
And silken belts were tied around their waists. 
Slowly they walked on sandals of straw, 
As they held wooden clappers in their hands. 
With their mouths they were always chanting 
Their devotion to the Wisdom. 
When Sanzang saw them he stood respectfully beside the gate and greeted them. A monk hastily returned his greeting and apologized for not noticing them before. 
"Where are you from?" he asked, "please come to the abbot's rooms and have some tea." 
"I have been sent from the East on an imperial mission to worship the Buddha in the Thunder Monastery and ask for the scriptures," Sanzang replied, "and as it is almost night we would like to ask for a night's lodging now that we are here." 
"Come inside and sit down, come inside and sit down," the monk said. When Sanzang told Monkey to lead the horse over, the monk was frightened at the sudden sight of him and asked, "What's that thing leading the horse?" 
"Keep your voice down," Sanzang urged, "keep your voice down. He has a quick temper, and if he hears you referring to him as 'that thing,' he'll be furious. He's my disciple." 
The monk shuddered and bit his finger as he remarked, "Fancy taking a monstrously ugly creature like that for a disciple." 
"He may not look it," Sanzang replied, "but ugly as he is, he has his uses." 
The monk had no choice but to go through the monastery gate with Sanzang and Monkey, and inside they saw the words CHAN MONASTERY OF GUANYIN written in large letters on the main hall. Sanzang was delighted. 
"I have often been the grateful beneficiary of the Bodhisattva's divine mercy," he exclaimed, "but I have not yet been able to kowtow to her in thanks. To worship her in this monastery will be just as good as seeing her in person." On hearing this, the monk, ordering a lay brother to open the doors, invited Sanzang to go in and worship. Monkey tethered the horse, put the luggage down, and went up into the hall with Sanzang, who prostrated himself and put his head on the floor before the golden statue. When the monk went to beat the drum, Monkey started striking the bell. Sanzang lay before the image, praying with all his heart, and when he had finished the monk stopped beating the drum. Monkey, however, was so engrossed in striking the bell, sometimes fast and sometimes slow, that he went on for a very long time. 
"He's finished his devotions," a lay brother said, "so what are you still beating the bell for?" 
Monkey threw down the bell hammer and said with a grin, "You're ignorant, aren't you? 'Whoever is a monk for a day strikes the bell for a day': that's me." By then all the monks in the monastery, senior and junior, as well as the abbot and his assistant, had been so startled by the wild noises from the bell that they all came crowding out to ask what savage was making such a din with the bell and drum. Monkey jumped out and cursed them: "Your grandfather Sun Wukong was having some fun." 
All the monks collapsed with shock at the sight of him and said as they knelt on the ground, "Lord Thunder God, Lord Thunder God." 
"The Thunder God is my great grandson," Monkey replied. "Get up, get up, you've nothing to fear. I'm a lord from the land of the Great Tang empire in the East." The monks all bowed to him, and could not feel easy until Sanzang appeared. 
"Please come and drink tea in my rooms," said the abbot of the monastery. The horse was unloaded and led off, while they went round the main hall to a room at the back where they sat down according to their seniority. 
The abbot gave them tea and arranged for food to be brought, and after the meal it was still early. As Sanzang was expressing his thanks, two servant boys appeared behind them supporting an aged monk. This is what he looked like: 
A Vairocana miter on his head 
Topped with a gleaming cat's−eye jewel. 
On his body a gown of brocade, 
Edged with gold−mounted kingfisher feathers. 
A pair of monkish shoes studded with the Eight Treasures, 
A walking stick inlaid with Clouds and stars. 
A face covered with wrinkles, 
Like the Old Goddess of Mount Li; 
Like the Dragon King of the Eastern Sea. 
His mouth can't keep out the wind as his teeth have gone; 
His back is bent because his muscles are stiff. 
"The Patriarch has come," the monks all said. Sanzang bowed low to him in greeting and said, "Your disciple pays his respects, venerable abbot." The aged monk returned his greeting and they both sat down. 
"The youngsters have just told me that gentlemen have come from the Tang Empire in the East," he said, "so I have come out to see you." 
"Please forgive us for blundering into your monastery so rudely," Sanzang replied. 
"Don't put it like that," the aged monk said, going on to ask, "How long a journey is it from the Eastern lands to here?" 
"It was over sixteen hundred miles from Chang'an to the Double Boundary Mountain, where I took on this disciple," Sanzang replied. "We traveled on together through the land of Kami, and as that took two months we must have covered getting on for another two thousand miles before reaching here." 
"Over three thousand miles," said the aged monk. "I have spent a life of piety and have never been outside the monastery gates, so you could really say that I have been 'looking at heaven from the bottom of a well,' and call mine a wasted life." 
"How great is your age, venerable abbot?" Sanzang asked. 
"In my stupid way I have lived to be two hundred and seventy," the old monk replied. 
"Then you're my ten−thousandth−great grandson," put in Monkey. 
"Talk properly," said Sanzang, glaring at him, "Don't be so disrespectful and rude." 
"How old are you, sir?" the aged monk asked. 
"I don't venture to mention it," Monkey replied. The aged monk then thought that he must have been raving, so he put the matter out of his mind, said no more about it, and ordered tea to be brought for them. A young page brought in three cloisonne teacups on a jade tray the color of mutton fat, and another carried in a white alloy teapot from which he poured out three cups of fragrant tea. It had a better color than pomegranate blossom, and its aroma was finer than cassia. When Sanzang saw all this he was full of praise. 
"What splendid things," he said, "what splendid things. Wonderful tea in wonderful vessels." 
"They're not worth looking at," the old monk replied. "After all, sir, you come from a superior and heavenly court, and have seen many rare things in your wide travels; so how can you give such exaggerated praise to things like that? What treasures did you bring with you from your superior country that I could have a look at?" 
"I'm afraid our Eastern land has no great treasures, and even if it did, I would have been unable to bring them on so long a journey." 
"Master," put in Monkey, who was sitting beside him, "isn't that cassock I saw in our bundle the other day a treasure? Why don't I take it out for him to see?" When the monks heard him mention the cassock, they smiled sinister smiles. 
"What are you smiling at?" Monkey asked. 
"We thought it was very funny when you said that a cassock was a treasure," the abbot of the monastery replied. "A priest of my rank has two or three dozen, and our Patriarch, who has been a monk here for two hundred and fifty or sixty years, has seven or eight hundred." He ordered them to be brought out and displayed. The old monk, who was also in on the game, told the lay brothers to open the store−rooms, while friars carried twelve chests out into the courtyard, and unlocked them. Then they set up clothes frames, put rope all around, shook the cassocks open one by one, and hung them up for Sanzang to see. Indeed, the whole building was full of brocade, and the four walls covered with silk. 
Monkey examined them one by one and saw that some were made of brocade and some were embroidered with gold. 
"Enough, enough, enough," he said. "Put them away, put them away. I'll bring ours out for you to take a look at." 
Sanzang drew Monkey aside and whispered to him, "Disciple, never try to compete with other people's wealth, you and I are alone in this foreign land, and I'm afraid that there may be trouble." 
"What trouble can come from letting him look at the cassock?" Monkey asked. 
"You don't understand," Sanzang replied. "The ancients used to say, 'Don't let greedy and treacherous men see rare or amusing things.' If he lays his eyes on it, his mind will be disturbed, and if his mind is disturbed, he's bound to start scheming. If you were cautious, you would only have let him see it if he'd insisted; but as it is, this is no trifling matter, and may well be the end of us." 
"Don't worry, don't worry," said Brother Monkey, "I'll look after everything." Watch as without another word of argument he rushes off and opens the bundle, which is already giving off a radiant glow. It still had two layers of oiled paper round it, and when he removed it to take out the cassock and shake it open the hall was bathed in red light and clouds of coloured vapours filled the courtyard. When the monks saw it their hearts were filled with delight and their mouths with praise. It really was a fine cassock. 
Hung with pearls of unrivalled quality, 
Studded with Buddhist treasures infinitely rare. 
Above and below a dragon beard sparkles, 
On grass−cloth edged with brocade. 
If it is worn, all demons are extinguished; 
When donned it sends all monsters down to hell. 
It was made by the hands of heavenly Immortals, 
And none but a true monk should dare put it on. 
When the aged monk saw how rare a treasure it was, his heart was indeed disturbed. He went up to Sanzang and knelt before him. "My fate is indeed a wretched one," he lamented, tears pouring down his cheeks. 
Sanzang helped him to his feet again and asked, "Why do you say that, venerable patriarch?" 
"You have unfolded this treasure of yours, sir," the aged monk replied, "when it is already evening, so that my eyes are too dim to see it clearly. That is why I say my fate is wretched." 
"Send for a candle and take another look," Sanzang suggested. 
"My lord, your precious cassock is already shining brightly, so I don't think I would see more distinctly even if a candle were lit," replied the aged monk. 
"How would you like to look at it then?" asked Sanzang. 
"If, sir, you were in your mercy to set aside your fears and let me take it to my room to examine it closely during the night, I will return it to you in the morning to take to the West. What do you say to that?" This request startled Sanzang, who grumbled at Brother Monkey, "It's all your fault, all your fault." 
"He's nothing to be frightened of." Monkey replied with a grin. "I'll pack it up and tell him to take it away to look at. If anything goes wrong, I'll be responsible." 
As there was nothing he could do to stop him, Sanzang handed the cassock to the old monk with the words, 
"I'll let you take it, but you must give it back to me tomorrow morning in the condition it's in now. I won't have you getting it at all dirty." 
The old monk gleefully told a page to take the cassock to his room, and instructed the other monks to sweep out the front meditation hall, move two rattan beds in, spread out the bedding on them, and invite the two gentlemen to spend the night there; he also arranged for them to be given breakfast and seen off the next morning. Then everyone went off to bed. Sanzang and his disciple shut the doors of the meditation hall and went to sleep. 
After the old monk had tricked them into giving him the cassock, he held it under the lamp in the back room as he wept and wailed over it. This so alarmed the monks that none of them dared go to sleep before he did. 
The young page, not knowing what to do, went to tell the other monks, "Grandad's still crying although it's getting on for eleven." Two junior monks, who were among the old man's favorites, went over to ask him why he was crying. 
"I'm crying because my accursed fate won't allow me to see the Tang Priest's treasure," he said; to which they replied, "Grandad, in your old age you have succeeded. His cassock is laid before you, and all you have to do is open your eyes and look. There's no need for tears." 
"But I can't look at it for long," the aged monk answered. "I'm two hundred and seventy this year, and I've collected all those hundreds of cassocks for nothing. However am I to get hold of that one of his? However am I to become like the Tang priest?" 
"Master, you've got it all wrong," the junior monks said. "The Tang Priest is a pilgrim far from home. You should be satisfied with your great seniority and wealth; why ever would you want to be a pilgrim like him?" 
"Although I live at home and enjoy my declining years, I've got no cassock like his to wear," the aged monk replied. "If I could wear it for a day, I would close my eyes in peace. I'd be as happy as if I were a monk in my next life." 
"What nonsense," the junior monks said. "If you want to wear his cassock, there'll be no problem about that. 
We'll keep him for another day tomorrow, and you can wear it for another day. Or we can keep him for ten days and you can wear it for ten days. So why get so upset about it?" 
"Even if we kept him for a year," the old monk replied, "I'd only be able to wear it for a year, which wouldn't bring me any glory. I'll still have to give it to him when he went: I can't keep him here for ever." 
As they were talking a young monk called Broad Wisdom spoke out. "Grandad," he said, "if you want it for a long time, that's easy to arrange too." 
"What brilliant idea have you got, child?" the aged monk asked, cheering up. 
"That Tang Priest and his disciple were so exhausted after their journey that they are both asleep by now," 
Broad Wisdom replied. If we arm some strong monks with swords and spears to break into the meditation hall and kill them, they can be buried in the back garden, and nobody but us will be any the wiser. This way we get their white horse and their luggage as well as the cassock, which will become an heirloom of the monastery. 
We would be doing this for posterity." The old monk was very pleased with this suggestion, and he wiped the tears from his eyes as he said, "Very good, very good, a marvellous plan." 
Another young monk called Broad Plans, a fellow−student of Broad Wisdom's, came froward and said, "This plan's no good. If we are to kill them, we'll have to keep a sharp eye on them. That old pale−faced one looks easy enough, but the hairy−faced one could be tricky; and if by any chance we fail to kill him, we'll be in deep trouble. I have a way that doesn't involve using weapons, but I don't know what you'll think of it." 
"What do you suggest, my child?" the aged monk asked. 
"In my humble opinion," he replied, "we should assemble the head monks of all the cells, senior and junior, and get everyone to put a bundle of firewood outside the meditation hall. When it's set alight, those two will have no escape, and will be burnt to death together with their horse. Even if the people who live around this mountain see the blaze, they'll think that those two burnt down the mediation hall by carelessly starting a fire. 
This way they'll both be burnt to death and nobody will know how it happened. Then the cassock will become our monastery's treasure for ever." All the monks present were pleased with this suggestion, exclaiming, 
"Great, great, great; an even better plan." The head of every cell was told to bring firewood, a scheme that was to bring death to the venerable and aged monk, and reduce the Guanyin Monastery to ashes. Now there were seventy or eighty cells in the monastery, and over two hundred junior and senior monks. They shifted firewood all night, piled it up all round the meditation hall so that there was no way out, and prepared to set it alight. 
Although Sanzang and he had gone to bed, the magical Monkey's spirit remained alert and his eyes half open even when he was asleep. His suspicions were aroused by the sound of people moving around outside and the rustling of firewood in the breeze. "Why can I hear footsteps in the still of the night?" he wondered. "Perhaps bandits are planning to murder us." He leaped out of bed, and was on the point of opening the door to take a look when he remembered that this might disturb his master, so instead he used his miraculous powers to turn himself into a bee with a shake of his body. 
Sweet his mouth and venomous his tail, 
Slender his waist and light his body. 
He flew like an arrow, threading through willows and flowers, 
Seeking their nectar like a shooting star. 
A tiny body that could bear great weights, 
Carried on the breeze by his frail and buzzing wings. 
Thus did he emerge from under the rafters, 
Going out to take a look. 
He saw that the monks had piled firewood and straw all around the meditation hall and were setting it alight. 
Smiling to himself he thought, "So my master was right. This is their idea. They want to kill us and keep our cassock. I wish I could lay into them with my cudgel. If only I wasn't forbidden to use it, I could kill the lot of them; but the master would only be angry with me for murdering them. Too bad. I'll just have to take my chances as they come, and finish them off." 
The splendid Monkey leapt in through the Southern Gate of Heaven with a single somersault, startling the heavenly warriors Pang, Liu, Gou and Bi into bowing, and Ma, Zhao, Wen and Guan into bending low as they all said, "Oh no, oh no! The fellow who turned Heaven upside down is here again." 
"There's no need to stand on courtesy or be alarmed, gentlemen," said Monkey with a wave of his hand, "I've come to find the Broad−Visioned Heavenly King." 
Before the words were out of his mouth the Heavenly King was there and greeting Monkey with, "Haven't seen you for ages. I heard the other day that the Bodhisattva Guanyin came to see the Jade Emperor to borrow the four Duty Gods, the Six Dings and Jias and the Revealers of the Truth to look after the Tang Priest on his pilgrimage to the Western Heaven to fetch the scriptures. They were also saying that you were his disciple, so how is it that you have the spare time to come here?" 
"Let's cut the cackle," said Monkey. "The Tang priest has run into some villains who have started a fire to burn him to death. It's very urgent, which is why I've come to ask you for the loan of your Anti−fire Cover to save him with. Fetch it at once; I'll bring it straight back." 
"You've got it all wrong," the Heavenly King replied. "If villains are trying to burn him, you should rescue him with water. What do you need my Anti−fire Cover for?" 
"You don't understand," Monkey continued. "If I try to save him with water, he may still be hurt even if he isn't burnt up. I can only keep him free from injury if you lend me that cover; and with that it doesn't matter how much burning they do. Buck up, buck up! It may be too late already. Don't mess up what I've got to do down there." 
"You monkey," said the Heavenly King with a laugh, "You're as wicked as ever, thinking only of yourself and never of others." 
"Hurry up, hurry up," Monkey pleaded. "You'll ruin everything if you go on nattering." The Heavenly King, no longer able to refuse, handed the cover to Monkey. 
Taking the cover, Monkey pressed down on his cloud and went straight to the roof of the meditation hall, where he spread the cover over the Tang Priest, the dragon horse, and the luggage. Then he went to sit on top of the aged monk's room to protect the cassock. As he watched them starting the fire he kept on reciting a spell and blew some magic breath towards the Southwest, at which a wind arose and fanned the flames up into a wild and roaring blaze. What a fire! 
The spreading black smoke blotted out all the stars in the sky, The leaping red flames made the earth glow red for hundreds of miles. 
It was a gleaming golden snake; 
The Three Spirits of the South showed their might, 
The Fire God Huilu wielded his magic power, 
The bone−dry kindling burned ferociously, 
As when the Emperor Suiren drilled wood to start a fire. 
Flames leapt up from the boiling oil before the doors, 
Brighter than when Lord Lao Zi opens his furnace. 
As the cruel fire spreads, 
What can stop this willful murder? 
Instead of dealing with the disaster 
As the wind fanned the fire. 
The flames flew many miles high; 
As the fire grew in the might of the wind, 
Sparks burst through the Nine Heavens. 
Like firecrackers at the end of the year; 
Like cannon fire in battle. 
None of the Buddha statues could escape the blaze, 
And the guardian gods in the Eastern court had nowhere to hide. 
It was fiercer that the fire−attack at Red Cliff, 
Or the burning of the Epang Palace. 
A single spark can start a prairie fire. In a few moments the raging wind had blown the fire up into an inferno, and the whole Guanyin Monastery was red. Look at the monks as they move away boxes and baskets, grabbing tables and carrying cooking−pots on their heads. The whole monastery was full of the sound of shouting and weeping. Brother Monkey protected the abbot's rooms at the back, and the Anti−fire Cover covered the meditation hall in front; everywhere else the fire raged, its red flames reflected in the sky and its dazzling brightness shining through the wall. 
When the fire broke out, all the animals and devils of the mountain were disturbed. Seven miles due South of the Guanyin Monastery was the Black Wind Mountain, on which there was a Black Wind Cave. In this cave a monster awoke and sat up. Seeing light streaming in through his window, he thought it must be dawn, but when he got up to take a better look he saw a fire blazing to the North. 
"Blimey," the monster exclaimed with astonishment, "those careless monks must have set the Guanyin Monastery on fire. I'd better go and help them." The good monster leapt off on a cloud and went down below the smoke and flames that reached up to the sky. The front halls were all empty, and the fire was burning bright in the cloisters on either side. He rushed forward with long strides and was just calling for water when he noticed that the rooms at the back were not burning as there was someone on the roof keeping the wind away. The moment he realized this and rushed in to look, he saw a magic glow and propitious vapours coming from a black felt bundle on the table. On opening it he found it contained a brocade cassock that was a rare treasure of the Buddhist religion. His mind disturbed by the sight of this valuable object, he forgot about putting out the fire or calling for water and grabbed the cassock, which he made off with in the general confusion. Then he went straight back to his cave by cloud. 
The fire blazed on till dawn before burning itself out. The undraped monks howled and wailed as they searched through the ashes for bronze and iron, and picked over the cinders to find gold and silver. Some of them fixed up thatched shelters in what remained of the frames of the buildings, and others were rigging up pots to cook food at the bases of the exposed walls. We will not describe the weeping, the shouting and the confused hubbub. 
Brother Monkey grabbed the Anti−fire Cover, took it back to the Southern Gate of Heaven with a single somersault, and returned it to the Broad−visioned Heavenly King with thanks. "Great Sage," said the Heavenly King as he accepted it. "You are as good as your word. I was so worried that if you didn't give me back my treasure, I'd never be able to find you and get it off you. Thank goodness you've returned it." 
"Am I the sort of bloke who'd cheat someone to his face?" asked Monkey. "After all, 'If you return a thing properly when you borrow it, it'll be easier to borrow it next time.'" 
"As we haven't met for so long, why don't you come into the palace for a while?" said the Heavenly King. 
"I'm no longer the man to 'sit on the bench till it rots, talking about the universe,'" Monkey replied. "I'm too busy now that I have to look after the Tang Monk. Please excuse me." Leaving with all speed, he went down on his cloud, and saw that the sun was rising as he went straight to the meditation hall, where he shook himself, turned into a bee, and flew in. On reverting to his true form he saw that his master was still sound asleep. 
"Master, get up, it's dawn," he called. 
Sanzang woke up, rolled over, and said, "Yes, so it is." When he had dressed he opened the doors, went outside, and saw the walls reddened and in ruins, and the halls and towers gone. "Goodness," he exclaimed in great astonishment, "why have the buildings all disappeared? Why is there nothing but reddened walls?" 
"You're still asleep," Monkey replied. "There was a fire last night." 
"Why didn't I know about it?" Sanzang asked. 
"I was protecting the meditation hall, and as I could see you were asleep, master, I didn't disturb you," 
"If you were able to protect the meditation hall, why didn't you put out the fire in the other buildings?" 
Sanzang asked. Monkey laughed. 
"I'll tell you, master. What you predicted actually happened. They fancied that cassock of ours and planned to burn us to death. If I hadn't noticed, we'd be bones and ashes by now." 
"Did they start the fire?" asked Sanzang who was horrified to learn this. 
"Who else?" replied Monkey. 
"Are you sure that you didn't cook this up because they were rude to you?" Sanzang asked. 
"I'm not such a rascal as to do a thing like that," said Monkey. "Honestly and truly, they started it. Of course, when I saw how vicious they were I didn't help put the blaze out. I helped them with a slight breeze instead." 
"Heavens! Heavens! When a fire starts you should bring water, not wind." 
"You must know the old saying−−'If people didn't harm tigers, tigers wouldn't hurt people.' If they hadn't started a fire, I wouldn't have caused a wind." 
"Where's the cassock? Don't say that it's been burnt too." 
"It's all right; it hasn't been burnt. The abbots' cell where it was kept didn't catch fire." 
"I don't care what you say. If it's come to any harm, I'll recite that spell till it kills you." 
"Don't do that," pleaded Monkey desperately, "I promise to bring that cassock back to you. Wait while I fetch it for you, and then we'll be on our way." With Sanzang leading the horse, and Monkey carrying the luggage, they went out of the meditation hall and straight to the abbot's lodgings at the back. 
When the grief−stricken monks of the monastery suddenly saw master and disciple emerge with horse and luggage from the meditation hall they were terrified out of their wits, and screamed, "Their avenging ghosts have come to demand our lives." 
"What do you mean, avenging ghosts coming to demand your lives?" Monkey shouted. "Give us back our cassock at once." 
The monks all fell to their knees and kowtowed, saying, "Masters, wrongs are always avenged, and debts always have to be paid. If you want lives, it's nothing to do with us; It was the old monk and Broad Plans who cooked up the plot to kill you. Please don't punish us." 
Monkey snorted with anger and roared, "I'll get you, you damned animals. Who asked for anyone's life? Just bring out that cassock and we'll be on our way." 
Two brave men from among the monks said, "Masters, you were burnt to death in the meditation hall, and now you come back to ask for the cassock. Are you men or ghosts?" 
"You cattle," sneered Monkey, "there wasn't any fire. Go and look at the meditation hall and then we'll see what you have to say." The monks rose to their feet, and when they went forward to look, they saw that there was not even the slightest trace of scorching on the door and the window−frames. The monks, now struck with fear, realized that Sanzang was a divine priest, and Monkey a guardian god. 
They all kowtowed to the pair of them and said, "Our eyes are blind. We failed to recognize saints sent down from Heaven. Your cassock is in the abbot's rooms at the back." Sanzang went past a number of ruined walls and buildings, sighing endlessly, and saw that the abbot's rooms at the back had indeed not been burnt. The monks all rushed in shouting. "Grandad, the Tang priest is a saint, and instead of being burnt to death he's wrecked our home. Bring the cassock out at once and give it back to him." 
Now the old monk had been unable to find the cassock, which coming on top of the destruction of the monastery had him distraught with worry. When the monks asked him for it, he was unable to reply. Seeing no way out of his quandary, he bent his head down and dashed it against the wall. He smashed his skull open and expired as his blood poured all over the floor. There are some verses about it: Alas that the aged monk in his folly 
Lived so long a life for nothing. 
He wanted the cassock as an heirloom for the monastery. 
Forgetting that what is Buddha's is not as mortal things. 
As he took the changeable for the eternal, 
is sorry end was quite inevitable. 
What use were Broad Wisdom and Broad Plans? 
To harm others for gain always fails. 
The other monks began to howl in desperation, "Our Patriarch has dashed his brains out, and we can't find the cassock, so whatever shall we do?" 
"I think you've hidden it somewhere," Monkey said. "Come out, all of you, and bring me all the registers. I'm going to check that you're all here." The senior and junior abbots brought the two registers in which all the monks, novices, pages, and servants were registered. There were a total of two hundred and thirty names in them. Asking his master to sit in the place of honour, Monkey called out and marked off each of the names, making the monks open up their clothes for his inspection. When he had checked each one carefully there was no sign of the cassock. Then he searched carefully through all the boxes and baskets that had been saved from the flames, but again he could find no trace of it. Sanzang, now absolutely furious with Brother Monkey, started to recite the spell as he sat up high. 
Monkey fell to the ground in great agony, clutching his head and pleading, "Stop, stop, I swear to return the cassock to you." The monks, trembling at the sight, begged him to stop, and only then did he shut his mouth and desist. 
Monkey leapt to his feet, took his iron cudgel from behind his ear, and was going to hit the monks when Sanzang shouted, "You ape, aren't you afraid of another headache? Are you going to misbehave again? Don't move your hand or hurt anyone. I want you to question them again instead." 
The monks all kowtowed to him and entreated him most pitifully to spare their lives. "We've honestly not seen it. It's all that dead old bastard's fault. After he saw your cassock yesterday evening he cried till late into the night, not even wanting to look at it as he worked out a plan by which it could belong to the monastery for ever. He wanted to burn you to death, masters, but when the fire started, a gale wind blew up, and we were all busy trying to put the blaze out and move away what stuff we could. We don't know where the cassock went." 
Monkey went into the abbot's quarters at the back in a great rage and carried out the corpse of the old monk who had killed himself. When he stripped the body he found no treasures on it, so he dug up the floor of his room to a depth of three feet, again without finding a sign of the cassock. Monkey thought for a moment and then asked, "Are there any monsters turned spirits around here?" 
"If you hadn't asked, sir, I'd never have imagined you wanted to know," the abbot replied. "There is a mountain due South of here called the Black Wind Mountain, and in the Black Wind Cave−on it there lives a Great Black King. That old dead bastard of ours was always discussing the Way with him. There aren't any other evil spirits apart from him." 
"How far is the mountain from here?" Monkey asked. 
"Only about seven miles," the abbot replied. "It's the mountain you can see over there." 
Monkey smiled and said to Sanzang. "Don't worry, master, there's no need to ask any more questions. No doubt about it: it must have been stolen by that black monster." 
"But his place is seven miles from here, so how can you be sure it was him?" Sanzang asked. 
"You didn't see the fire last night," Brother Monkey retorted. "The flames were leaping up hundreds of miles high, and the glow penetrated the triple heavens. You could have seen it seventy miles away, let alone seven. 
I'm convinced that he saw the glare and took the chance to slip over here quietly. When he saw that our cassock was a treasure, he must have stolen it in the confusion. Just wait while I go and find him." 
"If you go, who's going to protect me?" asked Sanzang. 
"Don't worry, gods are watching over you in secret, and in the visible sphere I'll make these monks serve you." With that he called the community together and said, "I want some of you to go and bury that old ghost, and some of you to serve my master and look after our white horse." The monks all assented obediently, and Monkey continued, "I won't have you agreeing glibly now but not waiting on them when I've gone. Those of you who look after my master must do so with pleasant expressions on your faces, and those who feed the horse must make sure he gets the right amount of hay and water. If there's the slightest mistake, I'll hit you like this." He pulled out his cudgel, and smashed a fire−baked brick wall to smithereens; the shock from this shook down seven or eight more walls. At the sight of this the monks' bones turned to jelly, and they knelt down and kowtowed to him with tears pouring down their cheeks. 
"Don't worry, master, you can go−−we'll look after him. We promise not to show any disrespect." The splendid Monkey then went straight to the Black Wind Mountain with a leap of his somersault cloud to look for the cassock. 
The Golden Cicada left the capital in search of the truth, 
Leaning on his staff as he went to the distant West. 
Along his route were tigers, leopards and wolves; 
Few were the artisans, merchants, or scholars he met. 
In a foreign land be encountered a stupid and covetous monk, 
And depended entirely on the mighty Great Sage Equaling Heaven. 
When fire and wind destroyed the monastery, 
A black bear came one night to steal the silken cassock. 
If you don't know whether the cassock was found on this journey or how things turned out, listen to the explanation in the next installment. 

`,
    },
  ],
  [
    17,
    {
      title: `Chapter 17: Brother Monkey Makes Trouble on the Black Wind Mountain 
Guanyin Subdues the Bear Spirit 
`,
      createdAt: new Date(),
      content: `
As Monkey leapt up with a somersault, the senior and junior monks, the novices, the page−boys, and the servants of the monastery all bowed low to the sky and said, "Master, you must be a cloud−riding Immortal come down from Heaven. No wonder that fire can't burn you. Damn that stupid old skinflint of ours: he destroyed himself with his own scheming." 
"Please rise, gentlemen," replied Sanzang, "there's no need to hate him. If my disciple finds the cassock our troubles will all come to an end; but if he doesn't find it, he has rather a nasty temper and I'm afraid that none of you will escape with your lives." When they heard this warning, the monks' hearts were in their mouths, and they implored Heaven to let him find the cassock and spare their lives. 
Once in mid−air, the Great Sage Sun Wukong reached at the Black Wind Mountain with one twist of his waist. Stopping his cloud while he took a careful look around, he saw that it was indeed a fine mountain. It was a spring day: 
The myriad valleys' streams compete, 
A thousand precipices vie in beauty. 
Where the birds call, no man is; 
When the blossoms fall, the trees are still fragrant. 
After the rain, the sky and the lowering cliff are moist; 
As the pines bend in the wind, they spread an emerald screen. 
The wild flowers blossom, 
Hanging over beetling crags; 
On craggy range and flat−topped hill. 
And can find no wood−cutters. 
Beside the stream a pair of cranes drink, 
And wild apes gambol on the rocks. 
Peaks like mussel−shells, gleaming black, 
Lofty and green as they shine through the mist. 
As Monkey was looking at the mountain scenery he heard voices from in front of the grassy slope. He slipped off to conceal himself under the rock−face and take a discreet look. He saw three fiends sitting on the ground. 
At the head was a dark fellow, to his left was a Taoist, and to his right a white−robed scholar, and they were all talking about lofty and broad matters: about refining cinnabar and mercury with tripods and cauldrons; and about the white snow, mercury, the yellow sprout, lead, and other esoteric teachings. 
In the middle of this the dark fellow said, "As it's my birthday tomorrow, I hope you two gentlemen will do me the honour of coming along." 
"We celebrate your birthday every year, Your Majesty," the white−robed scholar replied, "so of course we shall come this year." 
"I came by a treasure last night," the dark fellow went on, "a brocade cassock for a Buddha, and it's a wonderful thing. I'm going to give a big banquet for it the day after tomorrow and I'm inviting all you mountain officials to come and congratulate me, which is why I'm calling it a 'Buddha's Robe Banquet.'" 
"Wonderful, wonderful," the Taoist exclaimed with a smile. "Tomorrow I'll come to congratulate you on your birthday, and the day after I'll come again for the banquet." 
As soon as Monkey heard him mention the Buddha's robe he was sure it was their treasure, and unable to hold back his anger he leapt out from the cliff brandishing his gold−banded cudgel with both hands and shouting, "I'll get you, you gang of devils. You stole our cassock, and now you think you're going to have a 'Buddha's Robe Banquet'. Give it back to me at once." 
"Don't move," he barked, swinging the cudgel and bringing it down towards the monster's head. The dark fellow turned into a wind to flee in terror, and the Taoist rode off on a cloud; so Monkey was only able to slay the white−robed scholar with a blow from the club. When he dragged the body over to look at it, he saw that it was a white−patterned snake spirit. In his anger he picked the corpse up and tore it to pieces, then went into the recesses of the mountain in search of the dark fellow. Rounding a sharp pinnacle and traversing a dizzy precipice, he saw a cave palace in the cliff: 
Dense with cypress and pine. 
The thick and misty clouds fill the gates with color; 
The dense stands of cypress and pine surround the door with green. 
For a bridge there is a dried−out log, 
And wild fig coils around the mountain peaks. 
Birds carry red petals to the cloud−filled valley; 
Deer tread on scented bushes as they climb the stone tower. 
Before the gates the season brings out flowers, 
As the wind wafts their fragrance. 
Around the willows on the dike the golden orioles wheel; 
Butterflies flit among the peach−trees on the bank. 
This ordinary scene can yet compete 
With lesser views in Fairyland. 
When he reached the gates Monkey saw that they were very strongly fastened, and above them was a stone tablet inscribed with the words Black Wind Cave of the Black Wind Mountain in large letters. He brandished his cudgel and shouted, "Open up!" at which the junior devil who was on the gates opened them and asked, 
"Who are you, and how dare you come and attack our Immortals' cave?" 
"You damned cur," Monkey railed at him. "How dare you call a place like this an 'Immortals' cave'? What right have you to use the word 'Immortal'? Go in and tell that dark fellow of yours that if he gives back my cassock at once, I'll spare your lives." 
The junior devil rushed in and reported, "The 'Buddha's Robe Banquet' is off, Your Majesty. There's hairy−faced thunder god outside the gates who's demanding the cassock." 
The dark fellow, who had barely had time to shut the gates and had not even sat down properly since Brother Monkey chased him, away from the grassy slope, thought on hearing this news, "This wretch has come from I don't know where, and now he has the effrontery to come yelling at my gates." He called for his armour, tightened his belt, and strode out of the gates with a black−tasseled spear in his hands. Monkey appeared outside the gates holding his iron cudgel and glaring wide−eyed at that ferocious−looking monster. 
His bowl−shaped iron helmet shone like fire; 
His black bronze armour gleamed. 
A black silk gown with billowing sleeves, 
A dark green silken sash with fringes. 
In his hands a spear with black tassels, 
On his feet a pair of dark leather boots. 
Lightning flashed from his golden pupils; 
He was indeed the Black Wind King of the mountains. 
"This wretch looks as though he's been a brick−burner or a coal−digger," Monkey thought as he smiled to himself. "He's so black he must be the local soot−painter." 
"What gives you the nerve to act so big round here, monk, and what the hell are you?" shouted the monster at the top of his voice. 
Monkey rushed him with his cudgel and roared, "Cut the cackle, and give me back the cassock at once, kid." 
"What monastery d'you come from? Where did you lose the cassock? Why come and ask for it here?" 
"My cassock was in the rear abbot's lodgings at the Guanyin Monastery due North of here. When the monastery caught fire you made the most of the confusion to do a bit of looting and brought it back here, you wretch, and now you're planning to hold a 'Buddha's Robe Banquet'. Don't try to brazen it out. Give it back at once, and I'll spare your life, but if even a hint of a 'no' gets past your teeth I'll push the Black Wind Mountain over, trample your cave flat, and flatten every one of you fiends into noodles." 
The monster laughed evilly and replied, "You've got a nerve. You were the one who started the fire last night. 
You were sitting on the roof of the abbot's lodgings and calling up a wind to make it worse. What's it to you if I did take a cassock? Where are you from? Who are you? You must have a lot of tricks up your sleeve if you have the nerve to talk so big." 
"You can't recognize your own grandfather." Brother Monkey replied. "I, your grandfather, am the disciple of His Highness the Patriarch Sanzang, the younger brother of the Emperor of the Great Tang. My name is Brother Sun Wukong. If you want to know about my tricks, just give me the word. I'll slaughter you here and now, and send your souls flying." 
"I've never heard of these tricks of yours, so you'd better tell me about them." 
"Stand still and listen to me, my child," Monkey replied, and went on to say: 
"Great have been my magic powers since childhood; 
Changing with the wind, I show my might. 
Nourishing my nature and cultivating the truth, 
I have lived out the days and months, 
Saving my life by jumping beyond the cycle of rebirth. 
Once I searched sincerely for the Way 
Climbing the Spirit Terrace Mountain to pick medicinal herbs. 
On that mountain lives an ancient Immortal 
One hundred and eight thousand years old. 
Hoping that he would show me a road to immortality. 
He said that the elixir is in one's own body−− 
It is a waste of effort to seek it outside. 
I learned a great spell of immortality. 
I could scarcely have survived without it. 
Turning my gaze inwards, I sat and calmed my mind, 
While the sun and moon in my body intermingled. 
Ignoring the affairs of the world, I made my desires few, 
When senses, body, and mind were purified, my body was firm. 
Reversing the years and returning to youth is then easily done; 
The road to immortality and sagehood was not long. 
In three years I acquired a magic body, 
That did not suffer like a common one. 
I wandered around the Ten Continents and Three Islands, 
The corners of the sea and the edge of the sky. 
I was due to live over three hundred years 
But could not yet fly up to the Nine Heavens. 
I got a real treasure for subduing sea dragons: 
An iron cudgel banded with gold. 
On the Mountain of Flowers and Fruit 
In the Water Curtain Cave 
I assembled the fiendish hosts. 
The Great Jade Emperor sent me a decree 
Conferring high rank and the title 'Equaling Heaven'. 
More than once I wrecked the Hall of Miraculous Mist, 
And stole the Queen Mother's peaches several times. 
A hundred thousand heavenly soldiers in serried ranks 
Came with spears and swords to put me down. 
I sent the heavenly kings back up there in defeat, 
Made Nazha flee in pain at the head of his men. 
The True Lord Erlang, skilled at transformations, 
Lao Zi, Guanyin and the Jade Emperor 
Watched me being subdued from the Southern Gate of Heaven. 
As he was given some help by Lord Lao Zi, 
Erlang captured me and took to Heaven. 
I was tied to the Demon−subduing Pillar, 
And divine soldiers were ordered to cut off my head. 
Though hacked with swords and pounded with hammers 
So then I was struck with thunder and burned with fire. 
As I really do have magic powers, 
I was not in the slightest bit afraid. 
They took me to Lao Zi's furnace to be refined. 
The Six Dings roasted me slowly with divine fire. 
When the time was up and the furnace opened, out I jumped, 
And rushed round Heaven, my cudgel in my hand. 
No one could stop me making trouble everywhere, 
And I caused chaos in the thirty−three Heavens. 
Then our Tathagata Buddha used his Dharma power 
And dropped the Five Elements Mountain on my back. 
There I was crushed for full five hundred years, 
Until Sanzang came from the land of Tang. 
Now I have reformed and am going to the West 
To climb the Thunder Peak and see the Buddha. 
Enquire throughout the Four Seas, Heaven and Earth: 
You'll find that I'm the greatest monster ever. 
On hearing this the fiend laughed and said, "So you're the Protector of the Horses who wrecked Heaven, are you?" 
Monkey, who got angrier at being addressed by this title than at anything else, was furious. "You vicious monster. You steal the cassock and refuse to give it back, and on top of that you insult your lord and master. 
Just hold it, and see how you like my club." The dark fellow dodged the blow and then riposted with his spear. 
The pair of them fought a fine battle. 
And two men showing their toughness at the mouth of a cave. 
One stabs at heart and face, 
The other tries for arm and head. 
This one strikes cunning sideswipes with a club, 
That one brandishes his spear in three swift movements. 
The white tiger climbs the mountain to sink in his claws; 
The yellow dragon lying on the road turns round fast. 
Snorting out coloured mists, 
Disgorging rays of light, 
The two immortal fiends are hard to choose between: 
One is the Sage Equaling Heaven who has cultivated the truth; 
The other is the Great Black King become a spirit. 
On this battlefield in the mountains 
The pair of them fight for the cassock. 
The fiend fought some ten inconclusive rounds with Monkey, and as the sun was now rising steadily towards the zenith, the dark fellow raised his halberd to block the iron cudgel and said, "Brother Monkey, let's lay down our arms. I'll come back and fight you again after I've eaten." 
"You accursed beast," Monkey replied, "how can you call yourself a real man? If you were, you wouldn't be needing to eat after only half a day. I never even tasted water once in those five hundred years I spent under the mountain, but I wasn't hungry. Stop making excuses, and don't go. I'll let you have your meal if you give me back my cassock." The fiend waved his halberd in a feint, withdrew into the cave, and shut the doors fast behind him. Summoning his junior goblins, he ordered that a banquet be spread and wrote invitations asking all the devil kings of the mountain to come to the celebratory feast. 
Monkey charged the gates but was unable to force them open, so he had to go back to the Guanyin Monastery, where the monks had buried the old patriarch and were now all in attendance on the Tang Priest in the abbot's quarters. Breakfast was over, and lunch was being brought in. Just as they were bringing soup and more hot water, Monkey descended from the sky. The monks all bowed low and took him into the abbot's room to see Sanzang. 
"Ah, you're back, Wukong," he said. "What about the cassock?" 
"I've found the answer. We misjudged these monks. It was in fact stolen by a fiend from the Black Wind Mountain. I went to have a quiet look for him and found him sitting in front of grassy slope talking to a white−gowned scholar and an old Taoist. He's a self−confessed monster, and he said with his own mouth that he was inviting all the evil spirits to come and celebrate his birthday tomorrow, and that as he had come by a brocade Buddha's robe last night he wanted to celebrate that too, so he was going to give a great feast that he called an 'Assembly for the Celebration and Admiration of the Buddha's Robe'. I rushed him and took a swipe at him with my club, but the dark fellow turned into a puff of wind and fled. The Taoist disappeared too, and I was only able to kill the white−clad scholar, who was a white snake turned spirit. I went to the mouth of his cave as fast as I could and told him to come out and fight me. He admitted that he had carried it off. We fought for half a day without either of us winning, and then the monster went back to his cave for lunch and shut the stone gates behind him. He was too scared to come out again, so I came back to give you this news, master. Now we know where the cassock is, there's no need to worry that he won't give it back." 
On hearing this, the monks put their hands together or kowtowed as they invoked Amitabha Buddha and exclaimed, "He's found where it is−−we're saved." 
"Don't be so happy about it," Monkey warned, "I haven't got it yet, and my master hasn't left your monastery yet. You'll have to wait till I've recovered the cassock and my master has been seen off properly from here before you can consider yourselves safe. And if there is the slightest mistake, remember that I'm a very quick−tempered boss. Have you given my master the best food and tea? Have you given my horse the best fodder?" 
"Yes, yes, yes," the monks hastened to assure him. "We haven't been remiss in any way while looking after his Reverence." 
"While you were away all morning I've drunk tea three times and eaten twice, and they have not been at all offhand with me," Sanzang explained. "You'd better go back and do everything possible to recover that cassock." 
"Don't be in such a hurry," Monkey replied. "I know where it is, and I guarantee that I'll capture this wretch and return the cassock to you. There's no need to worry." 
As he was talking the senior abbot came in, set out the vegetarian meal, and invited Lord Monkey to eat. After swallowing a few mouthfuls Monkey mounted his magic cloud once more and went off on his hunt. On his way he saw a junior goblin going along the main path with a rosewood box under his left arm. Guessing that there must be some kind of letter in the box Monkey raised his cudgel and brought it down on his head. The blow did not just kill the goblin: it left him looking like a hamburger. Throwing his remains aside, Brother Monkey wrenched open the box and saw that it contained an invitation: Your pupil Bear presents his humble greetings to Your Excellency, the Supreme and Venerable One of the Golden Pool: 
I am deeply grateful for the magnificent kindness that I have so frequently received from you. When I saw the fire last night I failed to put it out, but I am sure that your divine intelligence will have suffered no harm from it. As your pupil has been lucky enough to obtain a Buddha's robe, I am giving a banquet, to which I hope you will come to appreciate the robe. I would be profoundly grateful if you would honour me with your presence at the appointed time. Written two days beforehand. 
On reading this, Monkey roared with laughter and said, "That crooked old monk. He thoroughly deserved to be killed. He'd been ganging up with evil spirits, had he? It's odd that he should have lived to be two hundred and seventy. I suppose that evil spirit must have taught him a few tricks about controlling his vital essence, which was why he lived so long. I can remember what he looked like, so I think I'll make myself look like him and go into that cave. This way I can see where he's put that cassock, and if I'm lucky I'll be able to get back and save a lot of trouble. 
The splendid Great Sage recited a spell, faced the wind, and made himself look just like the old monk. He hid his cudgel, walked straight to the entrance of the cave, and shouted, "Open up." 
The junior goblin opened up, and as soon as he saw him he rushed back to report, "Your Majesty, the Elder of the Golden Pool is here." The monster was astounded. 
"I've only just sent a youngster with an invitation for him, and the message can't have reached him yet. How could he possibly have got here so fast? The youngster can't even have met him. Obviously Brother Monkey has sent him here to ask for the cassock. Steward, hide that cassock somewhere where he won't see it." 
As he came to the front gates Monkey saw that the courtyard was green with bamboo and cypress, while peach and plum trees vied in beauty amid blossoming shrubs and fragrant orchids. It was a cave paradise. He also saw a couplet inscribed on the gates that read: 
In peaceful retirement deep in the hills, one is free of vulgar worries; Dwelling quietly in a magic cave, happy in divine simplicity. 
"This wretch has escaped from the dirt and dust of the world," thought Monkey, "and is a fiend who understands life." Going through the gates he went further inside and passed through a triple gate. Here were carved and painted beams, light windows and coloured doors. He saw that the dark fellow was wearing a dark green silken tunic over which was slung a black patterned silk cloak; on his head was a soft black hat, and on his feet a pair of dusky deerskin boots. 
When he saw Monkey approaching he straightened his clothes and came down the steps to greet him with the words, "I've been looking forward to seeing you for days, Golden Pool. Please take a seat." Monkey returned his courtesies, and when they had finished greeting each other they sat down and drank tea. Then the evil spirit bowed and said, "I sent you a note just now asking you to come over the day after tomorrow. Why is it that you've come to see me today, old friend?" 
"I was on my way here to visit you when I happened to see your message that you were giving a 'Buddha's Robe Banquet,' so I hurried over to ask you to let me have a look." 
"You've misunderstood, old friend," replied the evil monster with a smile. "It's the Tang Priest's cassock, and as he's been staying at your place you must have seen it there. Why come here to see it?" 
"When I borrowed it," Monkey said, "it was too late at night for me to be able to look at it. Since then, to my great surprise, it has been taken by Your Majesty. On top of that, the monastery has been burnt down and I have lost everything I own. That disciple of the Tang Priest's is quite a bold fellow, but he could not find it anywhere. I have come here to look at it as Your Majesty has had the great good fortune to recover it." 
As they were talking, a junior goblin came in from patrolling the mountain to announce, "Your Majesty, a terrible thing's happened. Brother Monkey has killed the lieutenant who is taking the invitation by the main path, and taken the chance of making himself look like the Elder of the Golden Pool to come here and trick the Buddha's robe out of you." 
"I wondered why the elder came today," the monster thought, "and why he came so soon, and now I see that it's really him." He leapt to his feet, grabbed his halberd, and thrust at Monkey. Monkey pulled the cudgel from his ear in a flash, reverted to his true form, parried the halberd's blade, jumped out from the main room into the courtyard, and fought his way back out through the front gates. This terrified all the fiends in the cave, scaring the wits out of young and old alike. The fine combat on the mountain that ensued was even better than the previous one. 
The courageous Monkey King was now a monk, 
The cunning dark fellow had hidden the Buddha's robe. 
At matching words they were both masters; 
In making the most of chances there was nothing between them. 
The cassock could not be seen, whatever one wished; 
A hidden treasure is a true wonder. 
When the junior demon on mountain patrol announced a disaster, The old fiend in his fury showed his might. 
Monkey transformed himself and fought his way out of the cave, As halberd and cudgel strove to decide the issue. 
The club blocked the lengthy halberd with resounding clangs; 
The halberd gleamed as it parried the iron club. 
Sun Wukong's transformations were rare on earth; 
Few could rival the foul fiend's magic. 
One wanted to take the robe to bring himself long life; 
One had to have the cassock to return with honour. 
This bitter struggle was not to be broken up; 
Even a Living Buddha could not have resolved it. 
From the mouth of the cave the pair of them fought to the top of the mountain, and from the top of the mountain they battled their way beyond the clouds. They breathed out wind and mist, set sand and stones flying, and struggled till the red sun set in the West, but the contest 
was still undecided. Then the monster said, "Stop for the moment, Monkey. It's too late to go on fighting tonight. Go away, go away. Come back tomorrow, and we'll see which of us is to live and which to die." 
"Don't go, my child," Monkey shouted back. "If you want to fight, fight properly. Don't use the time of day as an excuse to get out of it." With that he struck wildly at the dark fellow, who changed himself into a puff of wind, went back to his cave, and fastened the stone gates tightly shut. 
Monkey could think of no alternative to going back to the Guanyin Monastery. Bringing his cloud down, he called to his master, who had been waiting for him anxiously until he appeared suddenly before his eyes. 
Sanzang was very glad, until seeing that there was no cassock in Monkey's hands his happiness turned to fear. 
"Why haven't you got the cassock this time either?" he asked. 
Brother Monkey produced the invitation from his sleeve, and as he handed it to Sanzang he said, "Master, that fiend was friends with that dead crook. He sent a junior goblin with this invitation asking him to go to a 
'Buddha's Robe Banquet'. I killed the goblin, made myself look like the old monk, went into the cave, and tricked a cup of tea out of them. I asked him to let me see the cassock, but he wouldn't bring it out. Then as we were sitting there a mountain patrolman of some sort gave the game away, so he started to fight me. We fought till just now, and neither of us was on top, when he saw that it was late, shot back to his cave and shut the stone doors behind him. This meant that I had to come back for the moment." 
"How do your tricks compare with his?" Sanzang asked. 
"I'm not much better than him," Monkey replied, "and I can only keep my end up." Sanzang read the invitation and handed it to the prelate. 
"Can it be that your Patriarch was an evil spirit?" he said. 
The prelate fell to knees as fast as he could and said, "My lord, he was human. But because that Great Black King was cultivating the ways of humanity he often came to our temple to discuss the scriptures with our Patriarch, and taught him some of the arts of nourishing the divine and controlling the vital essence. That was why they were on friendly terms." 
"None of these monks have anything satanic about them," Monkey said. "They all have their heads in the air and their feet on the ground, and are taller and fatter than I am. They're not evil spirits. Do you see where it says 'Your pupil Bear' on the invitation? He must be a black bear who has become a spirit." 
To this Sanzang said, "There's an old saying that 'Bears and baboons are alike'. If they are all animals, how can they become spirits?" Monkey laughed and replied, "I'm an animal too, but I became the Great Sage Equaling Heaven. I'm just the same as him. All the creatures on heaven and earth that have nine openings to their bodies can cultivate their conduct and become Immortals." 
"Just now you said his abilities were the same as yours, so how are you going to beat him and get the cassock back?" Sanzang went on to ask. "Don't worry, don't worry," Monkey replied, "I can manage." As they were talking, the monks brought their evening meal and invited them to eat. The Sanzang asked for a lamp and went to bed in the front meditation hall as before. The monks all slept under thatched shelters rigged up against the walls, leaving the abbot's quarters at the back for the senior and junior prelate. It was a peaceful night. 
The jade firmament free of dust. 
The sky was full of coruscating stars, 
A single wave wiped out the traces. 
And the birds were silent on a thousand hills. 
The fisherman's light beside the bank was out, 
The Buddha−lamp in the pagoda dimmed. 
Last night the abbot's bell and drum had sounded; 
This evening the air was filled with weeping. 
This night he spent asleep in the monastery. Sanzang, however, could not sleep for thinking about the cassock. 
He turned over, and seeing that the sky was growing light outside the window, got straight out of bed and said, "Monkey, it's light, go and get the cassock." Brother Monkey bounded out of bed, and in an instant a host of monks was in attendance, offering hot water. 
"Look after my master properly," he said. "I'm off." 
Sanzang got out of bed and seized hold of him. "Where are you going?" he asked. 
"I've been thinking," said Monkey, "that this whole business is the Bodhisattva Guanyin's fault. Although this is her monastery and she receives the worship of all these monks, she allows that evil spirit to live in the neighbourhood. I'm going to the Southern Sea to find her and ask her to come here herself to make that evil spirit give us back the cassock." 
"When will you come back?" Sanzang asked. 
"After you've finished breakfast at the earliest, and by midday at latest, I'll have done the job. Those monks had better look after you well. I'm off now." 
No sooner were the words out of his mouth than he had disappeared without a trace and reached the Southern Sea. Stopping his cloud to take a look, he saw: 
Waters stretching till they joined the sky. 
Propitious light filled the firmament, 
Auspicious vapours shone over mountains and rivers. 
A thousand snow−capped breakers roared at the azure vault, 
A myriad misty waves reared at the sky. 
Water flew in all directions, 
Torrents poured everywhere. 
As the water flew in all directions it echoed like thunder; 
As the torrents poured everywhere they crashed and roared. 
And consider what lay in it: 
A precious mountain in many a misty color−− 
Red, yellow, purple, black, green, and blue. 
Then did he see the beautiful land of Guanyin, 
Potaraka Island in the Southern Sea. 
What a wonderful place to go−− 
With a thousand kinds of exotic flowers below them, 
And every type of magical herb. 
The wind shook priceless trees, 
The sun shone on golden lotus. 
Guanyin's palace was roofed with glazed tiles, 
The gates of the Tide Cave were set with tortoise shell. 
In the shade of green willows parrots talked, 
While peacocks called amid purple bamboo. 
The protecting gods are majestically severe; . 
Not pausing to take in the whole of this exotic scene, Monkey brought his cloud straight down to land under the bamboo grove. A number of devas were already there to meet him, 
and they said, "The Bodhisattva told us some time ago that you had been converted, Great Sage, and praised you very warmly. But if you are now protecting the Tang Priest, how have you found the time to come here?" 
"Because something has happened while I've been escorting him on his journey. Please go and tell the Bodhisattva that I'd like an audience with her." When the devas went into the cave to report this, Guanyin summoned him inside. Monkey did as he was told and bowed to her beneath the lotus throne. 
"What have you come for?" the Bodhisattva asked. 
"My master's journey has brought him to a monastery of yours," Monkey replied, "and I find that although you accept incense from its monks, you allow a black bear spirit to live in the neighbourhood, and have let him steal my master's cassock. I've tried to take it off him a number of times but got nowhere, so now I've come to ask you to demand it from him." 
"What nonsense, you ape," the Bodhisattva retorted. "Even if a bear spirit has stolen your cassock, what business have you to ask me to go and demand it for you? It all happened because you wanted to show it off, you big−headed and evil baboon, in front of petty−minded people. On top of that, in your wickedness you called up the wind to spread the fire that burnt down my monastery. And now you have the nerve to try your tricks here." 
These words from the Bodhisattva made Monkey realize that she knew all about the past and the future, so he hastily bowed down in reverence and pleaded, "Bodhisattva, forgive your disciple his sins, everything you say is true. All the same, my master will recite that spell again because that monster won't give back the cassock, and I couldn't bear the agonizing headache. That's why I came to bother you, Bodhisattva. I beg you in your mercy to help me catch that evil spirit, get the cassock back, and carry on towards the West." 
"That monster's magical powers are certainly no weaker than yours," the Bodhisattva said. "Very well then, out of consideration for the Tang Priest I'll go there with you." Monkey thanked her and bowed again, asked her to come out, and rode on the same magic cloud as her. In next to no time they reached the Black Wind Mountain, where they landed the cloud and headed for the cave on foot. 
As they were on their way, a Taoist priest appeared on the mountain slope. He was carrying a glass salver on which were two pills of the elixir of immortality. Monkey was immediately suspicious of him, so he struck straight at his head with the iron cudgel, sending blood splattering out from brain and chest. 
"Are you still as wild as this, you ape?" the shocked Bodhisattva asked. "He didn't steal your cassock, you didn't even know him, and he was no enemy of yours. Why kill him?" 
"You may not know him, Bodhisattva," Monkey replied, "but he was a friend of the Black Bear Spirit. 
Yesterday they and a white−clad scholar were sitting talking in front of the grassy mountainside. Today is the Black Spirit's birthday, and tomorrow he was coming to the 'Buddha's Robe Banquet'. That's why I recognized him. I'm sure that he was coming to greet that monster on his birthday." 
"If that's the way it is, very well then," said the Bodhisattva. Monkey then went to lift up the Taoist to take a look at him, and he saw that he had been a grey wolf. There was an inscription under the glass salver that lay beside him. It read, "Made by Master Emptiness−reached" . 
Brother Monkey laughed and sand, "What luck, what luck. This helps me and will save you trouble too, Bodhisattva. This monster has confessed of his own free will, and the other monster there can be finished off today." 
"What do you mean?" the Bodhisattva asked. 
"I have a saying," he replied, "that goes 'beat him at his own game'. Are you willing to let me do things my way?" 
"Tell me about it," the Bodhisattva said. 
"The two pills of immortality you see on that salver will be the present we take to visit him with," said Monkey, "and the words inscribed underneath−−'Made by Master Emptiness−reached'−−are the bait we'll set for him. If you do as I say, I have a plan for you that does not call for force or fighting. The fiend will collapse before our eyes, and the cassock will appear. If you won't let me have my way, then you go West, I'll go East, we can say good−bye to the Buddha's robe, and Sanzang will be up the creek." 
"You've got a cheek, you ape," replied the Bodhisattva with a smile. 
"No, no, I really have got a plan," Monkey protested. 
"Tell me about it then," said Guanyin. 
"You know it says on the salver, 'Made by Master Emptiness−reached,' Well, Master Emptiness−reached must be his name. Bodhisattva, if you're prepared to let me have my way, then change yourself into that Taoist. I shall eat one of those pills and then change myself into a pill, though I'll be a bit on the big side. You are to take the tray with the two pills on it and go to wish the fiend many happy returns. Give him the bigger of the pills, and when he's swallowed me, I'll take over inside him. If he doesn't hand the cassock over then, I'll weave a substitute out of his guts." 
The Bodhisattva could only nod her agreement. 
"What about it then?" said the laughing Monkey, and at this the Bodhisattva in her great mercy used her unbounded divine power and her infinite capacity for transformation to control her will with her heart and her body with her will−−in an instant she turned into Master Emptiness−reached. 
The wind of immortality blew around his gown, 
As he hovered, about to rise to emptiness. 
His dark features were as ancient as a cypress, 
His elegant expression unmatched in time. 
Going and yet staying nowhere, 
In the last resort all comes down to a single law, 
From which he is only separated by an evil body. 
"Great, great," exclaimed Brother Monkey at the sight. "Are you a Bodhisattva disguised as an evil spirit, or a Bodhisattva who really is an evil spirit?" 
"Monkey," she replied with a laugh, "evil spirit and Bodhisattva are all the same in the last analysis−−they both belong to non−being." Suddenly enlightened by this, Monkey curled up and turned himself into a pill of immortality: 
Rolling across the plate but not unstable, 
Round and bright without any corners. 
The double three was compounded by Ge Hong, 
The double six was worked out by Shao Weng. 
Pearls that shone in the daylight. 
On the outside were lead and mercury, 
But I cannot reveal the formula. 
The pill he changed himself into was indeed a little larger than the other one. The Bodhisattva noted this and went with the glass salver to the entrance of the fiend's cave. Here she saw 
Towering crags and lofty precipices, 
Where clouds grow on the peaks; 
Blue cypresses and green pines 
Where the wind soughs in the forest. 
On towering crags and lofty precipices 
The devils come and go, and few men live. 
The blue cypresses and green pines 
Inspire Immortals to cultivate the hidden Way. 
The mountains have gullies, 
The gullies have springs, 
Whose gurgling waters sing like a guitar, 
Where the reticent Immortal's pipe is casually played 
Here an evil spirit can attain enlightenment, 
And the boundless vow of the Buddha extends its mercy. 
When the Bodhisattva saw this she thought, "If the beast has chosen this cave, there must be some hope for him." And from then on she felt compassion for him. 
When she reached the entrance of the cave, the junior goblins at the gates greeted her with the words, 
"Welcome, Immortal Elder Emptiness−reached." As some of them ran in to announce her, the monster came out of the gates to meet her and say, "Master Emptiness−reached, how good of you to put yourself to this trouble. This is an honour for me." 
"Allow me to present you with this magic pill that, I venture to say, will confer immortality on you," the Bodhisattva replied. When the two of them had finished exchanging greetings they sat down, and the monster started to talk about the events of the previous day. The Bodhisattva quickly changed the subject by passing the salver to him and saying, "Please accept this token of my regard for you." She observed which was the bigger one and handed it to him with the words, "I wish Your Majesty eternal life." 
The monster handed the other pill to her and said, "I hope, Master Emptiness−reached, that you will share it with me." When they had finished declining politely, the fiend picked up the pill and was on the point of swallowing it when it went rolling into his mouth. Then Monkey resumed his true form and struck up some acrobatic postures, at which the fiend fell to the ground. The Bodhisattva too resumed her true form and asked the monster for the Buddha's cassock. As Monkey had now emerged through the monster's nostrils, she was worried that the evil spirit might misbehave again, so she threw a band over his head. He rose to his feet, ready to run them through with his spear, but Monkey and the Bodhisattva were already up in mid−air, where she began to recite the spell. As the monster's head began to ache, he dropped the spear and writhed in agony on the ground. The Handsome Monkey King collapsed with laughter in the sky, while the Black Bear Spirit rolled in torment on the earth. 
"Beast, will you return to the truth now?" asked the Bodhisattva. 
"I swear to, I swear to, if only you spare my life," the monster repeated over and over again. 
Monkey wanted to finish him off with no more ado, but the Bodhisattva stopped him at once: "Don't kill him−−I've got a use for him." 
"What's the point in keeping that beast alive instead of killing him?" Monkey asked. 
"I've got nobody to look after the back of my Potaraka Island," she replied, "so I shall take him back with me to be an island−guarding deity." 
"You certainly are the all−merciful deliverer who doesn't allow a single soul to perish," said Monkey with a laugh. "If I knew a spell like that one of yours, I'd say it a thousand times over and finish off all the black bears I could find." 
Although the bear spirit had come round and the spell had stopped, he was still in great pain as he knelt on the ground and begged pitifully, "Spare my life and I promise I'll return to the truth." The Bodhisattva descended in a ray of light, placed her hands on his head, and administered the monastic discipline to him; then she told him to take up his spear and accompany her. The black bear's evil intentions ceased from that day on, and his unbounded perversity came to an end. 
"Sun Wukong," ordered the Bodhisattva, "go back now. Serve the Tang Priest well, don't be lazy, and don't start trouble." 
"I'm very grateful to you for coming so far, Bodhisattva, and I must see you home," Monkey said. "That will not be necessary," she replied. Monkey took the cassock kowtowed to her, and departed. The Bodhisattva took Bear back to the sea, and there is a poem to prove it: 
A magic glow shines round the golden image, 
The thousand rays of glorious light. 
She saves all men, giving of her pity, 
Surveying the whole universe and revealing the golden lotus. 
Many shall now preach the scriptures' meaning, 
Nor shall there be any flaw therein. 
Subduing a demon and bringing him to truth, she returns to the sea; The religion of Emptiness has recovered the brocade cassock. 
If you don't know how things developed, listen to the explanation in the next chapter. 

`,
    },
  ],
]);
export {WIDTH, HEIGHT, ASSETS, COLORS, COMMIC};
