import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  leadName?: string
  leadEmail?: string
  source?: string
}

const LeadNotificationEmail = ({ leadName, leadEmail, source }: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Neuer Lead: {leadName || 'Unbekannt'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Neuer Lead</Heading>
        <Text style={text}><strong>Name:</strong> {leadName || '–'}</Text>
        <Text style={text}><strong>E-Mail:</strong> {leadEmail || '–'}</Text>
        <Text style={text}><strong>Quelle:</strong> {source || 'NetzwerkFrauenTag Merzig 2026'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: LeadNotificationEmail,
  subject: (data: Record<string, any>) => `Neuer Lead: ${data.leadName || 'Unbekannt'} (NetzwerkFrauen)`,
  to: 'alex@altovate.de',
  displayName: 'Lead-Benachrichtigung',
  previewData: { leadName: 'Lisa Müller', leadEmail: 'lisa@example.com', source: 'NetzwerkFrauenTag Merzig 2026' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { maxWidth: '600px', margin: '0 auto', padding: '40px 24px' }
const h1 = { fontSize: '22px', fontWeight: '700' as const, color: '#0B1120', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#333', lineHeight: '1.6', margin: '0 0 10px' }
