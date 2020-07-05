import ProductLayout from 'src/layouts/ProductLayout'

import logo from 'src/assets/logo.png'
import Section from 'src/components/Section/Section'

const AboutPage = () => {
  return (
    <ProductLayout>
      <Section dark={true} name="main">
        <div className="logo-wrapper">
          <img src={logo} className="logo" />
        </div>
        <h1>A Message from the Creator</h1>
        <p className="left">
          {`Hi! My name is Nikhil. I’ve spent a large part of the last 5 years building software for work, school or `}
          {`personal projects. My journey through college has been quite challenging, having been diagnosed with bipolar `}
          {`disorder and borderline personality disorder. What got me through when I hit rock bottom was the constant thought `}
          {`of beating the statistic that having bipolar disorder reduces your chance of graduation by 70 percent, not to `}
          {`mention borderline personality statistics. Beating the statistic so I can use my learning experience to change that `}
          {`very statistic.`}
        </p>
        <p className="left">
          {`After 3 years of on and off treatment, I finally decided to pause my academics and prioritize my mental health. `}
          {`Since May 2019 I have been exposed to medications, along with techniques like cognitive behavior therapy and `}
          {`dialectical behavior therapy. I took everything I learned and created an application that has the potential to not `}
          {`just help others struggling with mental health disorders but anyone who’d like to track their moods, and watch them `}
          {`improve as they follow lifestyle changes that Happy Thoughts helps them form.`}
        </p>
        <p className="left">
          <span className="green-text">{`Happy`}</span>
          <span className="yellow-text">{`Thoughts`}</span>
          {` posts resources daily to help you stay motivated and tips to aid in the journey towards mental well being. `}
          {`Remember, the struggle might feel overwhelming at times for each one of us to face alone, but we can get `}
          <span className="green-text">{`#better`}</span>
          <span className="yellow-text">{`together`}</span>
        </p>
        <p className="left">
          {`I truly hope that `}
          <span className="green-text">{`Happy`}</span>
          <span className="yellow-text">{`Thoughts`}</span>
          {` empowers you to become the best version of yourself, just as it does for me.`}
        </p>
        <p className="left">Stay tuned.</p>
        <p className="left">Sincerely,</p>
        <pre className="left">
          Nikhil
          <span className="yellow-text">{`\nCreator of HappyThoughts\n`}</span>
          <a
            href="mailto:nikhil@happythoughts.app"
            className="external-link"
          >{`nikhil@happythoughts.app`}</a>
        </pre>
      </Section>
    </ProductLayout>
  )
}

export default AboutPage
