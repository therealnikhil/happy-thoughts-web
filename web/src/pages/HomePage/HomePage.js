import { Fragment } from 'react'

import ProductLayout from 'src/layouts/ProductLayout/ProductLayout'
import Section from 'src/components/Section/Section'
import SectionDivider from 'src/components/SectionDivider/SectionDivider'
import logo from 'src/assets/logo.png'
import thought from 'src/assets/thought.png'
import habit from 'src/assets/habit.png'
import insight from 'src/assets/insight.png'
import post from 'src/assets/post.png'
import fb from 'src/assets/fb.png'
import twitter from 'src/assets/twitter.png'
import snapchat from 'src/assets/snapchat.png'
import linkedin from 'src/assets/linkedin.png'
import CheckList from 'src/components/CheckList/CheckList'
import CountDown from 'src/components/CountDown/CountDown'

const sections = [
  {
    name: 'Journal',
    image: thought,
    list: [
      'Log your thoughts and reminisce over the happy ones.',
      'Rate your basic emotions - happiness, sadness, stress, fear and anger',
      'Prioritize and address problems, fears and concerns',
      'Track any symptoms day-to-day, recognize triggers to better control them',
      'Identify negative thoughts and behaviors',
    ],
  },
  {
    name: 'Habits',
    image: habit,
    list: [
      'Start healthy habits from us scientifically proven to improve mental health.',
      'View habits created by our users that have helped many others',
      'Create your own habits and see if they help improve your mood',
      'Find habits tailored to help with the specific emotions that you wish to seek improvement',
      'Adjust your level of commitment - you could choose to follow a habit daily, weekly, monthly, specific or alternate days of the week',
      'Check in to the app as needed to keep track of your progress',
    ],
  },
  {
    name: 'Insights',
    image: insight,
    list: [
      'View your moods by time of day, day of week, months of year',
      'Use the mood timeline to recognize patterns in your mood, when your moods peak or get low',
      'A calendar view of your habits',
      'See your longest streaks for motivation',
      'Compare your moods before and after starting habits',
    ],
  },
  {
    name: 'Resources',
    image: post,
    list: [
      'Receive additional mental health resources from us and the community',
      'Favorite the ones you want to keep and view your favorites during tough times',
      'Share things you find helpful, so others may benefit too!',
    ],
  },
  {
    name: 'Putting It All Together - Dashboard',
    image: null,
    list: [
      'Quote of the day to keep you motivated',
      'See how many more journal logs needed to reach your daily goal',
      'See how many checkins left to complete your habits for the day',
      'Gather interesting insights that quantify real improvement',
      'View the top voted resources of the day',
    ],
  },
]

const social = [
  {
    name: 'Facebook',
    logo: fb,
    link: '#',
  },
  {
    name: 'Twitter',
    logo: twitter,
    link: '#',
  },
  {
    name: 'LinkedIn',
    logo: linkedin,
    link: '#',
  },
  {
    name: 'SnapChat',
    logo: snapchat,
    link: '#',
  },
]

const donationsGoToList = [
  'Maintaining costs of keeping the app and server up and running',
  'Developing new features - such as LifePlans™, goal oriented tracks with levels to beat to improve various aspects of mental health, like concentration, anxiety etc.',
  <span key={2}>
    Helping the{' '}
    <a
      href="https://www.afsp.org"
      className="external-link"
      target="_blank"
      rel="noreferrer"
    >
      American Foundation for Suicide Prevention
    </a>
  </span>,
]

const HomePage = () => {
  return (
    <ProductLayout>
      <Section dark={true} name="main">
        <div className="logo-wrapper">
          <img src={logo} className="logo" />
        </div>
        <h1>
          Happy <span className="yellow-text">Thoughts</span>
          <span style={{ fontFamily: 'American Typewriter' }}>™</span>
        </h1>
        <p className="center" style={{ fontSize: '1.5em' }}>
          {`Let's get `}
          <span className="green-text">{`#better`}</span>
          <span className="yellow-text">{`together`}</span>
        </p>
        <p className="center">
          {`With everything that's going on in our lives and around us, let's take a moment to address our mental health. ` +
            `Suicide has made it to the top 10 leading causes of death according to data gathered by the CDC, affecting too many ` +
            `families each year. Research from `}
          <a
            href="https://www.afsp.orghttps://www.hopkinsmedicine.org/health/wellness-and-prevention/mental-health-disorder-statistics#:~:text=An%20estimated%2026%25%20of%20Americans,substance%20abuse%20and%20anxiety%20disorders."
            className="external-link"
            target="_blank"
            rel="noreferrer"
          >
            Johns Hopkins Medicine
          </a>
          {` reveals that 26% of adults in the US suffers from a diagnosable mental disorder in a given year. `}
          {`This battle is difficult for each of us to fight by ourselves, but we can get `}
          <span className="green-text">{`#better`}</span>
          <span className="yellow-text">{`together`}</span>
          {`.`}
        </p>
        <p className="center">
          <span>{`HappyThoughts`}</span>
          {` is a non-profit effort to combine the strength of our community and knowledge from psychology to provide motivation,` +
            ` techniques and resources for us to become the best version of ourselves.`}
        </p>
        <p className="center">
          {`Now, more than ever, circumstances call for us to come together, help each other and ourselves. 2020 hit us ` +
            `hard, but on `}
          <span className="green-text">{`New Years' Day 2021`}</span>
          {` we take charge of our lives by getting `}
          <span className="green-text">{`#better`}</span>
          <span className="yellow-text">{`together`}</span>
          {`.`}
        </p>
        <CountDown />
      </Section>
      <Section dark={true} name="main">
        <h1>
          {`The `}
          <span className="green-text">{`#better`}</span>
          <span className="yellow-text">{`together`}</span>
          {` process`}
        </h1>
        <p className="center">
          {`With guidance from leading experts in the field of psychology, `}
          <span className="green-text">{`Happy`}</span>
          <span className="yellow-text">{`Thoughts`}</span>
          {` tackles mental health in 4 main steps:`}
        </p>
      </Section>
      {sections.map((section, index) => (
        <Fragment key={index}>
          <SectionDivider />
          <Section key={index} dark={true} name="step">
            <h2>{section.name}</h2>
            <div className="half">
              {index % 2 === 0 && (
                <div>
                  <CheckList list={section.list} />
                </div>
              )}
              <div className="step-img-wrapper">
                <img src={section.image} className="section-img" />
              </div>
              {index % 2 !== 0 && (
                <div>
                  <CheckList list={section.list} />
                </div>
              )}
            </div>
          </Section>
        </Fragment>
      ))}
      <SectionDivider />
      <Section dark={true} name="support">
        <h2>Support the Cause</h2>
        <p className="center" style={{ marginTop: '5em' }}>
          <span className="green-text">{`Happy`}</span>
          <span className="yellow-text">{`Thoughts`}</span>
          {` is part of `}
          <a
            href="https://www.afsp.orghttps://www.hopkinsmedicine.org/health/wellness-and-prevention/mental-health-disorder-statistics#:~:text=An%20estimated%2026%25%20of%20Americans,substance%20abuse%20and%20anxiety%20disorders."
            className="external-link"
            target="_blank"
            rel="noreferrer"
          >
            Project 2025
          </a>
          {`, working with the American Foundation for Suicide Prevention to reduce our alarming suicide rate by 2025 by 20 percent.`}
        </p>
        <p className="center" style={{ marginTop: '2em' }}>
          Follow us to receive helpful resources and stay tuned for our upcoming
          release
        </p>
        <div className="social-wrapper">
          {social.map((s, i) => (
            <a key={i} href={s.link}>
              <img className="social" src={s.logo} alt={s.name} />
            </a>
          ))}
        </div>
        <div className="social-wrapper">
          <span className="donate-button">Donate</span>
        </div>
        <h2 className="yellow-text" style={{ marginTop: '2em' }}>
          What are my donations used for?
        </h2>
        <CheckList list={donationsGoToList} />
      </Section>
    </ProductLayout>
  )
}

export default HomePage
