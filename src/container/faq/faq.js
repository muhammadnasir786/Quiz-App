import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class FAQ extends Component {
    render() {
        return (
            <div>
                <Card style={{ margin: '30px' }}>
                    <CardTitle style={{}} title={'FAQ'}
                    subtitle="Frequently Asked Questions"
                    >
                    </CardTitle><hr />
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title="1. Why MAGE ?"
                        />
                        <CardText>
                            Because English has many areas of knowledge and skills not to mention strategies and exceptions. MAGE has mapped the ENTIRE range of English competencies from reading strategies, speed reading to phonemic awareness, phonetics to creative writing to make it easy for learner of any age.
                        </CardText>
                    </Card>
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title="2. How does MAGE for English work ?"
                        />
                        <CardText>
                            Students WATCH an animated video to learn the key idea in ONE area of knowledge or skill such as speed reading or characterisation with teacher guidance. Next, they PLAY a game that tests their knowledge; teachers will reteach and provide worksheets on topics that students find challenging. Finally, they PERFECT their knowledge as they advanced to higher levels - 1, 2, 3 etc; hence, WATCH, PLAY and PERFECT your English everyday. On top of this, students will still receive textbooks as their core curriculum.
                            </CardText>
                    </Card>
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title="3. What is KAHOOT ?"
                        />
                        <CardText>
                            Kahoot is the gaming part of MAGE. It's an important part but it's only 1 of 3 parts that makes up MAGE. It's the selected platform to deliver our animations and modules.
                            </CardText>
                    </Card>
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title="4. What's MAGE built with ?"
                        />
                        <CardText>
                            <ul>
                                <li>MAGE is built with 3 parts - animations, games and modules.</li> <li>Animations are videos for 200 English topics.</li><li>
                                    Kahoot Games are built to teach and test English knowledge.</li><li>
                                    Modules are updated dynamically so learners get fresh content from our expert teachers.</li>
                            </ul>
                        </CardText>
                    </Card>
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title="5. Why can't reading ALONE help to improve English ?"
                        />
                        <CardText>
                            Reading is a passive exercise. We can learn SOME grammar and vocabulary in this way but since English has a whole range of skills and strategies, we need to master these too. It's like learning most skill-based knowledge like design and architecture - we need BOTH theory (vocabulary and grammar) and practical (skills and strategies).
                        </CardText>
                    </Card>
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title="6. What's the DIFFERENCE between MAGE and other learning systems ?"
                        />
                        <CardText>
                            MAGE represents Modular Learning with Animation and Games in English. English is broken down into 200+ videos for every key idea. We then capture each key idea in animations with moving visuals and sound as most learners are visual and auditory. Finally, they are gamified to make them interesting for ALL levels of students. Children at a small age learn through play and older students prefer gaming too, as a quick test of ability.
                        Most systems are either passive (animations or learning videos) or gamified (e-learning) with English grammar and vocabulary. MAGE COMBINES these two with 40 textbooks and 200 chapters to back up the learning.
                        </CardText>
                    </Card>
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title='7. Can I use MAGE at home ?' />
                        <CardText>
                            YES! MAGE is designed to promote follow-through learning, important for a language-based subject and especially for English as it has so many areas to cover. All students who come to Languagelab centres get expert tutoring with MAGE in class and continue their experience with MAGE at home to help them learn faster, better and easier.
                        </CardText>
                    </Card>
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title='8. What"s the requirement to use MAGE to learn English ?' />
                        <CardText>
                            MAGE can be accessed with a LAPTOP for the PARENT and a MOBILE for the CHILD with a home-based wifi. Learners just need to purchase the relevant MAGE sets to start learning. Languagelab students get the relevant MAGE sets for FREE. Completing the complimentary English Proficiency and Aptitude Tests (EPAT) will help to identify which level learner can start at.
                        </CardText>
                    </Card>
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title='9. How do I know which MAGE sets to get for my child/children ?                            ' />
                        <CardText>There are only 2 steps to start.
                            <ol>
                                <li>
                                Start off with our scientific assessment EPAT (English Proficiency and Aptitude Tests) to gauge the best level.

                                </li> <li>You will then be given a DEMO MAGE set to start off : <ul><li>MAGE sets are split up in Phonemic Awareness and Phonology, Vocabulary and Grammar, Skills and Strategies.
</li></ul></li>
                <li>Purchase and enjoy!</li>
                                </ol>
                        </CardText>
                    </Card>
                    <Card style={{ margin: '30px' }}>
                        <CardHeader
                            title='10. Do I need to buy any MAGE set if my child is already enrolled ?                            ' />
                        <CardText>There are only 2 steps to start.
                        There is no need to. All Languagelab students get to use MAGE in the centre AND at home to perfect their English.
                        </CardText>
                    </Card>

                </Card>
            </div>
        )
    }
}
