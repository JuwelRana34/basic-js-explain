<!-- Variable : -->

Variable হচ্ছে একটা Container এর মত, যেখানে Data কে সংরক্ষন করে রাখা যায় এবং প্রয়জোন অনুসারে ব্যবহার করা যায়। সেই Data গুলো প্রধানত দুই type এর হতে পারেঃ

1.Primitive datatype

2.Non-primitive datatype


আবার, Primitive Datatype গুলো হতে পারেঃ
Number
String
Boolean
Undefined
Null
Symbol
BigInt

এবং Non-primitive Datatype গুলো হতে পারেঃ
Array
Object
Function
RegExp
Map
Set
WeakMap
WeakSet, ইত্যাদি আরও আছে...।

এখন এই Datatype গুলো Variable এ store করার জন্য JavaScript এ চার ধরনের পদ্ধতি অবলম্বন করতে পারি, যেগুলো হলো।

Automatically (Implicitly Created and Assigned Values Without Explicit Declaration) [সংক্ষেপে ICAVWED variable বা এটাকে Undeclared variable ও বলা যায়]
Using var
Using let
Using const

<!-- ICAVWED: -->
এই পদ্ধতিতে স্বয়ংক্রিয়ভাবে Global variable তৈরি হয়, যা কোনো ধরনের প্রত্যক্ষ Declaration ছারাই।
যেমনঃ
// এখানে myName একটা ICAVWED variable myName = "Neela";
console.log(myName); // Neela


<!-- Using var: -->
এই পদ্ধতিতে প্রত্যক্ষ Declaration এর মাধ্যমে Global variable তৈরি হয়।
যেমনঃ
var myName = "Neela"; // Declared variable with var console.log(myName); //Neela
এখানে var myName করার মাধ্যমে myName নামে একটি Variable Declare করা হলো। সেই সাথে assignment ( = ) operator এর মাধ্যমে "Neela" নামে একটি String data কে initialize করা হলো। এখন myName এর মাধ্যমে Program এর বিভিন্ন যায়গায় "Neela" String টাকে ব্যবহার করতে পারবো।
এটা তুলনামুলক ICAVWED এর থেকে বেশি নিরাপদ। এবং accidental naming conflicts হওয়ার সম্ভাবনা তুলনা মুলক কম। এবং Global variable তৈরি করার জন্য মুলত var statement ব্যবহার করা হয়।


<!-- Using let: --> 
এই পদ্ধতিতে প্রত্যক্ষ Declaration এর মাধ্যমে variable তৈরি হয়। তবে let এর সাথে var এবং const এর কিছু পার্থক্য আছে।
যেমনঃ
let myName = "Neela"; // Declared variable with let console.log(myName); // Neela

<!-- Using const: --> 
এই পদ্ধতিতে প্রত্যক্ষ Declaration এর মাধ্যমে variable তৈরি হয়। তবে const এর সাথে var এবং let এর কিছু পার্থক্য আছে।
যেমনঃ
const myName = "Neela"; // Declared variable with const console.log(myName); //Neela
এখন আপনার কাছে মনে হতে পারে, সবগুলো পদ্ধতিই তো একই লাগছে তাহলে var, let, const এগুলো কেন? হ্যাঁ বলছি। এখানে সব গুলো পদ্ধতি দেখতে একই রকম হলেও এগুলোর মাঝে যথেস্ট পার্থক্য রয়েছে। এবং এখানে একেকটার গুরুত্ব JavaScript Program এ একেক জায়গায় বেশি।
এখানে var, let & const এর মধ্যে পার্থক্যঃ
var এর বৈশিষ্ট্য হলোঃ
Redeclare করা যায়।
Reassign করা যায়।
এটি Function & Global Scope ।
Temporal Dead Zone (TDZ) নেই।
Global variable তৈরিতে ব্যবহার হয়।
let এর বৈশিষ্ট্য হলোঃ
Redeclare করা যায় না।
Reassign করা যায়।
এটি Block Scope ।
Temporal Dead Zone (TDZ) আছে।
let সেখানে ব্যবহার করা হয় যেখানে value পরিবর্তীত।
const এর বৈশিষ্ট্য হলোঃ
Redeclare করা যায় না।
Reassign করা যায় না।
এটি Block Scope ।
Temporal Dead Zone (TDZ) আছে।
const সেখানে ব্যবহার করা হয় যেখানে value অপরিবর্তীত।
এখন আমরা var, let, const এর বৈশিষ্ট্য গুলোর সম্পর্কে বিস্তরিত জানার চেষ্টা করবো।
Redeclaration in Variable:
Redeclaration জানার আগে বুঝতে হবে আসলে declare জিনিসটা কি? আপনাদের কি মনে আছে ,একটু আগের ICAVWED variable এর কথা? যেখানে, কোন ধরনের প্রত্যক্ষ Declaration ছারাই global variable তৈরি করেছিলাম।
এই ভাবে,

// এখানে myName একটা ICAVWED variable myName = "Neela"; console.log(myName); //Neela
আর declare হচ্ছে JavaScript এর বিশেষ কিছু keyword এর মাধ্যমে প্রত্যক্ষ ভাবে নিশ্চিত করে দেওয়া যে, একটি variable ঘোষনা করা হলো। এখানে keyword গুলো হলোঃ var, let & const । এগুলোকে কিন্তু আবার declaration statement ও বলা যায়। শুধু মাত্র variable নামের প্রথমে var, let & const এর যেকনো একটিকে রাখলেই সেটা তখন declared Variable হয়ে যাবে।
যেমনঃ
var myName = "Neela"; // এটা একটা Declared Variable console.log(myName); //Neela
let myName1 = "Neela"; // এটা একটা Declared Variable console.log(myName1); //Neela
const myName2 = "Neela"; // এটা একটা Declared Variable console.log(myName2); //Neela
declare কি সেটা বুঝতে পারলাম। এখন আসি Redeclaration এ। Redeclaration শুনেই বোঝা যাচ্ছে যে, এখানে একই নামে দুইএর অধিকবার declare হবে এমন কিছু। হ্যাঁ Redeclaration এ ঠিক তাইই হয়।
যেমনঃ
var myName = "Neela"; // এটা একটা Declared Variable console.log(myName); //Neela
var myName = "Ami bhoot"; // এটা একটা Redeclared Variable console.log(myName); // Ami bhoot
অর্থাৎ এখানে myName নামে ইতিপুর্বে একটা variable declare করা হয়েছে। এর ফলে প্রথমে console এ "Neela" এবং পরে "Ami bhoot" প্রিন্ট হয়েছে।


<!-- Reassign in Variable: -->
Reassign জানার আগে বুঝতে হবে আসলে asign জিনিসটা কি? ইতি পুর্বে আমরা অনেক বার দেখলাম যে var myName = "Neela" এভাবে একটি Declared Variable তৈরি করা যায়। আমরা এটাকে আরও একভাবে করতে পারি।
যেমনঃ-
// এখানে myName একটা Declared Variable কিন্তু value initialize করা নেই var myName; // myName এর মধ্যে value assign করা হলো। myName = "Neela"; console.log(myName); //Neela
এখানে var myName এর মাধ্যমে আমরা একটা Variable Declare করেছি তবে প্রথমে এটাতে কোনো value যুক্ত করিনি বা initialize করি নি। এর পরের লাইনে myName = "Neela" করার মাধ্যমে myName variable এর মধ্যে একটি String value "Neela" কে যুক্ত করলাম এটাই হচ্ছে assign
এখানে আর একটা বিষয় বলে রাখি, এখানে প্রথমে যেহেতু myName এর মধ্যে কোনো value initialize করি নি তাই এধরনের variable গুলোকে uninitialize variable ও বলা হয়। আর uninitialize variable এ Automatically Undefined datatype প্রাপ্ত হয়।
যেমনঃ
// এখানে myName একটা Declared Variable কিন্তু uninitialize var myName;
console.log(myName); // undefined
// myName এর মধ্যে value assign করা হলো।
myName = "Neela";
console.log(myName); //Neela
আমরা assign জিনিসটা কি সেটা বুঝলাম। এখন দেখবো Reassign সম্পর্কে। Reassign শুনলেই বোঝা যাচ্ছে। এখানে initialize কৃত বা value assign কৃত কোনো variable এর মধ্যে নতুন করে আবার নতুন কোনো value assign করা হবে বা যুক্ত করা হবে এমন কিছু।
যেমনঃ

// এখানে myName একটা Declared Variable কিন্তু uninitialize var myName; // এখানে myName এর মধ্যে value assign করা হলো। myName = "Neela"; console.log(myName); // Neela
// এখানে myName এর মধ্যে value Reassign করা হলো। myName = "Neela is very dangerous";
console.log(myName); // Neela is very dangerous
এভাবে এতক্ষণ আমরা VARIABLE সম্পর্কে কিছুটা ধারণা পেলাম যে।
variable কি?
variable কিভাবে কাজ করে?
ICAVWED variable কি?
ICAVWED variable কিভাবে কাজ করে?
variable কিভাবে declare করা যায়?
variable কিভাবে Redeclare করা যায়?
variable এ কিভাবে value assign করা যায়?
variable এ কিভাবে value Reassign করা যায়?
এবং var let const এর মধ্যে পার্থক্য।