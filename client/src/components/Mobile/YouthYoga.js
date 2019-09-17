import React from "react";
import { Fade } from "react-reveal";
import { SubTitle, ServicesText } from "./Styles";
import FooterMobile from "./FooterMobile";

const YouthYoga = () => {
  return (
    <div>
      <div className="yoga-container">
        <Fade>
          <SubTitle>Youth Yoga Group</SubTitle>
        </Fade>
        <ServicesText>
          <Fade>
            Eye Movement Desensitization and Reprocessing (EMDR) is one of my
            favorite trauma processing modalities. Our bodies and brains know
            best how to heal themselves, but also need some preparation work
            before getting started. I am now doing this preparation through
            group experiential work. Phase Two in EMDR is designed to help
            clients handle the emotional distress they encounter in between
            sessions while they are working with their individual therapists.
            The Phase 2 skills can not only help a person while doing the
            intensive healing process, but long after the EMDR is over. In this
            group, I combine Yoga and breathing practice, as well as teaching
            Phase Two and Mindfulness skills to support clients as they become
            ready to participate in EMDR processing. Read more below! About
            Yoga: Yoga can be seen as a practice to strengthen the body, get a
            good sweat going, or even a competition to see who has the bendiest
            downward dog? Yoga can be these things, but it is so much more. Yoga
            not only benefits the body, but has outstanding healing effects on
            the mind, the body’s nervous system, and spiritual wellbeing. I have
            had many years using movement and yoga to supplement my own healing
            journey, and because of my experience I have recently become a
            Registered Yoga Teacher with Yoga Alliance to supplement my clinical
            training in healing trauma. I figured it was time I use this
            experiential learning modality in a group format to help my clients
            EXPERIENCE peace, and calm, not just talk about it. About
            Mindfulness Skills: I have training in several mindfulness
            modalities, not just Yoga. Mindfulness Based Stress Reduction, as
            well as Dialectical Behavioral Therapy trainings have helped my
            clients experience emotional balance in their life and wellbeing.
            Put the two together: The first half of group will be practicing
            Yoga and Skills techniques, and the in the second half of group, you
            can expect to sit back on your Yoga props and get ready to learn and
            practice some serious mindfulness and emotional regulation skills
            that will help you regulate, both on and off your Yoga mat. See you
            on your mat weekly, for a two hour fantastic, downward dogging,
            mind-calming, connecting group experience. Important Facts: Cost:
            50$ per session, for 6 weeks, and must be able to commit to 6 weeks.
            You can pay weekly or upfront. I also provide a workbook/binder with
            the skill teachings in it, a 10$ one time fee. When: TBD Where: TBD
            What to Bring: You, water, an open mind, and your yoga mat if you
            have one! If you don’t, I have extra:) Try not to eat a heavy meal
            before hand (yoga+food baby don’t mix well), and feel free to bring
            a snack for the second half of session if you would like. Other: You
            don’t have to have any experience in Yoga, or in any sort of
            mindfulness training. I am trained how to help beginners as well as
            experienced Yogis. Must be seeing a therapist and prepping for EMDR
            processing to be in group.
          </Fade>
        </ServicesText>
        <Fade>
          <a href="/#services">
            <button>Go Back To Services</button>
          </a>
        </Fade>
      </div>
      <FooterMobile />
    </div>
  );
};

export default YouthYoga;
