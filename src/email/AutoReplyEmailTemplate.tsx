import { DOMAIN } from "@/lib/links";
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

interface AutoReplyEmailTemplateProps {
  username: string;
}

export default function AutoReplyEmailTemplate({
  username,
}: AutoReplyEmailTemplateProps) {
  return (
    <Html className="mt-44">
      <Head />
      <Preview>You have a new message from K Sriharsha</Preview>
      <Tailwind>
        <Body className="border border-black">
          <Container>
            <Section className="text-gray-900 px-3">
              <Img
                src={"https://avatars.githubusercontent.com/u/102823857?v=4"}
                alt="Sriharsha's Image"
                className="rounded-full h-28 w-28 object-cover m-auto"
              />
              <Text className="font-semibold text-base">Message, &nbsp;</Text>
              <Heading className="capitalize">Hii, {username}</Heading>
              <Section>
                <Text>
                  I hope this message finds you well. I wanted to personally
                  thank you for reaching out to me through my portfolio. I'm
                  delighted to connect with you and discuss any questions or
                  opportunities you have in mind.
                </Text>
                <Text>
                  I appreciate your interest, and I'm here to assist you in any
                  way I can. Feel free to share more details about your inquiry,
                  and I'll do my best to provide the information or assistance
                  you need.
                </Text>
                <Text>
                  Please don't hesitate to ask any questions or provide further
                  context regarding your message. I'm here to make this
                  interaction as helpful and informative as possible.
                </Text>
                <Text>
                  Looking forward to hearing more from you and possibly
                  collaborating in the future.
                </Text>
              </Section>
              <Hr />
              <Section className="text-base font-medium">
                <Text className="font-semibold">Best regards,</Text>
                <Text>K Sriharsha</Text>
                <a target="_blank" href={DOMAIN} className="text-sm underline">
                  Visit Sriharsha's Portfolio
                </a>
              </Section>
              <Hr />
              <Text className="text-xs text-gray-700 mt-3">
                Please note that this initial response is automatically
                generated. I'll be reviewing your message shortly and will be in
                touch personally to provide a more detailed and tailored
                response. Your inquiry is important to me, and I look forward to
                addressing it directly.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
