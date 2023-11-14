export default interface iInsDataActPlanFollowUp {
  insight_type: 'action_plan_followup';

  // Header
  title_text: string; // Action plan follow up
  role_desc_text: string; // YOUR TEAM
  survey_desc_text: string; // 2022 ENGAGEMENT SURVEY
  created_at: string;

  // Body
  action_plan_item_title: string; // Action plan item:
  action_plan_item: string; // My current responsibilities are...
  action_plan_item_date: string; // Review date:
  review_date:string; //  2023-08-02 00:00:00
  summary_title_text: string;
  summary_text: string;

  // Footer
  link_text: string;
  link_url: string;
}
