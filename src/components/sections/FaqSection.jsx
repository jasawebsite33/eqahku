'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import Button from '@/components/ui/Button'
import { FAQS, BRAND } from '@/lib/constants'

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="section-padding bg-ivory-50 relative"
    >
      <div className="container-narrow">
        <SectionHeading
          label="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Temukan jawaban untuk pertanyaan umum seputar layanan aqiqah Eqahku."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={FAQS} />

          <AnimatedDiv className="text-center mt-12" delay={0.3}>
            <p className="text-body text-charcoal-500 mb-5">
              Masih ada pertanyaan lain?
            </p>
            <Button
              variant="secondary"
              href={`https://wa.me/${BRAND.whatsapp}?text=Assalamualaikum, saya ingin bertanya tentang layanan Eqahku`}
            >
              Tanya via WhatsApp
            </Button>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  )
}