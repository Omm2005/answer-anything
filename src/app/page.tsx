'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";


export default function Home() {
  const [asked, setAsked] = useState<boolean>(false)
  const [answer, setAnswer] = useState<string>("")
  const [question, setQuestion] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAsk = () => {
    if(question === "") {
      toast.error("Please ask a question to get an answer")
      return
    }
      setAsked(true)
      setAnswer("Processing")
    setTimeout(() => {
      setAnswer("Thinking")
    } , 5000)
    setTimeout(() => {
      setAnswer("The answer is 42")
      setQuestion("")
    } , 10000)
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (/[a-zA-Z]/.test(e.key) && !e.ctrlKey && !e.shiftKey && !e.altKey) {
        inputRef.current!.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mdp-24 p-10">
      <div />
      <div className="z-10 max-w-5xl w-full flex-col items-center justify-center font-mono text-sm lg:flex gap-7">
        <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-4xl text-xl font-bold text-center">
        Hitchhiker's Supercomputer
        </h1>
        <h3 className="md:text-lg text-sm text-center">
          Answers to the Ultimate Question of Life, the Universe, and Everything
        </h3>
        <p className="md:text-sm text-xs font-light text-center text-muted-foreground">
          This is a Supercomputer that can answer any question you have. Just ask it anything and it will give you the answer.
        </p>
        </div>
        <div className="w-auto lg:w-1/2 flex gap-5 justify-center items-center">
          {
            asked ? (
              <div className="flex md:flex-row flex-col gap-5 text-center justify-center items-center">
                <p className="flex-1 text-lg font-bold">
                  {answer}
                  {answer !== "The answer is 42" && (
                    <span className="animate-ping">...</span>
                  )}
                </p>
                <Button onClick={() => setAsked(false)} disabled={answer !== "The answer is 42"}>
                  Ask Another Question
                </Button>
              </div>
            ) : (
              <>
              <div className="w-full flex flex-col justify-center items-center">

              <div className="flex md:flex-row flex-col justify-center items-center w-full md:gap-5 mt-4">
        <Input ref={inputRef} placeholder="Ask Your Question to the Supercomputer" onChange={(e) => setQuestion(e.target.value)} />
        {
          answer === "" && (
            <p className="text-start font-light text-destructive text-xs flex md:hidden mb-4 md:mb-0">
              Ask a question to get an answer.
            </p>
          )
        }  
        <Button onClick={handleAsk}>
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
        </div>
              </>
            )
          }
        </div>
      </div>
      <div className="text-sm flex flex-col justify-center items-center">
        <p>
          Inspired by the book "The Elon Musk" by Walter Isaacson.
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
