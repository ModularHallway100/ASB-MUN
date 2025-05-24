"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Search, BookOpen, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // MUN Glossary Terms
  const glossaryTerms = [
    {
      letter: "A",
      terms: [
        {
          title: "Abstain from Voting / Abstention",
          definition:
            "When a country abstains from voting in a substantive vote, it means that the vote is effectively not counted. The country withdraws from having to take a position in favour or against the matter up for voting. It is typically not possible to abstain during procedural votes.",
        },
        {
          title: "Agenda",
          definition:
            'The topic which is to be discussed in committee. It is typically set through a "Motion to set the agenda".',
        },
        {
          title: "Amendment",
          definition:
            "A change to an already introduced draft resolution. It may remove, add or change existing operative clauses.",
        },
        {
          title: "Awards",
          definition:
            "At most conferences, the best delegates of a committee are recognized for their performance. Typically the chairs pick the best delegate of their committee and a few runner-ups.",
        },
      ],
    },
    {
      letter: "B",
      terms: [
        {
          title: "Bloc",
          definition:
            "A group of countries that share similar interests or positions. These countries often work together during the conference to create and pass resolutions.",
        },
        {
          title: "Background Guide",
          definition:
            "A document provided by the conference organizers that outlines the committee's topics, provides historical context, and suggests areas for research.",
        },
      ],
    },
    {
      letter: "C",
      terms: [
        {
          title: "Caucus",
          definition:
            "A meeting of delegates representing specific countries, often held to discuss specific issues or strategies. There are two types: moderated (structured with a speaker's list) and unmoderated (informal, free debate).",
        },
        {
          title: "Chair",
          definition:
            "Not a piece of furniture. Impartial moderator of the debate and mentor to delegates. Typically a committee has multiple chairs to handle all required tasks.",
        },
        {
          title: "Committee",
          definition:
            "A group of delegates representing different countries who work together to address specific global issues and draft resolutions.",
        },
      ],
    },
    {
      letter: "D",
      terms: [
        {
          title: "Delegate",
          definition:
            "A participant in a Model UN conference who represents a specific country and advocates for that country's interests and policies.",
        },
        {
          title: "Draft Resolution",
          definition:
            "A document that proposes solutions to the issues being discussed in committee. It includes preambular and operative clauses.",
        },
        {
          title: "Dais",
          definition: "The front area of the committee room where the chairs sit and from which they moderate debate.",
        },
      ],
    },
    {
      letter: "E",
      terms: [
        {
          title: "Executive Board",
          definition:
            "The group of chairs and directors who run a committee, including the chair, vice-chair, and any assistant chairs.",
        },
      ],
    },
    {
      letter: "F",
      terms: [
        {
          title: "Formal Debate",
          definition:
            "Structured debate where delegates speak from a speaker's list in a predetermined order, following formal rules of procedure.",
        },
        {
          title: "Friendly Amendment",
          definition:
            "A change to a draft resolution that is accepted by all sponsors of the resolution without requiring a vote.",
        },
      ],
    },
    {
      letter: "G",
      terms: [
        {
          title: "General Assembly",
          definition:
            "The main deliberative body of the United Nations, often simulated in Model UN conferences as a large committee.",
        },
        {
          title: "Gavel",
          definition: "A small hammer used by the chair to maintain order and signal the beginning or end of sessions.",
        },
      ],
    },
    {
      letter: "H",
      terms: [
        {
          title: "Head Delegate",
          definition:
            "The primary representative of a delegation, often responsible for coordinating with other delegates from the same school.",
        },
      ],
    },
    {
      letter: "I",
      terms: [
        {
          title: "Informal Debate",
          definition:
            "Unstructured debate where delegates can speak freely without being on a speaker's list, often during unmoderated caucuses.",
        },
      ],
    },
    {
      letter: "M",
      terms: [
        {
          title: "Motion",
          definition: "A formal proposal made by a delegate to change the course of debate or committee procedure.",
        },
        {
          title: "Moderated Caucus",
          definition:
            "A structured discussion where the chair calls on delegates to speak for a specified amount of time on a specific topic.",
        },
      ],
    },
    {
      letter: "N",
      terms: [
        {
          title: "Note Passing",
          definition:
            "The practice of sending written messages between delegates during committee sessions to coordinate strategy and build consensus.",
        },
      ],
    },
    {
      letter: "O",
      terms: [
        {
          title: "Operative Clause",
          definition:
            "The action-oriented part of a resolution that outlines specific steps to address the issue at hand.",
        },
      ],
    },
    {
      letter: "P",
      terms: [
        {
          title: "Position Paper",
          definition:
            "A document written before the conference that outlines a country's stance on the committee topics and proposed solutions.",
        },
        {
          title: "Point of Order",
          definition:
            "A request made by a delegate to address a procedural error or violation of the rules of procedure.",
        },
        {
          title: "Point of Information",
          definition:
            "A question directed to the delegate who just spoke, asking for clarification or additional information.",
        },
        {
          title: "Preambular Clause",
          definition:
            "The introductory part of a resolution that provides background information and context for the issue being addressed.",
        },
      ],
    },
    {
      letter: "Q",
      terms: [
        {
          title: "Quorum",
          definition:
            "The minimum number of delegates required to be present for the committee to conduct official business.",
        },
      ],
    },
    {
      letter: "R",
      terms: [
        {
          title: "Resolution",
          definition:
            "A formal document that addresses a specific issue and proposes solutions, consisting of preambular and operative clauses.",
        },
        {
          title: "Rules of Procedure",
          definition: "The formal guidelines that govern how debate and committee sessions are conducted.",
        },
        {
          title: "Roll Call",
          definition: "The process of taking attendance at the beginning of each committee session.",
        },
      ],
    },
    {
      letter: "S",
      terms: [
        {
          title: "Speaker's List",
          definition: "An ordered list of delegates who wish to speak during formal debate, maintained by the chair.",
        },
        {
          title: "Sponsor",
          definition:
            "A delegate who supports a draft resolution and whose country's name appears at the top of the document.",
        },
        {
          title: "Substantive Vote",
          definition: "A vote on the actual content of a resolution or amendment, where abstentions are allowed.",
        },
      ],
    },
    {
      letter: "U",
      terms: [
        {
          title: "Unmoderated Caucus",
          definition:
            "An informal discussion period where delegates can move around the room and speak freely without time limits.",
        },
        {
          title: "Unfriendly Amendment",
          definition:
            "A proposed change to a draft resolution that is not accepted by the sponsors and must be voted on by the committee.",
        },
      ],
    },
    {
      letter: "V",
      terms: [
        {
          title: "Veto",
          definition: "The power of permanent members of the UN Security Council to block any substantive resolution.",
        },
        {
          title: "Voting Procedure",
          definition:
            "The formal process by which the committee makes decisions on motions, amendments, and resolutions.",
        },
      ],
    },
    {
      letter: "W",
      terms: [
        {
          title: "Working Paper",
          definition:
            "An informal document used during committee sessions to develop ideas before they become draft resolutions.",
        },
      ],
    },
    {
      letter: "Y",
      terms: [
        {
          title: "Yield",
          definition:
            "To give up remaining speaking time, either to another delegate, to questions, or back to the chair.",
        },
      ],
    },
  ]

  // Filter terms based on search
  const filteredTerms = useMemo(() => {
    if (!searchTerm) return glossaryTerms

    return glossaryTerms
      .map((section) => ({
        ...section,
        terms: section.terms.filter(
          (term) =>
            term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      }))
      .filter((section) => section.terms.length > 0)
  }, [searchTerm])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse-custom"></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-200 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-orange-300 rounded-full opacity-25 animate-breathe"></div>
        <div
          className="absolute bottom-20 right-10 w-28 h-28 bg-blue-300 rounded-full opacity-20 animate-pulse-custom"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <div
          className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Link
            href="/resources"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4 transition-colors duration-300 hover-lift"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse-custom hover-lift">
                <BookOpen className="h-10 w-10 text-white animate-breathe" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4 animate-color-cycle">
              Model UN Cheat Sheet
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              You're new to MUN or just quickly need to look up one of the many specialized terms? This is your place.
            </p>
          </div>
        </div>

        {/* Search */}
        <div
          className={`relative mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-slate-400 group-focus-within:text-orange-500 transition-colors duration-300" />
            <Input
              type="text"
              placeholder="Which word are you looking for?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg border-2 border-slate-200 focus:border-orange-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Glossary Content */}
        <div className="space-y-8">
          {filteredTerms.map((section, sectionIndex) => (
            <div
              key={section.letter}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-white/50 hover-lift animate-slide-in-up`}
              style={{ animationDelay: `${(sectionIndex + 1) * 200}ms` }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-8 border-b-2 border-gradient-to-r from-orange-200 to-blue-200 pb-4 animate-glow">
                {section.letter}
              </h2>
              <div className="space-y-6">
                {section.terms.map((term, index) => (
                  <div
                    key={index}
                    className="group relative border-l-4 border-orange-500 pl-6 py-4 rounded-r-lg bg-gradient-to-r from-orange-50/50 to-transparent hover:from-orange-100/70 hover:to-blue-50/30 transition-all duration-300 hover-lift"
                    style={{ animationDelay: `${(sectionIndex + 1) * 200 + index * 100}ms` }}
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                      {term.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                      {term.definition}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-16 animate-slide-in-up">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 border border-white/50">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-custom">
                <Search className="h-12 w-12 text-white" />
              </div>
              <p className="text-slate-500 text-xl mb-6">No terms found matching "{searchTerm}"</p>
              <Button
                variant="outline"
                onClick={() => setSearchTerm("")}
                className="hover-lift bg-white/80 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
              >
                Clear Search
              </Button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center animate-slide-in-up" style={{ animationDelay: "800ms" }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50 hover-lift">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">
              Need More Help?
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              Can't find what you're looking for? Our team is here to help you prepare for the conference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="hover-lift bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="hover-lift bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
              >
                <Link href="/resources">Back to Resources</Link>
              </Button>
            </div>
          </div>

          {/* Credits */}
          <p className="text-sm text-slate-500 mt-8 animate-breathe">
            Glossary content adapted from{" "}
            <a
              href="https://mymun.com/glossary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 transition-colors duration-300 hover:underline"
            >
              mymun.com
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse-custom {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes breathe {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes color-cycle {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(249, 115, 22, 0.3); }
          50% { text-shadow: 0 0 20px rgba(249, 115, 22, 0.6), 0 0 30px rgba(59, 130, 246, 0.3); }
        }
        
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-custom { animation: pulse-custom 3s ease-in-out infinite; }
        .animate-breathe { animation: breathe 4s ease-in-out infinite; }
        .animate-color-cycle { animation: color-cycle 6s ease-in-out infinite; background-size: 200% 200%; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        
        .hover-lift:hover { transform: translateY(-5px) scale(1.02); transition: all 0.3s ease; }
      `}</style>
    </main>
  )
}
