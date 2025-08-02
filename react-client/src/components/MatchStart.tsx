import type { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface MatchStartProps {
  setPlayers: Dispatch<SetStateAction<string[] | undefined>>;
}

const FormSchema = z.object({
  playerOne: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  playerTwo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const MatchStart = ({ setPlayers }: MatchStartProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      playerOne: "",
      playerTwo: "",
    },
  });

  const onSubmit = ({ playerOne, playerTwo }: z.infer<typeof FormSchema>) =>
    setPlayers([playerOne, playerTwo]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="playerOne"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Player 1</FormLabel>
              <FormControl>
                <Input placeholder="Enter player name..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="playerTwo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Player 2</FormLabel>
              <FormControl>
                <Input placeholder="Enter player name..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Begin match!</Button>
      </form>
    </Form>
  );
};

export default MatchStart;
