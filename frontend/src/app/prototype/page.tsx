// 나중에 관리자만 접근 가능하도록 변경 예정

// Typography
import { TypographyBlockquote } from '@/components/typography/TypographyBlockquote'
import { TypographyInlineCode } from '@/components/typography/TypographyInlineCode'
import { TypographyH1 } from '@/components/typography/TypographyH1'
import { TypographyH2 } from '@/components/typography/TypographyH2'
import { TypographyH3 } from '@/components/typography/TypographyH3'
import { TypographyH4 } from '@/components/typography/TypographyH4'
import { TypographyP1 } from '@/components/typography/TypographyP1'
import { TypographyTable } from '@/components/typography/TypographyTable'
import { TypographyLead } from '@/components/typography/TypographyLead'
import { TypographyLarge } from '@/components/typography/TypographyLarge'
import { TypographySmall } from '@/components/typography/TypographySmall'


export default function page() {
  return (
    <main role='main' className='p-6'>
      <TypographyH1>
        Taxing Laughter: The Joke Tax Chronicles
      </TypographyH1>
      <TypographyH2>
        The People of the Kingdom
      </TypographyH2>
      <TypographyH3>
        The Joke Tax
      </TypographyH3>
      <TypographyH4>
        People stopped telling jokes
      </TypographyH4>
      <TypographyP1>
        The king, seeing how much happier his subjects were, <br />realized the error of
        his ways and repealed the joke tax.
      </TypographyP1>
      <TypographyBlockquote
        title={`"After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."`}
      />
      <TypographyTable />
      <TypographyInlineCode>
        @radix-ui/react-alert-dialog
      </TypographyInlineCode>
      <TypographyLead>
        A modal dialog that interrupts the user with important content and expects
        a response.
      </TypographyLead>
      <TypographyLarge>
        Are you absolutely sure?
      </TypographyLarge>
      <TypographySmall>
        Email address
      </TypographySmall>
    </main>
  )
}
