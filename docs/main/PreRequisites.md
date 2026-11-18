---
#icon: material/folder-open-outline
icon: material/bullseye-arrow
---

## 💡 Know before you start

1. We will be using a shared lab tenant, meaning all attendees work within the same Webex Contact Center environment. To avoid conflicts, only work with the entities that carry your **Attendee ID**, such as your queue, team, channel and AI Agent.
2. The lab is focused on **AI Quality Management**. Everything else is already set up for you: the flower store **AI Agent**, the voice flow, the channel, the queue, the team and the human agent. You will only configure Evaluation Forms and Coaching Insights in the Supervisor Desktop.
3. Each Attendee ID comes with a set of users. The same user can act as **Admin**, **Supervisor**, **Agent** and **Webex Calling user**. Get your credentials in the **Get your login credentials** step of the Lab Overview.
4. Please ask for help when you need it. You can do so by raising your hand and calling the proctor.

---

## 🖥️ Environment overview

| Where | Used for | Role in the lab |
|---|---|---|
| **Supervisor Desktop** | Create Evaluation Forms, review scores in Monitor > Interactions, configure Coaching Insights, review Team Performance | The supervisor (you) |
| **Agent Desktop** | Answer the calls that the AI Agent hands off, wrap up the call | The human agent |
| **Webex App (Webex Calling)** or your **cellphone** | Place the test calls into the contact center | The customer |
| **Control Hub** (admin.webex.com) | Not needed for the missions, available for reference | The administrator |

Open the Supervisor Desktop and the Agent Desktop at [desktop.wxcc-us1.cisco.com](http://desktop.wxcc-us1.cisco.com/). Use **two separate browser sessions** (for example a normal window and an incognito window), so you can stay logged in as the supervisor and as the agent at the same time.

## ☎️ How Webex Calling is used in this lab

Every QM mission starts with a call, and the call is placed by you as the customer. You don't have a number of your own: **all attendees use the shared dial-in numbers below**. There are two ways to place the call:

- **Cellphone (recommended):** call the dial-in number directly. This works with a US or UK carrier.
- **Webex App with Webex Calling:** if your phone can't place the call, sign in to the Webex App with your lab user. The user is also a **Webex Calling user**, so the Webex App can dial the **US number** and the call reaches the contact center like any other inbound call.

| Country | Dial-in number |
|---|---|
| UK | **<copy>+442045208103</copy>** |
| US | **<copy>+14692501220</copy>** |

The call then follows this path:

1. The **Webex Calling** call (or your cellphone call) arrives at the shared dial-in number.
2. The **voice flow** answers it and hands it to the flower store **AI Agent**.
3. If you **request a handoff** to a human agent, the AI Agent asks for your **POD / Attendee ID**. You enter it with the phone keypad (**DTMF**), the call is routed to **your** queue, and your **agent** answers it in the Agent Desktop.
4. When the call ends, it appears under **Monitor > Interactions > Completed** in the Supervisor Desktop, where the **Evaluation Form** scores it.

!!! warning "Enter your Attendee ID with the keypad"
    When the AI Agent asks for your POD / Attendee ID, you must type it on the keypad. Speaking the digits is not enough. From the Webex App, use the dialpad during the call.

!!! warning
    The Webex App user that places the call and the agent that answers it must not be the same signed-in session. If you use the Webex App to call, answer as the agent from the Agent Desktop in your other browser session.

### 🔐 Log in to the Webex App

1. Open the **Webex App** on your PC.
   ![Profiles](../graphics/Lab1_AI_Agent/18.1.gif)

2. **Sign in** using the credentials from the Lab Overview.
   ![Profiles](../graphics/Lab1_AI_Agent/18.3.gif)

3. If you receive a prompt to add an Address, click **Cancel**.
   ![Profiles](../graphics/Lab1_AI_Agent/18.4.gif)

### 📞 Place a test call

Place a test call to the **US number <copy>+14692501220</copy>** to confirm that you can reach the contact center. You should hear the AI Agent answer. If you are using your cellphone, call the number that matches your carrier's country.
   ![Profiles](../graphics/Lab1_AI_Agent/18.5.gif)

!!! tip "🎧 Tips"
    - Always use a **headset** and the **mute button** when you place test calls, to avoid echo and background noise.
    - Evaluation scores are not instant. After a call ends, it can take a few minutes for the score to show up under Completed interactions.
