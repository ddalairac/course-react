export default interface iInsDataFavorability {
  insight_type: 'highest_favorable' | 'lowest_favorable';
  // used for 'role_desc_text' color
  role_detail: 'admin' | 'manager';

  // Header
  title_text: string
  role_desc_text: string;
  survey_desc_text: string;
  created_at: string;

  // Body
  questions: [string, number][];

  // Footer
  summary_title_text: string;
  summary_text: string;
  link_text: string;
  link_url: string;
}
