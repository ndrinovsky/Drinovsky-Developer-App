import type { ICsumbILPClasses } from '../../interfaces/ICsumbILPClasses';
import NavLink from '../common/NavLink';

export const csumbClasses: ICsumbILPClasses[] = [
  {
    courseNumber: { en: 'CST 349', ja: 'CST 349' },
    courseTitle: { en: 'Computer Science Proseminar', ja: 'コンピュータサイエンスプロセミナー' },
    children: 
      <>
        <div className='text-lg font-semibold'>Industry Expert Interview Report</div> 
        <NavLink
          isExternal
          isActive={true}
          href={'https://nickcancode.blogspot.com/2026/10/industry-expert-interview-exploring.html'}
          text='Read more'
        />
        <div className='text-lg font-semibold'>Professional Final Video</div>
        <NavLink
          isExternal
          isActive={true}
          href={'https://www.youtube.com/watch?v=Fv1gXJNilvI'}
          text='Watch Professional Video'
        />
        <div className='text-lg font-semibold'>General Final Video</div>
        <NavLink
          isExternal
          isActive={true}
          href={'https://youtu.be/bRRuLe8zquA'}
          text='Watch General Video'
        />
      </>,
    courseDescription: 
    { 
      en: 'The Proseminar course helps students prepare for \'life after college\' by connecting their major to their broader personal and professional goals. In this course, students will critically analyze information from diverse sources, including academic and business literature and conversations with industry mentors. They will also develop crucial problem-solving, communication, and teamwork skills throughout the course. This analysis and skill development will guide them in crafting their personal value proposition and a plan for developing a professional portfolio.', 
      ja: 'プロセミナーコースは、学生が専攻をより広い個人的および職業的な目標に結びつけることによって、「大学卒業後の生活」に備えるのを助けます。このコースでは、学生は学術文献やビジネス文献、業界のメンターとの会話など、多様な情報源から情報を批判的に分析します。また、コースを通じて重要な問題解決、コミュニケーション、チームワークのスキルを身につけます。この分析とスキルの開発は、学生が自分の価値提案を作成し、プロフェッショナルポートフォリオを開発する計画を立てる際の指針となります。'
    },
  },
  {
    courseNumber: { en: 'CST 363', ja: 'CST 363' },
    courseTitle: { en: 'Introduction to Database Systems', ja: 'データベースシステム入門' },
    courseDescription: { 
      en: 'This course provides balanced coverage of database use and design,focusing on relational databases. Students will learn to design relational schemas, write SQL queries, access a DB programmatically,and perform database administration. Students will gain a working knowledge of the algorithms and data structures used in query evaluation and transaction processing. Students will also learn to apply newer database technologies such as XML, NoSQL, and Hadoop.', 
      ja: 'このコースは、データベースの使用と設計をバランスよくカバーし、特にリレーショナルデータベースに焦点を当てています。学生はリレーショナルスキーマの設計、SQLクエリの作成、プログラムによるデータベースアクセス、データベース管理を学びます。学生はまた、クエリ評価やトランザクション処理に使用されるアルゴリズムやデータ構造についての実務的な知識を得ます。さらに、XML、NoSQL、Hadoopなどの新しいデータベース技術の適用方法も学びます。'
    },
  },
  {
    courseNumber: { en: 'CST 462S', ja: 'CST 462S' },
    courseTitle: { en: 'Race, Gender, Class in the Digital World', ja: 'デジタル世界における人種、ジェンダー、階級' },
    courseDescription: { 
      en: 'Provides students with key knowledge of race, gender, class and social justice especially in relation to technology in today\'s digital world. Students challenge the barriers of expertise, gender, race, class, and location that restrict wider access to and understanding of the production and usage of new technologies. Students will engage in a practical experience in the community via their service placements, which will provide depth and context for considering questions of justice, equality, social responsibilities and the complexities of technology and its societal impact. The course uses scenario based approach combining presentations, discussions, and reflections to allow students explore the relationship between critical reflection and action on the topics mentioned above. ', 
      ja: 'このコースは、特に今日のデジタル世界における技術に関連して、人種、ジェンダー、階級、社会正義に関する重要な知識を学生に提供します。学生は、新しい技術の生産と使用へのより広いアクセスと理解を制限する専門知識、ジェンダー、人種、階級、場所の障壁に挑戦します。学生は、サービス配置を通じてコミュニティでの実践的な経験に参加し、正義、平等、社会的責任、および技術とその社会的影響の複雑さに関する問題を考慮するための深さと文脈を提供します。コースでは、プレゼンテーション、ディスカッション、リフレクションを組み合わせたシナリオベースのアプローチを使用して、学生が上記のトピックに関する批判的な反省と行動の関係を探求できるようにします。'
    },
  },
  {
    courseNumber: { en: 'CST 328', ja: 'CST 328' },
    courseTitle: { en: 'Digital Art and Design', ja: 'デジタルアートとデザイン' },
    courseDescription: { 
      en: 'A survey course that combines the study of technology, design and aesthetic principles as they apply to twenty-first century visual media. Students learn how fundamental concepts of art and design apply to a broad range of commercial, expressive and entertainment forms. Students also study the democratization of the creative process through digital media, using current technology to produce sophisticated and expressive examples of personal digital creativity.', 
      ja: '21世紀の視覚メディアに適用される技術、デザイン、美学の原則の研究を組み合わせた概観コースです。学生は、芸術とデザインの基本概念が商業的、表現的、娯楽的な幅広い形式にどのように適用されるかを学びます。学生はまた、デジタルメディアを通じた創造的プロセスの民主化を学び、現在の技術を使用して個人的なデジタル創造性の洗練された表現力豊かな例を制作します。'
    },
  },
  {
    courseNumber: { en: 'CST 383', ja: 'CST 383' },
    courseTitle: { en: 'Introduction to Data Science', ja: 'データサイエンス入門' },
    courseDescription: { 
      en: 'In data science, data analysis and machine learning techniques are applied to visualize data, understand trends, and make predictions. In this course students will learn how to obtain data, preprocess it, apply machine learning methods, and visualize the results. A student who completes the course will have enough theoretical knowledge, and enough skill with modern statistical programming languages and their libraries, to define and perform complete data science projects.', 
      ja: 'データサイエンスでは、データ分析と機械学習の手法を用いてデータを可視化し、傾向を理解し、予測を行います。このコースでは、学生はデータの取得、前処理、機械学習手法の適用、結果の可視化を学びます。コースを修了した学生は、理論的知識と、現代の統計プログラミング言語およびそのライブラリを用いた実践的なスキルを十分に身につけ、完全なデータサイエンスプロジェクトを定義し実行することができるようになります。'
    },
  },
  {
    courseNumber: { en: 'CST 438', ja: 'CST 438' },
    courseTitle: { en: 'Software Engineering', ja: 'ソフトウェア工学' },
    courseDescription: { 
      en: 'Prepares students for large-scale software development using software engineering principles and techniques. Coverage includes software process, requirements analysis and specification, software design, implementation, testing, and project management. Students are expected to work in teams to carry out a realistic software project.', 
      ja: 'このコースは、ソフトウェア工学の原則と技法を用いた大規模ソフトウェア開発に学生を準備させます。カバーする内容には、ソフトウェアプロセス、要件分析と仕様、ソフトウェア設計、実装、テスト、プロジェクト管理が含まれます。学生は、現実的なソフトウェアプロジェクトを実行するためにチームで作業することが期待されます。'
    },
  },
  {
    courseNumber: { en: 'CST 329', ja: 'CST 329' },
    courseTitle: { en: 'Reasoning with Logic', ja: '論理的推論' },
    courseDescription: { 
      en: 'In this course students learn to develop skill in using logic to describe and assess arguments. Students will learn to write formulas in propositional and first-order logic, and more importantly, to write and check proofs. Students will also learn to write formulas in three-valued and modal logic, know how to choose an appropriate logic, and understand the limitations of logic in capturing human reasoning.', 
      ja: 'このコースでは、学生は論理を用いて議論を記述し評価するスキルを身につけます。学生は命題論理および一階述語論理での公式の書き方を学び、さらに重要なこととして、証明の作成と検証を学びます。学生はまた、三値論理および様相論理での公式の書き方を学び、適切な論理を選択する方法を知り、人間の推論を捉える上での論理の限界を理解します。'
    },
  },
  {
    courseNumber: { en: 'CST 489', ja: 'CST 489' },
    courseTitle: { en: 'Capstone Project Planning', ja: 'キャップストーンプロジェクト計画' },
    courseDescription: { 
      en: 'Students create a detailed proposal of a substantial, professional level project with an approval of the student’s capstone advisor. Students learn and practice project planning, collaboration and writing skills required in the industry.', 
      ja: '学生は、キャップストーンアドバイザーの承認を得て、実質的で専門的なレベルのプロジェクトの詳細な提案を作成します。学生は、業界で必要とされるプロジェクト計画、協力、および執筆のスキルを学び、実践します。'
    },
  }
];