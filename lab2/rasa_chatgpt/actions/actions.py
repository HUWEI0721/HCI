import openai
from rasa_sdk import Action
from rasa_sdk.interfaces import Tracker
from rasa_sdk.executor import CollectingDispatcher
from typing import Any, Text, Dict, List

openai.api_key = "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"


class GPTAction(Action):

    def name(self) -> Text:
        return "action_generate"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        # prompt = "Write a introduction about the history of Tongji University"
        # response = openai.Completion.create(
        #     engine="gpt-3.5-turbo-instruct",
        #     prompt=prompt,
        #     max_tokens=2048,
        #     stop=None,
        #     n=1,
        #     temperature=0.5,
        # )
        #
        # generated_text = response.choices[0].text
        # dispatcher.utter_message(text="--gpt-3.5-turbo-instruct--")
        # dispatcher.utter_message(text=prompt)
        # dispatcher.utter_message(text=generated_text)

        prompt = [
            "I want you to act as a copywriter for my WeChat Moments. If you don’t know what’s WeChat,you can regard it as FaceBook or Twitter. I will give you how I feel or what image I want to share, and you will reply the copywriting of it. You will only reply the copywriting at least 50 words.",
            "I feel very relaxed because I just wake up",
        ]
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": prompt[0]},
                {"role": "user", "content": prompt[1]},
            ],
        )
        print(response.choices)
        res_text = response.choices[0].message.content

        dispatcher.utter_message(text="--gpt-3.5-turbo--")
        dispatcher.utter_message(text=repr(prompt))
        dispatcher.utter_message(text=res_text)

        return []
