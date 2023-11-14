export default interface iInsDataActPlanCreate {
  insight_type: 'action_plan_create';

  // Header
  title_text: string;
  role_desc_text: string;
  survey_desc_text: string;
  created_at: string;

  // Body
  summary_title_text: string;
  summary_text: string;

  // Footer
  link_text: string;
  link_url: string;
}
