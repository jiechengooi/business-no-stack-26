/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import Image from 'next/image';

import Section from '../src/components/Section';
import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import PhoneIcon from '../src/images/Phone';
import Card from '../src/components/Card';
import OptionHeading from '../src/components/OptionHeading';
import Pantone from '../src/components/Pantone';

export default function Options() {
  return (
    <Layout title="Business app" description="Business aoo">
      <Section spacing={3}>
        <div sx={{ pt: 7 }}>
          <Styled.h1 sx={{ textAlign: 'center' }}>OUR OPTIONS</Styled.h1>
          <div sx={{ maxWidth: 650, textAlign: 'center', margin: 'auto' }}>
            <Styled.p>We’ve got the selection of styles to fit your needs. If you aren’t sure what to choose we can help you make the decisions that will make your yard look great for years to come.</Styled.p>
          </div>
        </div>
      </Section>
      <Section>

        <div sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
          <OptionHeading title="Curb Styles" text="We can help you make the best choice for your situation" />
          <div
            sx={{
              display: 'grid', gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'], gridGap: 35, width: '100%',
            }}
          >
            <Card
              title="Slant"
              text="Goes great with a stamp"
              image={(
                <Image
                  alt="Landscape Curbing"
                  src="/slant.png"
                  layout="fixed"
                  height={110}
                  width={120}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={40}
                />
              )}
            />
            <Card
              title="Square"
              text="Our most popular choice"
              featured
              featureText="Most Popular"
              image={(
                <Image
                  alt="Landscape Curbing"
                  src="/square.png"
                  layout="fixed"
                  height={100}
                  width={110}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={40}
                />
              )}
            />
            <Card
              title="Mower"
              text="A classic shape"
              image={(
                <Image
                  alt="Landscape Curbing"
                  src="/mower.png"
                  layout="fixed"
                  height={110}
                  width={120}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={40}
                />
              )}
            />
          </div>
        </div>

        <div sx={{ display: 'flex', flexDirection: ['column', 'row'], mt: 5 }}>
          <OptionHeading title="Stamps" text="Stamps are a great way to add some unique texture to your yard" />
          <div
            sx={{
              display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], gridGap: 35, width: '100%',
            }}
          >
            <Card
              title="Cobblestone"
              image={(
                <Image
                  alt="Landscape Curbing"
                  src="/cobblestone.jpg"
                  layout="fixed"
                  height={200}
                  width={300}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={40}
                  sx={{ borderRadius: 0 }}
                />
              )}
            />
            <Card
              title="Random Brick"
              image={(
                <Image
                  alt="Landscape Curbing"
                  src="/brick.jpg"
                  layout="fixed"
                  height={200}
                  width={300}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={40}
                  sx={{ borderRadius: 0 }}
                />
              )}
            />
          </div>
        </div>

        <div sx={{ display: 'flex', flexDirection: ['column', 'row'], mt: 5 }}>
          <OptionHeading title="Colors" text="A dye can make your curbs pop" />
          <div
            sx={{
              display: 'grid', gridTemplateColumns: ['1fr 1fr', '1fr 1fr 1fr', 'repeat(4, 1fr)'], gridGap: [20, 30], width: '100%',
            }}
          >
            <Pantone title="Bayou" color="#847B63" />
            <Pantone title="Mesa Bluff" color="#9C844A" />
            <Pantone title="Sunset Rose" color="#9C735A" />
            <Pantone title="Cobblestone" color="#5A5A52" />
            <Pantone title="Sangria" color="#9C735A" />
            <Pantone title="Cocoa" color="#7A6953" />
            <Pantone title="Pebble" color="#9C8C73" />
            <Pantone title="Brick Red" color="#8C5239" />

          </div>
        </div>

      </Section>

      <Section bgColor="muted">
        <div sx={{
          textAlign: 'center',
          maxWidth: 620,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        >
          <Styled.h2>Installation</Styled.h2>
          <Styled.p sx={{ mb: 4 }}>Bare ground is always easier for installation, but if you have grass we can cut it out. Depending on the size of the job we can typically be finished with the job in one day. Give us a call and we will come by and give you a free bid!</Styled.p>
          <Link to="tel:8014449944" styles={{ display: 'inline-block' }}>
            <Button>
              <PhoneIcon sx={{ mr: 2 }} />
              801.444.9944
            </Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
