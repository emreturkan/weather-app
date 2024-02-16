"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useBearStore } from "@/store";

export default function Home() {
  const { bears, increasePopulation } = useBearStore((state) => state);

  return (
    <main className="flex  flex-col items-center justify-between pt-6 p-24">
      <Card className={cn(" ")}>
        <CardHeader>Hellow World</CardHeader>
        <CardContent>{bears}</CardContent>
        <Button onClick={increasePopulation} variant="default">
          Tıkla
        </Button>
      </Card>
    </main>
  );
}
