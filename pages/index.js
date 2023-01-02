/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import Image from 'next/image';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Separator from '../src/components/Separator';
import QuoteCarousel from '../src/components/QuoteCarousel';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';

export default function Home() {
  return (
    <Layout>
      <Section spacing={5}>
        <div sx={{ position: 'relative' }}>
          <div sx={{
            textAlign: ['left', 'right', 'right'], pt: 7, pb: 6, width: ['100%', '60%', '40%'],
          }}
          >
            <Styled.h2>
              Business 
              <br />
              Development
            </Styled.h2>
            <Styled.p sx={{ letterSpacing: 3, color: 'rgba(34,34,34, .75)' }}>We are here to help you to expand your business</Styled.p>
          </div>
          <div
            sx={{
              position: 'absolute',
              top: 0,
              right: -50,
              width: '60%',
              display: ['none', 'none', 'block'],
            }}
          >
            <Image
              alt="business"
              src="/hero-blob.png"
              height={400}
              width={500}
              quality={60}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </Section>

      <Section bgColor="muted">

        <div sx={{
          pt: [0, 2, 5],
          pb: 5,
          maxWidth: 800,
          textAlign: ['center'],
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        >

          <Styled.h2>
            Quote for Business owner
          </Styled.h2>
          <Separator
            styles={{
              mt: 4,
              mb: 4,
              ml: 'auto',
              mr: 'auto',
            }}
          />

          <QuoteCarousel />

        </div>
      </Section>
      <Section spacing={5}>
        <div
          sx={{
            display: ['none', 'none', 'block'],
            position: 'absolute',
            top: 50,
            left: -3,
            width: '52%',
          }}
        >
          <Image
            alt="business-2"
            src="/business-2.jpg"
            height={600}
            width={600}
            quality={100}
          />
        </div>
        <div sx={{ pl: ['0', '0', '55%'], mb: 3 }}>
          <div sx={{
            pt: 2,
            pb: 4,
            display: ['block', 'none'],
            '> div': {
              borderRadius: 0,
            },
          }}
          >
            <Image
              alt="business-2"
              src="/business-2.jpg"
              layout="responsive"
              height={700}
              width={400}
              objectFit="cover"
              objectPosition="center center"
              quality={100}
            />
          </div>
          <div sx={{ maxWidth: [420, 550] }}>
            <Styled.h2 sx={{ mb: 4 }}>
              Take our services to bring your business to 
              {' '}
              <br sx={{ display: ['none', 'block'] }} />
              the next Level
            </Styled.h2>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Red Ocean</Styled.p>
            <Styled.p sx={{ mb: 3 }}>competing in industries that are currently in existence. This often requires overcoming an intense level of competition and can often involve the commoditization of the industry where companies are competing mainly on price</Styled.p>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Blue Ocean</Styled.p>
            <Styled.p sx={{ mb: 3 }}>A blue ocean strategy is based on creating demand that is not currently in existence, rather than fighting over it with other companies. You must keep in mind that there is a deeper potential of the marketplace that hasn’t been explored yet.</Styled.p>
            <Link to="/options">
              <Button outline>Check our services</Button>
            </Link>
          </div>
        </div>
      </Section>
      <Section spacing={5}>
        <div
          sx={{
            display: ['none', 'none', 'block'],
            position: 'absolute',
            top: 50,
            left: -3,
            width: '52%',
          }}
        >
          <Image
            alt="group"
            src="/group.jpg"
            height={400}
            width={600}
            quality={100}
          />
        </div>
        <div sx={{ pl: ['0', '0', '55%'], mb: 3 }}>
          <div sx={{
            pt: 2,
            pb: 4,
            display: ['block', 'none'],
            '> div': {
              borderRadius: 0,
            },
          }}
          >
            <Image
              alt="business-3"
              src="/group.jpg"
              layout="responsive"
              height={700}
              width={400}
              objectFit="cover"
              objectPosition="center center"
              quality={100}
            />
          </div>
          <div sx={{ maxWidth: [420, 550] }}>
            <Styled.h2 sx={{ mb: 4 }}>
              Why Choose us?
            </Styled.h2>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Experienced Team</Styled.p>
            <Styled.p sx={{ mb: 3 }}>We have experienced team in handling our client project. Each expertise in the team have more than 10 years experiences.</Styled.p>
            <Styled.p sx={{ fontFamily: 'heading', fontWeight: 700, mb: 2 }}>Trustworthy Partner</Styled.p>
            <Styled.p sx={{ mb: 3 }}>We have a good reputation within the sector.Our client have positive feedback from our partnership. We keep customer confidentiality to the highest.</Styled.p>
          </div>
        </div>
      </Section>
      <Section bgColor="muted">
        <div sx={{
          textAlign: 'center',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        >
          <Styled.h2>Get In Touch</Styled.h2>
          <Styled.p sx={{ mb: 4 }}>We would love to hear from you. Give us a call and we can schedule a time for us to check out your property and give you a free bid.</Styled.p>
          <Link to="tel:8014449944" styles={{ display: 'inline-block' }}>
            <Button>
              <PhoneIcon sx={{ mr: 2 }} />
              +60 123456789
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
