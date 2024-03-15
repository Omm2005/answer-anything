'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/modeToggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";


export default function Home() {
  const [asked, setAsked] = useState<boolean>(false)
  const [answer, setAnswer] = useState<string>("")
  const [question, setQuestion] = useState<string>("")

  const handleAsk = () => {
    if(question === "") {
      toast.error("Please ask a question to get an answer")
      return
    }
      setAsked(true)
      setAnswer("Processing")
    setTimeout(() => {
      setAnswer("Thinking")
    } , 4000)
    setTimeout(() => {
      setAnswer("The answer is 42")
    } , 10000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mdp-24 p-10">
      <div className="flex justify-between items-center w-full">
        <Link href='/' className="md:text-xl font-bold text-base">
          Answer Anything
        </Link>
        <ModeToggle />
      </div>
      <div className="z-10 max-w-5xl w-full flex-col items-center justify-center font-mono text-sm lg:flex gap-7">
        <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-4xl text-xl font-bold text-center">
        Hitchhiker&apos;s Supercomputer
        </h1>
        <h3 className="md:text-lg text-sm text-center text-foreground/90">
          Answer to the Ultimate Question of Life, the Universe, and Everything
        </h3>
        <p className="md:text-sm text-xs font-light text-center text-muted-foreground">
          This is a Supercomputer that can answer any question you have. Just ask it anything and it will give you the answer.
        </p>
        </div>
        <div className="w-auto lg:w-1/2 flex gap-5 justify-center items-center">
          {
            asked ? (
              <div className="flex flex-col gap-5 text-center justify-center items-center">
                <p className="text-lg font-bold">
                  You asked: {question}
                </p>
                <div className="flex gap-2 justify-center items-center">

                <p className="flex-1 text-lg font-bold">
                  {answer}
                  {answer !== "The answer is 42" && (
                    <span className="animate-ping">...</span>
                    )}
                </p>
                <Button onClick={() => {setAsked(false); setQuestion('')}} disabled={answer !== "The answer is 42"} className={cn( 'cursor-not-allowed' ,answer === "The answer is 42" && 'hover:cursor-pointer')}>
                  Ask Another Question
                </Button>
                    </div>
              </div>
            ) : (
              <>
              <form className="w-full flex flex-col justify-center" onSubmit={handleAsk}>

              <div className="flex md:flex-row flex-col justify-center items-center w-full md:gap-5 mt-4">
        <Input placeholder="Ask Your Question to the Supercomputer" onChange={(e) => setQuestion(e.target.value)} />
        {
          answer === "" && (
            <p className="text-center font-light text-destructive text-xs flex md:hidden mb-4 md:mb-0">
              Ask a question to get an answer.
            </p>
          )
        }  
        <Button type="submit" className="md:w-auto w-full">
          Ask 
        </Button>
              </div>
        {
          answer === "" && (
            <p className="text-start font-light text-destructive text-xs md:flex hidden">
              Ask a question to get an answer.
            </p>
          )
        }    
        </form>
              </>
            )
          }
        </div>
      </div>
      <div className="text-sm flex flex-col justify-center items-center text-center">
        <p>
          Inspired by the book &quot;Elon Musk&quot; by Walter Isaacson.
        </p>
        <p>
          Made with ❤️ by {' '}
          <Link href="https://twitter.com/MaiOmmHoon" className="hover:underline text-primary">
            Om Shah
          </Link>
        </p>
      </div>
    </main>
  );
}
