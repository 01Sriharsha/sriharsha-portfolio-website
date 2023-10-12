import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Img,
  Link,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface ContactFormEmailProps {
  message: string;
  senderEmail: string;
  username: string;
}

export default function SenderEmailTemplate({
  senderEmail,
  message,
  username,
}: ContactFormEmailProps) {
  return (
    <Html className="mt-44">
      <Head />
      <Preview>
        You have a new message from {username} - Portfolio Website
      </Preview>
      <Tailwind>
        <Body className="border border-black">
          <Container>
            <Section className="text-gray-900 px-3">
              <Img
                src={"https://avatars.githubusercontent.com/u/102823857?v=4"}
                alt="Sriharsha's Image"
                className="rounded-full h-32 w-32 object-cover m-auto my-4"
              />
              <Heading className="text-2xl font-bold">
                You recieved a following message from your Portfolio contact
                form!
              </Heading>
              <Text className="font-semibold text-base">Message, &nbsp;</Text>
              <Text className="text-base">{message}</Text>
              <Hr />
              <Text className="text-base font-medium text-right">
                <span>The sender's email is: &nbsp;</span>
                <Link href={`mailto:${senderEmail}`}>{senderEmail}</Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
