"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export type formValue = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email("Dit is geen email"),
  occasion: z.string(),
  message: z.string(),
});

export function EmailForm() {
  const form = useForm<formValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: formValue) {
    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error: any) {
      form.setError("root", { message: error });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className=" font-bold text-xl">Naam</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl">
                  Telefoonnummer
                </FormLabel>
                <FormControl>
                  <Input placeholder="+31 6 12345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl">
                  E-mail adres
                </FormLabel>
                <FormControl>
                  <Input placeholder="examle@provider.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occasion"
            render={({ field }) => (
              <FormItem className="row-span-1">
                <FormLabel className=" font-bold text-xl">
                  Gelegenheid
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer een gelegenheid" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Trouwdag">Trouwdag</SelectItem>
                    <SelectItem value="Gala">Gala</SelectItem>
                    <SelectItem value="Anders">Anders</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="row-span-2 flex flex-col">
                <FormLabel className="font-bold text-xl">
                  Heeft u speciale wensen
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="..."
                    className="resize-none h-fill flex-grow"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="pt-6">
          <Button type="submit" variant="outline" className="font-bold">
            Verzenden
          </Button>
        </div>
      </form>
    </Form>
  );
}
