export default interface iInsDataRecomLearning {
  insight_type: 'lowest_favorable_learning';

  // Header
  title_text: string;
  role_desc_text: string;
  survey_desc_text: string;
  created_at: string;

  // Body
  body_title_text: string;
  article_title: string;
  summary_title_text: string;
  question_text: string;
  unfavorable_percent: number;

  // Footer
  link_text: string;
  link_url: string;
}
