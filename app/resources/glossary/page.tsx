"use client"

import { useState, useMemo } from "react"
import { Search, BookOpen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/animations/scroll-reveal"

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const glossaryTerms = {
    A: [
      {
        term: "Abstain from Voting / Abstention",
        definition:
          "When a country abstains from voting in a substantive vote, it means that the vote is effectively not counted. The country withdraws from having to take a position in favour or against the matter up for voting. It is typically not possible to abstain during procedural votes.",
      },
      {
        term: "Agenda",
        definition:
          'The topic which is to be discussed in committee. It is typically set through a "Motion to set the agenda".',
      },
      {
        term: "Amendment",
        definition:
          "A change to an already introduced draft resolution. It may remove, add or change existing operative clauses.",
      },
      {
        term: "Awards",
        definition:
          "At most conferences, the best delegates of a committee are recognized for their performance. Typically the chairs pick the best delegate of their committee and a few runner-ups.",
      },
    ],
    B: [
      {
        term: "Bloc",
        definition:
          "A group of countries that share similar interests or positions. These countries often work together during the conference to create and pass resolutions.",
      },
    ],
    C: [
      {
        term: "Caucus",
        definition:
          "A meeting of delegates representing specific countries, often held to discuss specific issues or strategies. There are two types: moderated (structured with a speaker's list) and unmoderated (informal, free debate).",
      },
      {
        term: "Chair",
        definition:
          "Not a piece of furniture. Impartial moderator of the debate and mentor to delegates. Typically a committee has multiple chairs to handle all required tasks.",
      },
      {
        term: "Committee",
        definition:
          "A specialized body within the United Nations system that focuses on specific issues. Examples include the Security Council, General Assembly, and specialized agencies like WHO or UNESCO.",
      },
      {
        term: "Consensus",
        definition:
          "A decision-making process where all parties agree to support a decision, even if it's not their first preference. In MUN, this often refers to passing resolutions without a formal vote.",
      },
    ],
    D: [
      {
        term: "Delegate",
        definition:
          "A participant in a Model UN conference who represents a specific country or organization in a committee.",
      },
      {
        term: "Delegation",
        definition: "A group of delegates from the same school or organization attending a MUN conference together.",
      },
      {
        term: "Draft Resolution",
        definition:
          "A document that proposes solutions to the issues being discussed in committee. It becomes a resolution if passed by the committee.",
      },
      {
        term: "Dais",
        definition: "The front area of the committee room where the chairs sit and from which they moderate debate.",
      },
    ],
    E: [
      {
        term: "Emergency Session",
        definition: "A special committee session called to address urgent matters that require immediate attention.",
      },
      {
        term: "Endorsement",
        definition: "Support for a draft resolution or amendment. Delegates may endorse documents they agree with.",
      },
    ],
    F: [
      {
        term: "Formal Debate",
        definition:
          "Structured debate following parliamentary procedure, typically involving a speaker's list and formal speeches.",
      },
      {
        term: "Friendly Amendment",
        definition:
          "A proposed change to a draft resolution that is accepted by all sponsors of the original document.",
      },
    ],
    G: [
      {
        term: "General Assembly",
        definition:
          "The main deliberative body of the United Nations, where all member states are represented equally.",
      },
      {
        term: "Gavel",
        definition: "A small hammer used by the chair to maintain order and signal the beginning or end of sessions.",
      },
    ],
    H: [
      {
        term: "Head Delegate",
        definition:
          "The leader of a delegation, typically responsible for coordinating their team's participation in the conference.",
      },
      {
        term: "Hostile Amendment",
        definition:
          "A proposed change to a draft resolution that is not accepted by the sponsors of the original document.",
      },
    ],
    I: [
      {
        term: "Informal Debate",
        definition: "Unstructured discussion time where delegates can move around the room and discuss issues freely.",
      },
      {
        term: "In Favor",
        definition: "A vote supporting a motion, amendment, or resolution.",
      },
    ],
    J: [
      {
        term: "Joint Resolution",
        definition:
          "A resolution that addresses multiple related issues or is sponsored by delegates from multiple committees.",
      },
    ],
    K: [
      {
        term: "Keynote Speaker",
        definition:
          "A distinguished guest who delivers a major speech at the opening or closing ceremony of a MUN conference.",
      },
    ],
    L: [
      {
        term: "Lobbying",
        definition:
          "The process of building support for a draft resolution or position by talking with other delegates.",
      },
    ],
    M: [
      {
        term: "Moderated Caucus",
        definition:
          "A structured discussion where the chair calls on delegates to speak for a specified amount of time on a specific topic.",
      },
      {
        term: "Motion",
        definition:
          "A formal proposal made by a delegate to take a specific action, such as opening debate or moving to a vote.",
      },
    ],
    N: [
      {
        term: "Note Passing",
        definition:
          "Written communication between delegates during formal sessions, typically facilitated by conference staff.",
      },
      {
        term: "NGO",
        definition:
          "Non-Governmental Organization. Some MUN conferences include NGO representatives alongside country delegates.",
      },
    ],
    O: [
      {
        term: "Operative Clause",
        definition:
          "The action-oriented part of a resolution that outlines specific steps to address the issue at hand.",
      },
      {
        term: "Observer",
        definition: "A participant who can attend sessions but cannot vote or formally participate in debate.",
      },
    ],
    P: [
      {
        term: "Parliamentary Procedure",
        definition: "The formal rules and processes that govern how debate is conducted in MUN committees.",
      },
      {
        term: "Position Paper",
        definition:
          "A document written before the conference outlining a country's position on the topics to be discussed.",
      },
      {
        term: "Preambulatory Clause",
        definition:
          "The introductory part of a resolution that provides background information and context for the issue.",
      },
      {
        term: "Point of Order",
        definition: "A motion used to address a violation of parliamentary procedure or rules of debate.",
      },
      {
        term: "Point of Information",
        definition: "A question directed to the current speaker during formal debate.",
      },
    ],
    Q: [
      {
        term: "Quorum",
        definition:
          "The minimum number of delegates required to be present for a committee to conduct official business.",
      },
      {
        term: "Question of Privilege",
        definition:
          "A motion used to address issues affecting a delegate's ability to participate effectively in committee.",
      },
    ],
    R: [
      {
        term: "Resolution",
        definition:
          "A document that has been passed by a committee, outlining solutions to the issues being discussed.",
      },
      {
        term: "Right of Reply",
        definition:
          "An opportunity for a delegate to respond when their country has been directly criticized or misrepresented.",
      },
      {
        term: "Roll Call",
        definition: "The process of taking attendance at the beginning of each committee session.",
      },
    ],
    S: [
      {
        term: "Secretariat",
        definition:
          "The organizing body of a MUN conference, typically composed of experienced delegates and advisors.",
      },
      {
        term: "Security Council",
        definition:
          "A UN body responsible for maintaining international peace and security, with five permanent and ten non-permanent members.",
      },
      {
        term: "Speaker's List",
        definition: "An ordered list of delegates who wish to address the committee during formal debate.",
      },
      {
        term: "Sponsor",
        definition: "A delegate who helps write and supports a draft resolution.",
      },
      {
        term: "Substantive Vote",
        definition: "A vote on the actual content of a resolution or amendment, requiring a specific majority to pass.",
      },
    ],
    T: [
      {
        term: "Table",
        definition: "To postpone discussion of a topic or document until later in the session.",
      },
      {
        term: "Two-thirds Majority",
        definition: "The voting threshold required for certain motions and substantive votes in many MUN committees.",
      },
    ],
    U: [
      {
        term: "Unfriendly Amendment",
        definition: "Another term for a hostile amendment - a proposed change not accepted by the original sponsors.",
      },
      {
        term: "Unmoderated Caucus",
        definition:
          "An informal discussion period where delegates can move freely around the room to negotiate and build consensus.",
      },
    ],
    V: [
      {
        term: "Veto",
        definition:
          "The power of the five permanent members of the Security Council to block any substantive resolution.",
      },
      {
        term: "Voting Procedure",
        definition: "The formal process by which committees make decisions on motions, amendments, and resolutions.",
      },
    ],
    W: [
      {
        term: "Working Paper",
        definition: "An informal document used during negotiations that may eventually become a draft resolution.",
      },
      {
        term: "Western European and Others Group (WEOG)",
        definition:
          "One of the regional groups in the United Nations, including Western European countries and some others like Australia and Canada.",
      },
    ],
    Y: [
      {
        term: "Yield",
        definition:
          "To give up remaining speaking time, either to another delegate, to questions, or back to the chair.",
      },
    ],
  }

  const filteredTerms = useMemo(() => {
    if (!searchTerm) return glossaryTerms

    const filtered: typeof glossaryTerms = {}
    Object.entries(glossaryTerms).forEach(([letter, terms]) => {
      const matchingTerms = terms.filter(
        (item) =>
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      if (matchingTerms.length > 0) {
        filtered[letter] = matchingTerms
      }
    })
    return filtered
  }, [searchTerm, glossaryTerms])

  return (
    <main className="flex-1 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-2xl mb-6"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <BookOpen className="h-10 w-10 text-orange-500" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Model UN Cheat Sheet</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                You're new to MUN or just quickly need to look up one of the many specialized terms? This is your place.
              </p>
            </div>
          </ScrollReveal>

          {/* Search Section */}
          <ScrollReveal delay={0.2}>
            <div className="relative mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Which word are you looking for?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Glossary Content */}
          <div className="space-y-12">
            {Object.entries(filteredTerms).map(([letter, terms], letterIndex) => (
              <ScrollReveal key={letter} delay={letterIndex * 0.1}>
                <div>
                  <motion.h2
                    className="text-4xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: letterIndex * 0.1 }}
                  >
                    {letter}
                  </motion.h2>
                  <div className="space-y-6">
                    {terms.map((item, termIndex) => (
                      <motion.div
                        key={item.term}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: letterIndex * 0.1 + termIndex * 0.05 }}
                      >
                        <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.term}</h3>
                            <p className="text-slate-700 leading-relaxed">{item.definition}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* No Results Message */}
          {Object.keys(filteredTerms).length === 0 && searchTerm && (
            <ScrollReveal>
              <div className="text-center py-12">
                <div className="text-slate-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No terms found</h3>
                <p className="text-slate-500">Try searching for a different term or browse the full glossary above.</p>
              </div>
            </ScrollReveal>
          )}

          {/* Credits Section */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-sm text-slate-500">
                Glossary content adapted from{" "}
                <a
                  href="https://mymun.com/glossary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 underline"
                >
                  mymun.com
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* Footer CTA */}
          <ScrollReveal delay={0.5}>
            <div className="mt-16 bg-slate-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                If you can't find the term you're looking for or need more detailed explanations, don't hesitate to
                reach out to our team or check our other resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-base font-medium text-white hover:bg-slate-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  More Resources
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
