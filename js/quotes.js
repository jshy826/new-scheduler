const quotes = [
    {
        quote : "Life is just one damned thing after another.",
        author : "Elbert Hubbard",
        quote_kr : "인생은 지긋지긋한 일의 반복이다.",
    },
    {
        quote : "Life is an unbroken succession of false situations.",
        author : "Thornton Wilder",
        quote_kr : "인생은 거짓된 상황의 끝없는 연속이다.",
    },
    {
        quote : "They must often change who would be constant in happiness or wisdom.",
        author : "Confucius",
        quote_kr : "늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.",
    },
    {
        quote : "Education begins a gentleman, conversation completes him.",
        author : "Thomas Fuller",
        quote_kr : "교육이 신사를 만들기 시작하고, 대화는 신사를 완성시킨다.",
    },
    {
        quote : "He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
        author : "Confucius",
        quote_kr : "배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다.",
    },
    {
        quote : "I have always thought the actions of men the best interpreters of their thoughts.",
        author : "John Locke",
        quote_kr : "나는 행동이 사람의 생각을 가장 훌륭하게 해석해 준다고 늘 생각해왔다.",
    },
    {
        quote : "The greate aim of education is not knowledge but action.",
        author : "Herbert Spencer",
        quote_kr : "교육의 위대한 목표는 앎이 아니라 행동이다.",
    },
    {
        quote : "He who can, does. He who cannot, teaches.",
        author : "George Bernard Shaw",
        quote_kr : "할 수 있는 자는 행한다. 할 수 없는 자는 가르친다.",
    },
    {
        quote : "To freely bloom - that is my definition of success.",
        author : "Gerry Spence",
        quote_kr : "자유롭게 피어나기. 이것이 내가 내린 성공의 정의다.",
    },
    {
        quote : "Always bear in mind that your own resolution to succeed is more important than any one thing.",
        author : "Abraham Lincoln",
        quote_kr : "늘 명심하라. 성공하겠다는 너 자신의 결심이 다른 어떤 것보다 중요하다는 것을.",
    },
    {
        quote : "Victory belongs to the most perservering.",
        author : "Napoleon Bonaparte",
        quote_kr : "승리는 가장 끈기있는 자에게 돌아간다.",
    },
    {
        quote : "Try not to become a man of success but rather to become a man of value.",
        author : "Albert Einstein",
        quote_kr : "성공한 사람보다는 가치 있는 사람이 되려 하라.",
    },
    {
        quote : "Weakness of attitude becomes weakness of character.",
        author : "Albert Einstein",
        quote_kr : "나약한 태도는 성격도 나약하게 만든다.",
    },
    {
        quote : "The only cure for grief is action.",
        author : "George Henry Lewes",
        quote_kr : "슬픔의 유일한 치료제는 행동이다.",
    },
]

const quote = document.querySelector("#quote span:first-child");
const quote_kr = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
quote_kr.innerText = todaysQuote.quote_kr;
