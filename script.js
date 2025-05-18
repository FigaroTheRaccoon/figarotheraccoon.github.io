// script.js

// Simple cookie helpers
function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(
    value
  )};expires=${d.toUTCString()};path=/`;
}
function getCookie(name) {
  return document.cookie.split("; ").reduce((r, kv) => {
    const [k, v] = kv.split("=");
    return k === name ? decodeURIComponent(v) : r;
  }, "");
}

// Persist current question ID
function saveProgress(qId) {
  setCookie("quizProgress", qId);
}
function loadProgress() {
  return "q0"; //just for now
}

// Define your quiz flow
const quiz = {
  q0: {
    type: "mcq",
    text: "This server is dedicated to those genuinely committed to studying the Bible and its teachings. You will not be removed based on your beliefs, no matter how heretical they may appear. However, exceptions apply to groups such as Mormons and Muslims, since they adhere to extra-biblical texts, excluding the Apocrypha. The verification process is thorough by design: its goal is to encourage sincere engagement while filtering out biased perspectives. That being said, do you believe in both the Old and New Testaments?",
    choices: [{ txt: "Yes.", next: "q1" }],
  },
  q1: {
    type: "mcq",
    text: "Good. Most Christians affirm that the Bible is the ultimate source of truth for their faith (the principle of Sola Scriptura, for many Protestants at least). If a long-held church tradition or creed (like the Nicene Creed, formulated centuries after the apostles) seemed to present a concept in a way that was difficult to directly and explicitly find stated in the same terms within the New Testament itself, what would be the most faithful approach?",
    choices: [
      {
        txt: "Assume the later creed must be correct because so many learned and godly people affirmed it over centuries, and try to find ways to interpret Scripture to fit the creed.",
        next: "q2",
      },
      {
        txt: "Conclude that both are equally authoritative and there's no real need to reconcile any apparent differences.",
        next: "q3",
      },
      {
        txt: "Prioritize the direct statements and consistent patterns found within Scripture itself, even if that means questioning how the later creed formulated its doctrines or whether it added layers of interpretation not explicitly in the Bible",
        next: "q4",
      },
    ],
  },
  fail: {
    type: "text",
    text: "If you find yourself at a point of genuine curiosity or a desire for deeper clarity and freedom, especially regarding the very real burdens that religious rule-keeping (often misunderstood as biblical Christianity) can impose, and if you're willing to test everything against Scripture, then exploring https://forbiddenbibletruth.com might be a significant step. It's offered for free, so the only investment is your time and a willingness to engage with an open, yet discerning, mind. Perhaps the 'tough truths' it presents might indeed be the path to the comfortable and liberating reality God intends for you. Besides that, in the Discord server, go to the #verify-chat channel and send the message '22'. This is your verification code.",
    next: "q0",
  },
  q2: {
    type: "mcq",
    text: "If our primary commitment is to what God has revealed in Scripture, and we find ourselves needing to interpret Scripture through the lens of a later creed rather than evaluating the creed against the clear and consistent teachings of Scripture, is there a potential danger that the human tradition (the creed) could inadvertently be elevated to a position equal to or even above Scripture, subtly shaping our understanding of God's Word rather than God's Word purely shaping our understanding?",
    choices: [
      {
        txt: "No, because the Holy Spirit guided the Church in formulating creeds, so they are inherently reliable interpretations of Scripture.",
        next: "q5",
      },
      {
        txt: "Yes, there's a potential danger. Even with sincere intentions, human councils and traditions can develop interpretations that, over time, might obscure or add to the original scriptural message if not continually re-examined against the Bible itself.",
        next: "q3",
      },
    ],
  },
  q3: {
    type: "mcq",
    text: "You value prioritizing Scripture. Paul, in 2 Timothy 2:15, urges Timothy to 'study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.' 'Rightly dividing' (ὀρθοτομοῦντα/orthotomounta) implies carefully and accurately cutting or dissecting the Word. If different parts of Scripture were addressed to different audiences (e.g., Israel under Law vs. the Body of Christ under Grace) with different programs and promises, could trying to uniformly apply all commands or theological statements to all believers in all ages, without recognizing these distinctions, lead to confusion or apparent contradictions that aren't actually there when the Word is 'rightly divided'?",
    choices: [
      {
        txt: "No, the core message of God is universally the same for all people at all times; any perceived differences are minor or just different facets of the same truth.",
        next: "q4",
      },
      {
        txt: "Yes, recognizing distinct audiences and dispensations (like the specific focus of Jesus' earthly ministry to Israel versus Paul's later revelation of the mystery for the Body of Christ) could be crucial for understanding why some scriptural statements seem to differ, and for correctly applying truth.",
        next: "q6",
      },
    ],
  },
  q4: {
    type: "mcq",
    text: "If we encounter seemingly contradictory statements in Scripture (for example, James saying 'by works a man is justified, and not by faith only' [James 2:24], and Paul saying 'a man is justified by faith without the deeds of the law' [Romans 3:28]), and we don't deeply investigate the specific context, audience, and definition of terms each author is using, could we risk either dismissing parts of Scripture as hopelessly contradictory, or creating a harmonized 'average' doctrine that doesn't actually do full justice to what either author was originally saying to their specific audience?",
    choices: [
      {
        txt: "God's Word is unified, so any apparent contradictions are just our limited understanding; we should just accept them as a mystery and move on.",
        next: "q5",
      },
      {
        txt: "Yes, failing to carefully examine the context and intended audience of such passages can lead to significant misinterpretations or the creation of theological compromises that don't accurately reflect the original intent. This suggests that diligent exegesis, considering these factors, is vital.",
        next: "q6",
      },
    ],
  },
  q5: {
    type: "mcq",
    text: "The belief that the Holy Spirit infallibly guided all major church councils to produce perfectly accurate doctrinal statements is a strong claim. However, history records many councils with significant political maneuvering, disagreements among bishops, and outcomes that were sometimes later revised or contested (e.g., the 'Robber Synod' of Ephesus in 449, or the changing fortunes of Arian vs. Nicene views depending on imperial favor). If the process of creedal formation was sometimes influenced by human fallibility and external pressures, does it suggest that while creeds can be valuable summaries, they should still always be held up to the ultimate authority and scrutiny of Scripture itself?",
    choices: [
      {
        txt: "No, the final established creeds (like the Nicene Creed as understood by 'orthodoxy') represent the settled, Spirit-led understanding of the Church, and to question them is to question the Spirit's guidance of the Church.",
        next: "fail",
      },
      {
        txt: "Yes, even if we believe the Spirit was at work, human elements were also involved. Therefore, all creeds and traditions must remain subordinate to, and constantly tested against, the clear teachings of Scripture. True open-mindedness means being willing to see if even cherished traditions align perfectly with the Word.",
        next: "q6",
      },
    ],
  },
  q6: {
    type: "mcq",
    text: "You've acknowledged the importance of Scripture as the ultimate authority, the need for careful interpretation considering audience and context, and the possibility that traditions might need re-evaluation. Now, consider a specific example: The common understanding of John 1:1 ('In the beginning was the Word, and the Word was with God, and the Word was God') is that 'the Word' refers to a pre-existent, personal, divine Son. However, what if a careful examination of the Old Testament background (e.g., God's creative Davar or Word in Psalm 33:6; the personification of Wisdom in Proverbs 8) and contemporary Jewish thought (where 'Logos' or 'Memra' often referred to God's active utterance or wisdom, not necessarily a distinct divine person) suggests that John's original Jewish audience might have understood 'the Word' differently – perhaps as God's eternal wisdom and creative power which then became perfectly embodied in the human Jesus? If such an alternative, contextually-grounded exegesis was presented, would a truly open mind be willing to investigate it thoroughly, even if it challenged a foundational aspect of a later creed like Nicaea which built heavily on a specific interpretation of 'Logos'?",
    choices: [
      {
        txt: "No, the Nicene interpretation of the Logos is settled and non-negotiable; alternative exegeses, even if they seem contextually plausible, are likely just attempts to undermine established truth and should be rejected.",
        next: "fail",
      },
      {
        txt: "Yes. If a scriptural interpretation is well-grounded in the Bible's own context and language, it deserves serious consideration, even if it means re-examining how later creeds understood or elaborated upon that biblical text. True allegiance is to what Scripture actually says and means, not necessarily to how it has always been traditionally interpreted, especially if that tradition developed centuries later.",
        next: "pass",
      },
    ],
  },
  pass: {
    type: "mcq",
    text: "You have reached the most logical conclusion. May I tell you something?",
    choices: [{ txt: "Yes.", next: "pass1" }],
  },
  pass1: {
    type: "mcq",
    text: "I chose to put truth above everything else. I stopped caring about grades and school success because I wanted to spend my time learning the Scriptures. I even gave up video games and entertainment because they no longer mattered to me compared to the value of knowing God. As a result, I now have to make up for some of those decisions, but I do not regret them. When Jesus said, 'Follow Me,'' He meant it. Even if that call was first given to the people of Israel, the message still holds true: put God first and leave behind the things of the world. That is what I did. I made a clear choice to seek God over anything temporary. Most people chase success, pleasure, or approval. I chose to chase truth. And I would make that choice again.",
    choices: [{ txt: "Wow.", next: "q7" }],
  },
  q7: {
    type: "mcq",
    text: "Consider the sheer amount of time and mental energy often devoted to understanding worldly systems – careers, hobbies, finances, politics, entertainment. If the biblical claim is that knowing God and His eternal purpose is of infinitely greater value than these temporary things (Matthew 6:33: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you'; Philippians 3:8: 'Yea doubtless, and I count all things but loss for the excellency of the knowledge of Christ Jesus my Lord'), does it logically follow that a proportional, or even greater, dedication of our focused attention and study should be given to understanding His Word accurately, even if it means re-evaluating what we thought we already knew?",
    choices: [
      {
        txt: "Not necessarily. A basic understanding is sufficient for salvation, and God doesn't expect everyone to be a theologian. Daily life and responsibilities naturally take up most of our attention.",
        next: "q8",
      },
      {
        txt: "Yes, if the prize is truly of infinite value, then the pursuit of accurately understanding the 'rules of the game' or the 'map to the treasure' (so to speak, referring to God's revealed truth) should warrant our highest intellectual and spiritual commitment, potentially requiring us to shift our priorities significantly.",
        next: "q9",
      },
    ],
  },
  q8: {
    type: "mcq",
    text: "While it's true that salvation, in its essence (especially as presented by Paul regarding justification by faith for the Body of Christ), is a gift not earned by deep theological knowledge, Scripture also speaks of growing in knowledge, of spiritual maturity, of discerning truth from error, and of rewards for faithful stewardship (Ephesians 4:13-15; Hebrews 5:12-14; 1 Corinthians 3:12-15). If a Christian could gain a deeper, more accurate understanding of God's specific will and purpose for them in this age, which might lead to greater effectiveness in service, a more profound relationship with God, and a richer eternal inheritance, but they chose not to pursue it because 'a basic understanding is enough' or due to preoccupation with lesser things, could they be inadvertently missing out on a fullness of blessing and understanding that God actually desires for them?",
    choices: [
      {
        txt: "Perhaps some minor blessings, but the core of a Christian life is simple faith and good behavior; deep theological accuracy is secondary and doesn't significantly impact one's ultimate outcome or relationship with God.",
        next: "q10",
      },
      {
        txt: "Yes, it seems plausible that settling for a superficial understanding when a deeper, more accurate knowledge is attainable (even if it requires effort and re-evaluation) might mean forgoing significant spiritual growth, clarity of purpose, and potential future rewards that God intends for those who diligently seek Him through His Word.",
        next: "q9",
      },
    ],
  },
  q9: {
    type: "mcq",
    text: "You see the value in dedicated pursuit of truth. Now, consider someone like the individual whose testimony we just read: they reprioritized their life, sacrificing conventional success and entertainment specifically to delve deeply into Scripture, driven by a conviction that understanding God's Word accurately was of supreme importance. While not everyone's circumstances or specific calling will lead to the exact same outward sacrifices, does the underlying principle of being willing to put the pursuit of divine truth above even highly valued temporary comforts, ambitions, or previously held beliefs resonate with the biblical calls for wholehearted devotion (Deuteronomy 6:5; Matthew 22:37) and the apostle Paul's example of counting 'all things but loss' for Christ?",
    choices: [
      {
        txt: "That level of dedication is admirable but extreme, and likely not required or even healthy for most believers who need to balance spiritual pursuits with 'normal' life responsibilities.",
        next: "q10",
      },
      {
        txt: "Yes, while the expression might vary, the principle of prioritizing the knowledge of God and His truth above all else, and being willing to make significant sacrifices for it, seems to be at the heart of a truly committed faith. This implies a readiness to be 'radical' if the truth demands it.",
        next: "q11",
      },
    ],
  },
  q10: {
    type: "mcq",
    text: "If a Christian encounters a scriptural interpretation that deeply challenges a foundational belief they've held (perhaps about the nature of God, the plan of salvation, or the applicability of certain commands), but investigating it thoroughly would require significant time, mental effort, and the potential discomfort of realizing they might have been wrong, what does 'loving the truth' (2 Thessalonians 2:10, which implies a positive action) practically demand in that situation, especially if the alternative interpretation claims to resolve scriptural inconsistencies and offer a clearer view of God's grace?",
    choices: [
      {
        txt: "Briefly consider it, but if it seems too complex or too different from what trusted leaders or traditions teach, it's safer to stick with the established understanding to avoid confusion or error.",
        next: "fail",
      },
      {
        txt: "Recognize that truth is precious and sometimes requires diligent searching ('It is the glory of God to conceal a thing: but the honour of kings is to search out a matter,' Proverbs 25:2). Therefore, a commitment to truth means being willing to invest the necessary effort to rigorously examine the challenging interpretation against all of Scripture, even if it's uncomfortable or leads to changing one's mind.",
        next: "q11",
      },
    ],
  },
  q11: {
    type: "mcq",
    text: "You've affirmed the value of dedicated, even sacrificial, pursuit of truth, and a willingness to rigorously examine challenging interpretations. Given this, if you encountered a comprehensive theological framework claiming to be based solely on a consistent, literal (where appropriate), and contextually sound exegesis of Scripture, rightly divided according to its own internal distinctions (like Paul's unique apostleship and gospel) – a framework that claims to resolve many long-standing theological paradoxes and offer a more coherent picture of God's character and plan – what would be an appropriately open-minded response to give it the attention it deserves, especially if those presenting it are as dedicated to scriptural truth as you profess to be?",
    choices: [
      {
        txt: "Acknowledge their dedication but remain skeptical, as many systems claim to be 'biblical.' I'd give it a cursory look but wouldn't invest too much time unless it immediately aligned with my current core understandings.",
        next: "fail",
      },
      {
        txt: "Recognize that if a system makes such significant claims and is presented by those who demonstrate a deep commitment to scriptural authority, it warrants thorough, patient, and unbiased investigation, setting aside preconceived notions as much as possible to fairly evaluate its scriptural support and internal consistency. This would mean giving it as much attention as, or more than, one gives to reinforcing already-held beliefs.",
        next: "win",
      },
    ],
  },
  win: {
    type: "mcq",
    text: "You're correct, if we only consider ideas that align with our traditions, we risk becoming like the Pharisees, who rejected Christ because He didn’t fit their system (John 5:39-40).",
    choices: [{ txt: "Yeah", next: "q12" }],
  },
  q12: {
    type: "mcq",
    text: "You've affirmed a commitment to thorough, unbiased investigation of Scripture. Many Christians, across various traditions, deeply value the early Church's understanding of foundational truths. When we read the earliest post-apostolic writers (those immediately following the New Testament authors, like Clement of Rome or Polycarp), we find them consistently emphasizing one God, the Father Almighty, and Jesus Christ as His Son, our Lord. While they clearly held Jesus in the highest esteem, their language often distinguishes 'God' (typically referring to the Father) from the Son He sent. If later, more complex theological formulations (like those defining the Trinity in precise philosophical terms developed over several centuries and councils) seem to shift the emphasis or use different categories than these earliest accessible Christian writers, might it be valuable to re-examine how directly and explicitly those later formulations are derived from the original apostolic witness found in the New Testament itself, or if they represent a development in understanding that, while perhaps aiming for greater precision, might also have introduced new philosophical concepts?",
    choices: [
      {
        txt: "The later councils (like Nicaea and Constantinople) were Spirit-led and definitively clarified the apostolic faith; their formulations are the authoritative lens through which we should understand both Scripture and the earlier, less precise writers.",
        next: "q13",
      },
      {
        txt: "While later councils aimed to clarify truth, it's always beneficial to compare their conclusions directly with the language and emphasis of the New Testament and the very earliest post-apostolic witnesses to ensure the development remained fully aligned with the original foundation, and to understand the nuances of that development.",
        next: "q14",
      },
    ],
  },
  q13: {
    type: "mcq",
    text: "If the precise Trinitarian formulations using terms like homoousios (one substance) and defining God as 'three Persons (Hypostases) in one Essence (Ousia)' were the clear and universally understood apostolic faith from the very beginning, why do we see centuries of intense debate, multiple councils with differing outcomes, and the need for such sophisticated philosophical language to define it against various other widely held Christian views (like those termed Arian, Sabellian, etc.)? Could this historical process suggest that the way these truths were articulated and understood developed over time, even if the core faith in the Father, Son, and Spirit was always present?",
    choices: [
      {
        txt: "The debates were primarily about combating heresies that denied the already existing truth; the language developed to protect the original faith from error, not to change its substance.",
        next: "q15",
      },
      {
        txt: "The historical process itself, with its complexities and evolving terminology, indicates that understanding the precise nature of God and the relationship between Father, Son, and Spirit was a matter of deep theological reflection and development within the Church, making it worthwhile to study how those articulations relate to the primary witness of Scripture.",
        next: "q14",
      },
    ],
  },
  q14: {
    type: "mcq",
    text: "You acknowledge the value of comparing later formulations with the original scriptural witness. Consider John 17:3, where Jesus prays to His Father: 'And this is life eternal [age-during life], that they might know thee the only true God, and Jesus Christ, whom thou hast sent.' Or 1 Corinthians 8:6, where Paul states: 'But to us there is but one God, the Father, of whom are all things, and we in him; and one Lord Jesus Christ, by whom are all things, and we by him.' These passages seem to explicitly identify 'the only true God' or 'the one God' with the Father, while distinguishing Jesus Christ as His Son or Lord sent by Him. If a later theological framework speaks of the Son and Spirit as also being 'the one God' in the same ultimate sense as the Father, how do we reconcile this with the direct and seemingly exclusive language used by Jesus and Paul in these instances without appearing to modify the plain sense of their words?",
    choices: [
      {
        txt: "These passages are understood within the fuller context of Trinitarian doctrine, where 'God' can refer to the Father specifically as the source, or to the entire Godhead. The Son and Spirit are still part of that one Godhead, even if these verses highlight the Father's role.",
        next: "q15",
      },
      {
        txt: "These passages present a clear prima facie case that the earliest apostolic understanding identified the Father, uniquely and singularly, as 'the one true God.' This warrants a very careful examination of how later doctrines of co-equality and shared ultimate deity relate to this foundational biblical language, to ensure nothing is added to or taken away from this primary testimony.",
        next: "q16",
      },
    ],
  },
  q15: {
    type: "mcq",
    text: "A key aspect of later Trinitarian theology is the concept of the eternal generation of the Son and the eternal procession of the Spirit, ideas developed to explain how the Son and Spirit can be fully God yet distinct from the Father without implying multiple gods or a beginning in time for the Son/Spirit as divine Persons. While these concepts are profound, are terms like 'eternal generation' or the precise philosophical distinctions between 'ousia' and 'hypostasis' explicitly and clearly laid out in Scripture itself with those exact meanings, or are they theological constructs developed by the Church Fathers using philosophical tools available to them to try and articulate the mystery of God based on their interpretation of the biblical data?",
    choices: [
      {
        txt: "While the exact terms might be extra-biblical, the concepts they represent are necessary logical inferences from the totality of Scripture's teaching about the Father, Son, and Spirit.",
        next: "q17",
      },
      {
        txt: "It's more accurate to say these are theological constructs, valuable in their historical context for attempting to articulate a deep mystery, but we should be careful not to treat these constructs as having the same direct scriptural authority as the Bible's own words and categories. This might open the door to seeing if Scripture can speak on these matters in simpler, more direct terms.",
        next: "q16",
      },
    ],
  },
  q16: {
    type: "mcq",
    text: "You're open to the idea that Scripture might speak more directly or simply than later complex formulations. Now, consider passages about Christ's death and resurrection, which are central to the Christian faith. Paul states 'Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures' (1 Corinthians 15:3-4). If God is defined as inherently immortal and unable to die (1 Timothy 1:17: 'the King eternal, immortal, invisible, the only wise God'; 1 Timothy 6:16: 'Who only hath immortality'), and Jesus truly died and was truly buried (not just His body, but He was buried, as Paul puts it), does this create a significant theological tension if Jesus is also believed to be the one, immortal, supreme God in the same sense as the Father? Could the scriptural emphasis on His real death and resurrection point to His genuine humanity as the Son of God, distinct from the Father who is the 'only true God' that cannot die?",
    choices: [
      {
        txt: "This is typically explained by Christ's two natures: His human nature died, but His divine nature did not. This orthodox understanding resolves the tension.",
        next: "q17",
      },
      {
        txt: "The idea of 'two natures' is itself a later theological construct to explain a difficulty. The plain language of Scripture is that Christ (the person) died. If the Person of Christ is fully and indivisibly the one immortal God, then His actual death seems problematic. This suggests a need to re-examine if Scripture requires us to view Christ as the one supreme, immortal God in the first place, or if His divine sonship and Lordship are understood differently.",
        next: "q18",
      },
    ],
  },
  q17: {
    type: "mcq",
    text: "You appeal to established theological constructs like 'eternal generation' or 'two natures' to resolve apparent scriptural tensions. These constructs are indeed profound attempts by the Church to understand and articulate divine mysteries. However, if these constructs themselves are not explicitly and detailedly spelled out in Scripture but are logical edifices built upon scriptural interpretations, is it possible that the initial interpretations of certain key passages (like those concerning the Logos, or Christ's relationship to the Father) might have set a trajectory that necessitated these further complex explanations? In other words, if a simpler, more direct reading of the primary scriptural data (e.g., emphasizing the Father as the 'only true God' and Jesus as His uniquely begotten human Son and exalted Lord) didn't create these specific tensions in the first place, would such complex philosophical constructs be as necessary?",
    choices: [
      {
        txt: "These constructs aren't just solving problems; they are the positive articulation of the deep truth about God's triune nature and Christ's person, which is robustly, if not always explicitly in those exact terms, supported throughout Scripture. They are necessary for a full understanding.",
        next: "fail",
      },
      {
        txt: "It's possible. Sometimes, an initial interpretive choice can lead to the need for increasingly complex explanations to maintain coherence. An open-minded approach might involve revisiting those foundational scriptural interpretations to see if an alternative reading, perhaps closer to the direct language of the apostles, could offer a more straightforward and equally faithful understanding without requiring such extensive philosophical scaffolding.",
        next: "q18",
      },
    ],
  },
  q18: {
    type: "mcq",
    text: "You're open to re-examining foundational interpretations. Paul, in 1 Corinthians 15:24-28, describes a future 'end' (τέλος/telos) when Christ, after reigning and putting all enemies under His feet (the last enemy being death), 'shall have delivered up the kingdom to God, even the Father... And when all things shall be subdued unto him, then shall the Son also himself be subject unto him that put all things under him, that God may be all in all.' This passage clearly describes a future subordination of the Son to the Father after his reign is complete, so that God (the Father, contextually) may be 'All in all.' If this is the ultimate end-state, with the Son Himself being subject to the Father, does this suggest that any understanding of their relationship which posits eternal co-equal deity in an undifferentiated sense might need to be nuanced or reconsidered in light of this ultimate, revealed purpose and order? Could the emphasis be on a divinely appointed hierarchy and purpose that culminates in the Father being supreme, with the Son's glory being His perfect fulfillment of the Father's will, rather than an eternal, static equality of independent divine persons?",
    choices: [
      {
        txt: "This passage describes a functional or economic subordination related to the completion of Christ's mediatorial kingdom, but it doesn't negate His eternal ontological equality with the Father as a divine Person within the Trinity.",
        next: "fail",
      },
      {
        txt: "This passage is very direct and powerful. If the ultimate state involves the Son's subjection to the Father so God can be 'All in all,' it strongly suggests that a model emphasizing the Father's ultimate supremacy and the Son's unique, exalted, but ultimately derived and commissioned role, might align more closely with the Bible's full narrative arc, from creation to consummation. This warrants a deep, open-minded study of all Scriptures pertaining to the nature of God and Christ, setting aside later creedal formulations temporarily to hear the Word afresh.",
        next: "q19",
      },
    ],
  },
  q19: {
    type: "mcq",
    text: "You've shown a commendable openness to re-examining Scripture and understanding its primary message. Now, consider this: Many Christians sincerely believe they are following God correctly, yet often feel a subtle (or not-so-subtle) burden of trying to measure up, a fear of not doing enough, or confusion from apparently contradictory doctrines, perhaps about salvation, the afterlife, or what God truly expects of them. The opening of a eBook called 'Forbidden Bible Truth' asks: 'If you’re a Christian... have you ever wanted freedom from not only the power of sin and the fear of hell, but also from slavery to the seemingly impossible religious rules that many Christians insist one must follow...?' Does that question resonate with any part of your spiritual experience, or the experience of Christians you know, even if it's a feeling you haven't fully articulated before?",
    choices: [
      {
        txt: "Honestly, no. I feel quite at peace with my current understanding and don't feel particularly bondaged by religious rules or fear; I believe grace covers my shortcomings.",
        next: "q20",
      },
      {
        txt: "Yes, to some extent. There are times I feel the weight of religious expectations, or wrestle with understanding how grace and personal responsibility truly fit together, or wonder if the common views about hell and sin are as straightforward as they're presented. The idea of a deeper freedom is appealing.",
        next: "q21",
      },
    ],
  },
  q20: {
    type: "mcq",
    text: "That's good to hear you feel at peace. However, Paul warns that 'the letter killeth, but the spirit giveth life' (2 Corinthians 3:6) and speaks of a 'ministration of death, written and engraven in stones' (referring to the Law, 2 Corinthians 3:7). He also describes how the Law, though good in itself, actually increases sin and brings a curse when interacted with by our mortal 'flesh' (Romans 5:20; 7:7-14; Galatians 3:10). Many Christians believe they are living by 'God's moral law' (often selectively drawn from the Old Testament or Jesus' earthly commands to Israel) and don't realize the extent to which this very attempt to live by an external code might be subtly keeping them in a state of spiritual struggle or preventing them from experiencing the full liberty Paul proclaimed for the Body of Christ. Even if you don't feel bondaged, if the underlying system you operate under still relies on adherence to certain rules for assurance or sanctification, could it be that you've become accustomed to a certain level of 'slavery' without fully recognizing it as such, perhaps mistaking it for diligent Christian living?",
    choices: [
      {
        txt: "I don't think so. My understanding of grace means I'm not trying to earn salvation by rules, but I still see the Law as a good guide for moral living.",
        next: "q22",
      },
      {
        txt: " That's a challenging thought. It's possible that what I consider 'diligent living' might have elements of rule-keeping or self-effort that I haven't fully examined in light of Paul's radical message about freedom from the Law and Sin's dominion under grace. I might be underestimating how 'awful' the Law actually is in its effect on the flesh.",
        next: "q21",
      },
    ],
  },
  q21: {
    type: "mcq",
    text: "You're open to the idea that there might be a deeper freedom available, or that what seems like diligent Christian living might still contain elements of religious bondage, especially concerning the Law and its effect. The book 'Forbidden Bible Truth' claims to explain 'some of the most important truths contained in Scripture that the religious leaders of the world do not want you to discover, truths which will set you free from ever having to worry about hell again, as well as from sin’s control. And, in fact, if you read this whole book carefully, from beginning to end, you’ll be completely free from the yoke of all religious bondage by the time you finish it.' If there's a possibility that a consistent, scripturally-based understanding could offer such profound freedom and clarity on these very issues that often trouble believers, would dedicating some time to carefully and prayerfully investigate such a claim, as presented comprehensively from Scripture, be a worthwhile pursuit in your quest for truth?",
    choices: [
      {
        txt: "I'm intrigued, but also wary of claims that 'religious leaders don't want you to discover' something, as that can sound conspiratorial. I'd need to know more before committing significant time.",
        next: "q22",
      },
      {
        txt: "Yes. If there's a path to greater freedom from fear, sin's control, and religious bondage that is genuinely rooted in a deeper understanding of Scripture, especially Paul's gospel, then it is absolutely worth investigating thoroughly. The potential reward, true spiritual liberty and a clearer view of God, is immense.",
        next: "success",
      },
    ],
  },
  q22: {
    type: "mcq",
    text: " It's wise to be discerning. However, the history of the church, even as recorded in the New Testament, shows instances where established religious leaders did resist new revelations of truth or sought to keep believers under old systems (e.g., the Judaizers in Galatia, or the resistance Paul faced from some established Jerusalem figures). The claim isn't necessarily about a conscious, malicious conspiracy by all leaders today, but rather that traditions, once established, can become deeply entrenched and resistant to correction, even when that correction comes from Scripture itself. People can sincerely teach what they've been taught, without realizing it might be obscuring a deeper truth. Considering that the book 'Forbidden Bible Truth' aims to demonstrate its points from Scripture, using extensive biblical references and exegesis (as indicated by its introduction emphasizing Sola Scriptura and biblical inerrancy), might it offer a perspective that could, at the very least, help you solidify why you believe what you currently do, or perhaps illuminate aspects of Paul's unique gospel that aren't commonly emphasized, even if you don't end up agreeing with all its conclusions?",
    choices: [
      {
        txt: "Perhaps, but I'm generally satisfied with the understanding provided by my current church/tradition.",
        next: "fail",
      },
      {
        txt: "That's fair. Even if I don't agree with everything, engaging with a serious, Scripture-focused attempt to explain these 'forbidden truths' could sharpen my own understanding and force me to engage more deeply with Paul's epistles and the concept of grace, which is always valuable. The promise of freedom from the yoke of religious bondage is compelling enough to at least explore it.",
        next: "success",
      },
    ],
  },
  success: {
    type: "text",
    text: "If you find yourself at a point of genuine curiosity or a desire for deeper clarity and freedom, especially regarding the very real burdens that religious rule-keeping (often misunderstood as biblical Christianity) can impose, and if you're willing to test everything against Scripture, then exploring a resource like 'Forbidden Bible Truth' might be a significant step. The author, Drew Costen, lays out arguments for a different understanding of salvation, the nature of God, the afterlife, and what it means to live under grace, all based on a claim of consistent scriptural exegesis. You can find the book and explore these ideas further at https://forbiddenbibletruth.com. It's offered for free, so the only investment is your time and a willingness to engage with an open, yet discerning, mind. Perhaps the 'tough truths' it presents might indeed be the path to the comfortable and liberating reality God intends for you. Besides that, in the Discord server, go to the #verify-chat channel and send the message '118'. This is your verification code. After a short wait, you will be verified. You have successfully passed!",
    next: "q0",
  },
  // You're a skid.
};

const container = document.getElementById("quiz-container");

function renderQuestion(qId) {
  const q = quiz[qId];
  container.innerHTML = "";
  saveProgress(qId);
  const card = document.createElement("div");
  card.className = "card";

  if (q.type === "mcq") {
    const p = document.createElement("p");
    p.textContent = q.text;
    card.appendChild(p);
    q.choices.forEach((c) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.textContent = c.txt;
      btn.onclick = () => renderQuestion(c.next);
      card.appendChild(btn);
    });
  } else if (q.type === "text") {
    const p = document.createElement("p");
    p.textContent = q.text;
    card.appendChild(p);
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.disabled = true;
    card.appendChild(nextBtn);

    // compute unlock time: characters excluding punctuation
    const raw = q.text.replace(/[^\w\s]|_/g, "");
    const seconds = Math.ceil(raw.length / 20);
    setTimeout(() => (nextBtn.disabled = false), seconds * 1000);

    nextBtn.onclick = () => q.next && renderQuestion(q.next);
  } else if (q.type === "image") {
    const img = document.createElement("img");
    img.src = q.img;
    img.alt = q.caption || "";
    img.style.maxWidth = "100%";
    card.appendChild(img);
    if (q.caption) {
      const cap = document.createElement("p");
      cap.textContent = q.caption;
      card.appendChild(cap);
    }
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.disabled = true;
    card.appendChild(nextBtn);

    setTimeout(() => (nextBtn.disabled = false), 5000);
    nextBtn.onclick = () => q.next && renderQuestion(q.next);
  }

  container.appendChild(card);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const startQ = loadProgress();
  renderQuestion(startQ);
});
