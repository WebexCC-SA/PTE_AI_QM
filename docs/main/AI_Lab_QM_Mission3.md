---
#icon: material/folder-open-outline
icon: material/medal
---

# 🏅 Mission 3: Configure Coaching Insights

**<details><summary>What is Coaching Insights? <span style="color: orange;"></span></summary>**

Coaching Insights helps supervisors see when agents miss performance targets so they can coach the team. You set KPI thresholds for a team, such as Average Wrap-up Duration. After calls complete, Team Performance shows which agents are outside those thresholds and which insights apply to each user.

## </details>

!!! info "🆔 Your POD number"
    Your **POD number is the same as your Attendee ID**: <w class="attendee">No ID stored</w>. All the entities you use in this mission (forms, queue, team, channel and AI Agent) belong to your POD and include this number in their names. If you see "No ID stored", get your credentials in the **Lab Overview** first.

## ✨ Feature Description

Use **Coaching Insights** in the Supervisor Desktop to:

- Enable insights for your team.
- Set a KPI threshold that you want to monitor.
- Review Team Performance History after a test call.
- Open an individual user to see the specific KPI and coaching insight.

## 🎯 Mission overview

!!! abstract "Your mission"
    Configure Coaching Insights and review the results. 

---

## 🛠️ Build

### ⚙️ Task 1. Enable Coaching Insights

1. Go to **Configurations** and then select **Coaching Insights**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.16.png)

2. Enable Coaching Insights for your team. You can search for it using your team name: (<w class="attendee">POD</w>): **<copy><w class="attendee"></w>\_2000_Team</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.17.png)

3. Click on **View**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.18.png)

4. Enable the **Average Wrap Up Duration** and configure it between 1 and 5 seconds.

    !!! tip "💡 Why 1 to 5 seconds?"
        This very low threshold is easy to exceed, so the KPI is triggered and shows up in the Team Performance table.
   ![Profiles](../graphics/Lab1_AI_Agent/12.19.png)

5. Click **Save updates**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.20.png)

6. 📞 **Place a test call.** Call one of the shared dial-in numbers:

    | 🇬🇧 UK | 🇺🇸 US |
    |:---:|:---:|
    | **<copy>+442045208103</copy>** | **<copy>+14692501220</copy>** |

    1. 🤖 **Request a handoff** to a human agent.
    2. 🔢 When asked for your **POD / Attendee ID**, enter it with the phone **keypad (DTMF)** so the call is routed to **your** queue. Your ID: <w class="attendee">No ID stored</w>
    3. 🎧 Answer the call in the Agent Desktop and let it be **wrapped up automatically**.

7. In the **Monitor** section, go to **Team Performance**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.21.png)

8. Click on **History**. Find your team by searching for (<w class="attendee">POD</w>): **<copy><w class="attendee"></w>\_2000_Team</copy>**. Then click on **View**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.22.png)

9. You will see the Team Performance KPI together with Coaching Insights for every user of the team. In this screenshot, you can see there are 2 users. By clicking on any of them, you will see the specific KPI. 
   ![Profiles](../graphics/Lab1_AI_Agent/12.23.png)


---

<p style="text-align:center"><strong>🎉🎉 Congratulations, you have officially completed this mission! 🎉🎉</strong></p>
