"use client";

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

interface AccordionProps {
  items: {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
  defaultValue?: string;
  className?: string;
}

export function AccordionWrapper({ items, defaultValue, className }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | undefined>(defaultValue);

  const handleValueChange = (value: string) => {
    console.log("Accordion clicked:", value);
    setOpenItem(value === openItem ? undefined : value);
  };

  return (
    <Accordion
      type="single"
      collapsible
      value={openItem}
      onValueChange={handleValueChange}
      className={className}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="focus-within:outline-none">
          <AccordionTrigger className="text-lg hover:no-underline focus:outline-none">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
