import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import Question from './Questions/Question';
import jsPDF from 'jspdf';
const App = () => {
  const questionnaire = useMemo(() => ({
    essential1: [
      {
        question: "Access Control: Is there a centralized system for managing user access rights and permissions to critical systems and data?",
        options: [
          ["Not Implemented: The organization has not implemented any centralized system for managing user access rights and permissions to critical systems and data.", 0], 
          ["Initial Implementation: The organization has started implementing a centralized system for managing user access rights and permissions, but it is not fully operational or covers all critical systems and data.", 1],
          ["Substantial Implementation: The organization has made significant progress in implementing a centralized system for managing user access rights and permissions, covering some critical systems and data, but there are still some areas that need improvement.", 2], 
          ["Fully Implemented: The organization has fully implemented a centralized system for managing user access rights and permissions, covering all critical systems and data.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Incident Response: Is there a documented incident response plan that outlines the steps to be taken in the event of a cyber incident?",
        options: [
          ["Not Implemented: The organization does not have a documented incident response plan outlining the steps to be taken in the event of a cyber incident", 0], 
          ["Initial Development: The organization has started developing an incident response plan, but it is not yet fully documented or comprehensive.", 1],
          ["Developing: The organization has a work-in-progress incident response plan, which outlines some steps to be taken in the event of a cyber incident, but it may not cover all potential scenarios or have clear procedures.", 1], 
          ["Partially Implemented: The organization has made some progress in documenting an incident response plan, but there are still significant gaps or areas that need improvement", 1],
          ["Fully Implemented: The organization has a fully documented incident response plan that outlines clear and comprehensive steps to be taken in the event of a cyber incident.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Patch Management: Are there procedures in place for regularly applying security patches to operating systems and software?",
        options: [
          ["Not Implemented: The organization does not have procedures in place for regularly applying security patches to operating systems and software.", 0], 
          ["Initial Implementation: The organization has started implementing patch management procedures, but they are not yet consistently applied or may not cover all systems and software.", 1],
          ["Developing: The organization has some patch management procedures in place, and efforts are underway to ensure regular application of security patches, but there is room for improvement and consistency.", 1], 
          ["Partially Implemented: The organization has made progress in establishing patch management procedures, but there are still significant gaps or systems and software that do not receive regular security patches.", 1],
          ["Fully Implemented: The organization has fully established procedures for regularly applying security patches to operating systems and software, covering all critical systems and software components.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Data Protection: Is data encryption used to protect sensitive information stored on company devices or transmitted over networks?",
        options: [
          ["Not Implemented: Data encryption is not used to protect sensitive information stored on company devices or transmitted over networks.", 0], 
          ["Initial Implementation: The organization has started to implement data encryption for sensitive information, but it is not yet consistently applied across all devices and network transmissions.", 1],
          ["Developing: The organization has made some progress in implementing data encryption measures, and efforts are underway to ensure its consistent use, but there is room for improvement. ", 1], 
          ["Partially Implemented: Data encryption is partially implemented to protect sensitive information, but there are still significant gaps in coverage or some devices and network channels remain unencrypted.", 1],
          ["Fully Implemented: The organization has fully implemented data encryption to protect sensitive information on company devices and during network transmissions.", 2]
        ],
        choosedOption: null,
      },
    ],
    essential2: [
      {
        question: "Patch Applications: Is there a documented process for assessing software applications for security vulnerabilities and updates?",
        options: [
          ["Not Implemented: The organization does not have a documented process for assessing software applications for security vulnerabilities and updates.", 0], 
          ["Initial Development: The organization has started developing a process for assessing software applications for security vulnerabilities and updates, but it is not yet fully documented or consistently applied.", 1],
          ["Developing: The organization has made some progress in creating a process for assessing software applications, and efforts are underway to improve its documentation and implementation.", 1], 
          ["Partially Implemented: The organization has a partially documented process for assessing software applications for security vulnerabilities and updates, but there are still significant gaps in coverage or consistency.", 1],
          ["Fully Implemented: The organization has a well-documented and established process for assessing software applications for security vulnerabilities and updates, consistently applied across the organization.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Patch Testing: Are non-critical patches tested for compatibility and stability before deployment?",
        options: [
          ["Not Implemented: The organization does not have a process for testing non-critical patches for compatibility and stability before deployment.", 0], 
          ["Initial Development: The organization has started developing a process for testing non-critical patches, but it is not yet fully established or consistently applied. ", 1],
          ["Developing: The organization has made some progress in creating a process for testing non-critical patches, and efforts are underway to improve its implementation and coverage", 1], 
          ["Partially Implemented: The organization has a partially established process for testing non-critical patches for compatibility and stability, but there are still significant gaps or inconsistencies. ", 1],
          ["Fully Implemented: The organization has a well-established process for testing non-critical patches for compatibility and stability before deployment, consistently applied across the organization.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Emergency Patching: Is there a process for emergency patching to address critical security vulnerabilities?",
        options: [
          ["Not Implemented: The organization does not have a process for emergency patching to address critical security vulnerabilities.", 0], 
          ["Initial Development: The organization has started developing a process for emergency patching, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating a process for emergency patching, and efforts are underway to improve its implementation and response time.", 1], 
          ["Partially Implemented: The organization has a partially established process for emergency patching to address critical security vulnerabilities, but there are still significant gaps or inconsistencies in the response.", 1],
          ["Fully Implemented: The organization has a well-established process for emergency patching, enabling a swift and effective response to critical security vulnerabilities as they arise.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Patch Verification: Are there procedures to monitor and verify the successful application of software patches across the organization",
        options: [
          ["Not Implemented: The organization does not have procedures to monitor and verify the successful application of software patches across the organization.", 0], 
          ["Initial Development: The organization has started developing procedures for patch verification, but they are not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating procedures for patch verification, and efforts are underway to improve their implementation and coverage.", 1], 
          ["Partially Implemented: The organization has partially established procedures to monitor and verify the successful application of software patches, but there are still significant gaps or inconsistencies in the verification process.", 1],
          ["Fully Implemented: The organization has well-established procedures to monitor and verify the successful application of software patches across the organization, ensuring a reliable and comprehensive verification process.", 2]
        ],
        choosedOption: null,
      },
    ],
    essential3: [
      {
        question: "Microsoft Office Macro Settings: Is there a documented policy or procedure for configuring Microsoft Office macro settings?",
        options: [
          ["Not Documented: The organization does not have a documented policy or procedure for configuring Microsoft Office macro settings.", 0], 
          ["Initial Documentation: The organization has started documenting a policy or procedure for configuring Microsoft Office macro settings, but it is not yet fully comprehensive or consistently followed.", 1],
          ["Developing: The organization has made some progress in documenting a policy or procedure for configuring Microsoft Office macro settings, and efforts are underway to improve its implementation and coverage. ", 1], 
          ["Partially Documented: The organization has partially documented a policy or procedure for configuring Microsoft Office macro settings, but there are still significant gaps or inconsistencies in its documentation and application.", 1],
          ["Fully Documented: The organization has a fully documented policy or procedure for configuring Microsoft Office macro settings, ensuring consistency and effectiveness in managing macro security.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Blocking Macros: Are Microsoft Office macro settings not configured to block macros from the internet and external sources?",
        options: [
          ["Not Configured: Microsoft Office macro settings are not configured to block macros from the internet and external sources.", 0],
          ["Partially Configured: Microsoft Office macro settings are partially configured to block macros from the internet and external sources, but there may be some exceptions or loopholes.", 1],
          ["Developing: Efforts are underway to configure Microsoft Office macro settings to block macros from the internet and external sources, and progress is being made, but it is not yet fully implemented.", 1],
          ["Partially Implemented: Microsoft Office macro settings are configured to block macros from the internet and external sources, but there are still some systems or instances where the settings are not consistently applied.", 1],
          ["Fully Implemented: Microsoft Office macro settings are fully configured to block macros from the internet and external sources, ensuring comprehensive protection against potentially malicious macros.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Evaluating Macros: Is there no process to evaluate and enable macros from trusted sources on a case-by-case basis?",
        options: [
          ["Not Implemented: The organization does not have a process to evaluate and enable macros from trusted sources on a case-by-case basis.", 0],
          ["Initial Development: The organization has started developing a process to evaluate and enable macros from trusted sources on a case-by-case basis, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating a process to evaluate and enable macros from trusted sources, and efforts are underway to improve its implementation and coverage.", 1],
          ["Partially Implemented: The organization has partially implemented a process to evaluate and enable macros from trusted sources on a case-by-case basis, but there are still significant gaps or inconsistencies in the evaluation and decision-making process.", 1],
          ["Fully Implemented: The organization has a well-established process to evaluate and enable macros from trusted sources on a case-by-case basis, ensuring a careful and secure approach to using macros when necessary.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Employee Education: Are employees not educated about the risks associated with enabling macros from unknown or untrusted sources?",
        options: [
          ["Not Educated: Employees are not educated about the risks associated with enabling macros from unknown or untrusted sources.", 0],
          ["Initial Education: The organization has started providing education to employees about the risks associated with enabling macros from unknown or untrusted sources, but it is not yet fully comprehensive or consistently conducted.", 1],
          ["Developing: The organization has made some progress in educating employees about the risks associated with enabling macros from unknown or untrusted sources, and efforts are underway to improve its coverage and effectiveness.", 1],
          ["Partially Educated: Employees have received some education about the risks associated with enabling macros from unknown or untrusted sources, but there are still significant gaps in understanding or awareness.", 1],
          ["Fully Educated: Employees are fully educated about the risks associated with enabling macros from unknown or untrusted sources, and they are aware of the necessary precautions to take when dealing with macros.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Macro Antivirus Scanning: Is macro antivirus scanning not enabled to detect and block potentially malicious macros?",
        options: [
          ["Not Enabled: Macro antivirus scanning is not enabled to detect and block potentially malicious macros.", 0],
          ["Partially Enabled: Macro antivirus scanning is partially enabled, but it may not be consistently applied or may have limited coverage for detecting and blocking potentially malicious macros.", 1],
          ["Developing: Efforts are underway to enable macro antivirus scanning for detecting and blocking potentially malicious macros, but it is not yet fully implemented or operational.", 1],
          ["Partially Implemented: Macro antivirus scanning is partially implemented, and it can detect and block some potentially malicious macros, but there are still significant gaps or limitations in its effectiveness.", 1],
          ["Fully Implemented: Macro antivirus scanning is fully enabled, detecting and blocking potentially malicious macros effectively to enhance security.", 2]
        ],
        choosedOption: null,
      },
    
    ],
    essential4: [
      {
        question: "Security Features for User Applications: Are web browsers and email clients not configured with security features like pop-up blockers, script blocking, and secure browsing?",
        options: [
          ["Not Configured: Web browsers and email clients are not configured with security features like pop-up blockers, script blocking, and secure browsing.", 0],
          ["Partially Configured: Security features for web browsers and email clients are partially configured, but there may be some missing features or inconsistencies in their implementation.", 1],
          ["Developing: Efforts are underway to configure security features for web browsers and email clients, and progress is being made, but it is not yet fully implemented or operational.", 1],
          ["Partially Implemented: Security features like pop-up blockers, script blocking, and secure browsing are partially implemented in web browsers and email clients, but there are still significant gaps or limitations in their application.", 1],
          ["Fully Implemented: Web browsers and email clients are fully configured with security features, including pop-up blockers, script blocking, and secure browsing, providing a robust defense against potential threats.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Security Training for Employees: Are employees not regularly trained to identify and report suspicious emails, phishing attempts, and social engineering attacks?",
        options: [
          ["Not Provided: Employees are not regularly trained to identify and report suspicious emails, phishing attempts, and social engineering attacks.", 0],
          ["Infrequent Training: Employees receive security training, but it is infrequent and may not cover all aspects of identifying and reporting suspicious emails, phishing attempts, and social engineering attacks.", 1],
          ["Developing: Efforts are underway to regularly train employees on identifying and reporting suspicious emails, phishing attempts, and social engineering attacks, but the training program is not yet fully comprehensive or consistently conducted.", 1],
          ["Partially Trained: Employees receive some training on identifying and reporting suspicious activities, but there are still significant gaps in their knowledge and awareness.", 1],
          ["Fully Trained: Employees are regularly and comprehensively trained to identify and report suspicious emails, phishing attempts, and social engineering attacks, enhancing the organization's security posture.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Assessment of Security Settings: Is there no process to assess and strengthen the security settings of user applications based on their specific needs and risk profiles?",
        options: [
          ["Not Implemented: There is no process to assess and strengthen the security settings of user applications based on their specific needs and risk profiles.", 0],
          ["Initial Development: Efforts have started to develop a process to assess and strengthen the security settings of user applications based on their specific needs and risk profiles, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating a process to assess and strengthen the security settings of user applications, and efforts are underway to improve its implementation and coverage.", 1],
          ["Partially Implemented: A process exists to assess and strengthen the security settings of user applications based on their specific needs and risk profiles, but there are still significant gaps or inconsistencies in its application.", 1],
          ["Fully Implemented: There is a well-established process to assess and strengthen the security settings of user applications based on their specific needs and risk profiles, ensuring a secure and tailored approach to application security.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Review and Update of Security Configurations: Is there no effort to review and update security configurations to align with current threats and best practices?",
        options: [
          ["Not Performed: There is no effort to review and update security configurations to align with current threats and best practices.", 0],
          ["Initial Efforts: Some initial efforts have been made to review and update security configurations, but it is not yet a consistent or comprehensive practice.", 1],
          ["Development: Efforts are underway to review and update security configurations to align with current threats and best practices, and progress is being made to improve its coverage and effectiveness.", 1],
          ["Partially Implemented: Security configurations are partially reviewed and updated to align with current threats and best practices, but there are still significant gaps or inconsistencies in this process.", 1],
          ["Fully Implemented: There is a well-established practice to regularly review and update security configurations, ensuring they align with current threats and industry best practices, contributing to a strong security posture.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Timely Deployment of Software Updates: Are software updates and security patches for user applications not deployed in a timely manner?",
        options: [
          ["Not Timely: Software updates and security patches for user applications are not deployed in a timely manner.", 0],
          ["Infrequent Updates: Software updates and security patches are deployed, but the frequency of updates is infrequent and may not keep up with the latest releases.", 1],
          ["Developing: Efforts are underway to improve the timely deployment of software updates and security patches for user applications, but it is not yet fully consistent or comprehensive.", 1],
          ["Partially Timely: Software updates and security patches are partially deployed in a timely manner, but there are still significant delays or gaps in the update process.", 1],
          ["Fully Timely: Software updates and security patches for user applications are consistently and promptly deployed in a timely manner, ensuring that systems are up-to-date and secure against known vulnerabilities.", 2]
        ],
        choosedOption: null,
      },
    ],
    essential5: [
      {
        question: "Restrict Administrative Privileges: Is there a documented policy or procedure for restricting administrative privileges?",
        options: [
          ["Not Documented: There is no documented policy or procedure for restricting administrative privileges.", 0],
          ["Initial Development: Efforts have started to develop a policy or procedure for restricting administrative privileges, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating a documented policy or procedure for restricting administrative privileges, and efforts are underway to improve its implementation and coverage.", 1],
          ["Partially Documented: There is a partially documented policy or procedure for restricting administrative privileges, but there are still significant gaps or inconsistencies in its application.", 1],
          ["Fully Documented: There is a well-documented policy or procedure for restricting administrative privileges, ensuring a secure and controlled approach to granting elevated access.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Principle of Least Privilege: Is the principle of least privilege not consistently applied to grant administrative access only when necessary for specific job roles?",
        options: [
          ["Not Applied: The principle of least privilege is not consistently applied, and administrative access may not be restricted to only necessary job roles.", 0],
          ["Partially Applied: The principle of least privilege is partially applied, but there may be instances where administrative access is granted beyond what is necessary for specific job roles.", 1],
          ["Developing: Efforts are underway to consistently apply the principle of least privilege, and progress is being made in restricting administrative access to specific job roles.", 1],
          ["Partially Consistent: The principle of least privilege is partially and consistently applied, but there are still some areas where administrative access may not align with specific job roles.", 1],
          ["Fully Applied: The principle of least privilege is fully and consistently applied, ensuring administrative access is granted only when necessary for specific job roles.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Administrative Privilege Review: Are administrative privileges not regularly reviewed and revoked for employees who no longer require them?",
        options: [
          ["Not Reviewed: Administrative privileges are not regularly reviewed, and there may be employees who still retain unnecessary privileges even though they no longer require them.", 0],
          ["Infrequent Review: Administrative privileges are reviewed, but the review process is infrequent and may not cover all employees, leading to some retaining unnecessary privileges.", 1],
          ["Developing: Efforts are underway to improve the regular review of administrative privileges, and progress is being made to identify and revoke privileges for employees who no longer require them.", 1],
          ["Partially Reviewed: Administrative privileges are partially reviewed, and some employees have unnecessary privileges revoked, but there are still significant gaps in the review process.", 1],
          ["Fully Reviewed: Administrative privileges are regularly and comprehensively reviewed, ensuring that employees who no longer require them have their privileges promptly revoked.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Employee Awareness: Are employees not informed about the risks associated with administrative privileges and the measures to protect them?",
        options: [
          ["Not Informed: Employees are not informed about the risks associated with administrative privileges and the measures to protect them.", 0],
          ["Partially Informed: Some employees have been informed about the risks associated with administrative privileges and the measures to protect them, but not all employees are aware of these risks and measures.", 1],
          ["Developing: Efforts are underway to inform employees about the risks associated with administrative privileges and the measures to protect them, and progress is being made in raising awareness among the workforce.", 1],
          ["Partially Implemented: Employees are partially informed about the risks associated with administrative privileges and the protective measures, but there are still significant gaps in awareness and understanding.", 1],
          ["Fully Informed: All employees are informed about the risks associated with administrative privileges and the measures to protect them, ensuring a well-educated and security-conscious workforce.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Monitoring and Auditing: Is there no process to monitor and audit administrative actions to detect potential misuse or unauthorized access?",
        options: [
          ["Not Implemented: There is no process to monitor and audit administrative actions to detect potential misuse or unauthorized access.", 0],
          ["Initial Development: Efforts have started to develop a process to monitor and audit administrative actions, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in implementing a process to monitor and audit administrative actions, and efforts are underway to improve its coverage and effectiveness.", 1],
          ["Partially Implemented: A process is partially implemented to monitor and audit administrative actions, but there are still significant gaps or inconsistencies in its application.", 1],
          ["Fully Implemented: There is a well-established process to monitor and audit administrative actions, enabling the organization to detect potential misuse or unauthorized access effectively.", 2]
        ],
        choosedOption: null,
      },
    ],
    essential6: [
      {
        question: "Documented Process for Patching Operating Systems: Is there no documented process for testing and deploying operating system patches across the organization?",
        options: [
          ["Not Documented: There is no documented process for testing and deploying operating system patches across the organization.", 0],
          ["Initial Development: Efforts have started to develop a documented process for testing and deploying operating system patches, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating a documented process for testing and deploying operating system patches, and efforts are underway to improve its implementation and coverage.", 1],
          ["Partially Documented: There is a partially documented process for testing and deploying operating system patches, but there are still significant gaps or inconsistencies in its application.", 1],
          ["Fully Documented: There is a well-documented process for testing and deploying operating system patches across the organization, ensuring a systematic and secure approach to maintaining up-to-date systems.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Review Frequency of Operating System Patches: Is there no established frequency for reviewing security updates and patches for operating systems on all devices?",
        options: [
          ["Not Established: There is no established frequency for reviewing security updates and patches for operating systems on all devices.", 0],
          ["Initial Efforts: Efforts have started to establish a frequency for reviewing security updates and patches for operating systems, but it is not yet consistently followed or formalized.", 1],
          ["Developing: The organization has made some progress in establishing a frequency for reviewing security updates and patches for operating systems on all devices, and efforts are underway to improve its regularity and effectiveness.", 1],
          ["Partially Established: There is a partially established frequency for reviewing security updates and patches for operating systems, but there are still significant gaps or inconsistencies in its implementation.", 1],
          ["Fully Established: There is a well-established frequency for reviewing security updates and patches for operating systems on all devices, ensuring regular and timely assessments to maintain a secure environment.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Prioritization of Critical Security Patches: Are critical security patches not prioritized and applied promptly to mitigate potential vulnerabilities?",
        options: [
          ["Not Prioritized: Critical security patches are not prioritized and applied promptly, leading to delays in mitigating potential vulnerabilities.", 0],
          ["Partially Prioritized: Critical security patches are partially prioritized, and some are applied promptly, but there may be delays in addressing others.", 1],
          ["Developing: Efforts are underway to improve the prioritization of critical security patches and their prompt application, but it is not yet consistently followed or formalized.", 1],
          ["Partially Prioritized: There is a partially established process for prioritizing and applying critical security patches promptly, but there are still significant gaps or inconsistencies in its implementation.", 1],
          ["Fully Prioritized: Critical security patches are fully prioritized, and a well-established process ensures their prompt application to mitigate potential vulnerabilities effectively.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Challenges with Patching on Different Devices: Are there no specific challenges or considerations identified for patching on different types of devices?",
        options: [
          ["Not Identified: There are no specific challenges or considerations identified for patching on different types of devices.", 0],
          ["Initial Identification: Some initial challenges or considerations have been identified for patching on different types of devices, but they are not yet fully understood or addressed.", 1],
          ["Developing: Efforts are underway to identify specific challenges or considerations for patching on different types of devices, and progress is being made to understand and address them.", 1],
          ["Partially Identified: There are partially identified challenges or considerations for patching on different types of devices, but there are still significant gaps in understanding and addressing them.", 1],
          ["Fully Identified: Specific challenges or considerations for patching on different types of devices have been fully identified, enabling the organization to address them effectively and ensure comprehensive patch management across all devices.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Measurement and Reporting of Patch Management Success: Is there no process in place to measure and report on the success of the patch management process?",
        options: [
          ["Not Implemented: There is no process in place to measure and report on the success of the patch management process.", 0],
          ["Initial Development: Efforts have started to develop a process for measuring and reporting on the success of the patch management process, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating a process to measure and report on the success of the patch management process, and efforts are underway to improve its implementation and coverage.", 1],
          ["Partially Implemented: There is a partially implemented process to measure and report on the success of the patch management process, but there are still significant gaps or inconsistencies in its application.", 1],
          ["Fully Implemented: There is a well-established process to measure and report on the success of the patch management process, providing valuable insights to ensure continuous improvement and effectiveness.", 2]
        ],
        choosedOption: null,
      },
    ],
    essential7: [
      {
        question: "Multi-factor Authentication (MFA) Implementation: Is multi-factor authentication not implemented for accessing company systems, networks, and sensitive data?",
        options: [
          ["Not Implemented: Multi-factor authentication (MFA) is not implemented for accessing company systems, networks, and sensitive data.", 0],
          ["Initial Implementation: Efforts have started to implement multi-factor authentication (MFA) for accessing company systems, networks, and sensitive data, but it is not yet fully rolled out or consistently applied.", 1],
          ["Developing: The organization has made some progress in implementing multi-factor authentication (MFA), and efforts are underway to improve its coverage and effectiveness for accessing company resources.", 1],
          ["Partially Implemented: Multi-factor authentication (MFA) is partially implemented for accessing company systems, networks, and sensitive data, but there are still significant areas where MFA has not been fully deployed.", 1],
          ["Fully Implemented: Multi-factor authentication (MFA) is fully implemented for accessing company systems, networks, and sensitive data, providing an additional layer of security to protect against unauthorized access.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Employee Education: Are employees not educated on the importance of using MFA and the risks associated with single-factor authentication?",
        options: [
          ["Not Implemented: Multi-factor authentication (MFA) is not implemented for accessing company systems, networks, and sensitive data.", 0],
          ["Initial Implementation: Efforts have started to implement multi-factor authentication (MFA) for accessing company systems, networks, and sensitive data, but it is not yet fully rolled out or consistently applied.", 1],
          ["Developing: The organization has made some progress in implementing multi-factor authentication (MFA), and efforts are underway to improve its coverage and effectiveness for accessing company resources.", 1],
          ["Partially Implemented: Multi-factor authentication (MFA) is partially implemented for accessing company systems, networks, and sensitive data, but there are still significant areas where MFA has not been fully deployed.", 1],
          ["Fully Implemented: Multi-factor authentication (MFA) is fully implemented for accessing company systems, networks, and sensitive data, providing an additional layer of security to protect against unauthorized access.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Review Process: Is there no periodic review process for assessing and strengthening the implementation of MFA?",
        options: [
          ["Not Implemented: There is no periodic review process for assessing and strengthening the implementation of MFA.", 0],
          ["Initial Development: Efforts have started to develop a periodic review process for assessing and strengthening MFA implementation, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating a periodic review process for assessing and strengthening MFA implementation, and efforts are underway to improve its regularity and effectiveness.", 1],
          ["Partially Implemented: There is a partially implemented periodic review process for assessing and strengthening MFA, but there are still significant gaps or inconsistencies in its application.", 1],
          ["Fully Implemented: There is a well-established periodic review process for assessing and strengthening the implementation of MFA, ensuring continuous improvement and security enhancements.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Balancing Security and Convenience: Is there no consideration given to balancing security and user convenience regarding MFA methods?",
        options: [
          ["Not Considered: There is no consideration given to balancing security and user convenience regarding MFA methods. Security and convenience are not balanced effectively.", 0],
          ["Initial Consideration: Some initial consideration is given to balancing security and user convenience regarding MFA methods, but it is not yet fully implemented or consistently applied.", 1],
          ["Developing: Efforts are underway to balance security and user convenience regarding MFA methods, and progress is being made to strike a suitable balance.", 1],
          ["Partially Balanced: There is partial consideration given to balancing security and user convenience regarding MFA methods, but there are still significant areas where the balance needs improvement.", 1],
          ["Fully Balanced: Security and user convenience are fully balanced regarding MFA methods, providing a seamless yet secure authentication experience for users.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Backup Plan: Is there no backup plan in case MFA methods (e.g., authenticator apps) become unavailable?",
        options: [
          ["No Backup Plan: There is no backup plan in case MFA methods (e.g., authenticator apps) become unavailable.", 0],
          ["Initial Development: Efforts have started to develop a backup plan in case MFA methods become unavailable, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating a backup plan for unavailable MFA methods, and efforts are underway to improve its implementation and coverage.", 1],
          ["Partially Implemented: There is a partially implemented backup plan in case MFA methods become unavailable, but there are still significant gaps or inconsistencies in its application.", 1],
          ["Fully Implemented: There is a well-established backup plan in case MFA methods (e.g., authenticator apps) become unavailable, ensuring users have an alternative authentication method for secure access.", 2]
        ],
        choosedOption: null,
      },
    ],
    essential8: [
      {
        question: "Regular Backups: Are critical company data and systems not regularly backed up to secure and isolated locations?",
        options: [
          ["Not Implemented: Critical company data and systems are not regularly backed up to secure and isolated locations.", 0],
          ["Infrequent Backups: Backups for critical company data and systems are infrequent, and they may not be stored in secure and isolated locations consistently.", 1],
          ["Developing: Efforts are underway to improve the regularity of backups for critical company data and systems and to store them in secure and isolated locations.", 1],
          ["Partially Implemented: Backups for critical company data and systems are partially implemented regularly, but there are still significant gaps or inconsistencies in their storage in secure and isolated locations.", 1],
          ["Fully Implemented: Critical company data and systems are regularly backed up and securely stored in isolated locations, ensuring data protection and recovery capabilities.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Data Restoration Testing: Is there no process for testing the restoration of data from backups to ensure data integrity?",
        options: [
          ["Not Implemented: There is no process for testing the restoration of data from backups to ensure data integrity.", 0],
          ["Initial Development: Efforts have started to develop a process for testing the restoration of data from backups, but it is not yet fully established or consistently followed.", 1],
          ["Developing: The organization has made some progress in creating a process for testing the restoration of data from backups to ensure data integrity, and efforts are underway to improve its implementation and coverage.", 1],
          ["Partially Implemented: There is a partially implemented process for testing the restoration of data from backups, but there are still significant gaps or inconsistencies in its application.", 1],
          ["Fully Implemented: There is a well-established process for regularly testing the restoration of data from backups, ensuring data integrity and reliable data recovery capabilities.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Employee Awareness: Are employees not informed about the importance of backups and their role in the backup process?",
        options: [
          ["Not Informed: Employees are not informed about the importance of backups and their role in the backup process.", 0],
          ["Partially Informed: Some employees have received information about the importance of backups and their role in the backup process, but not all employees are aware of these factors.", 1],
          ["Developing: Efforts are underway to educate employees about the importance of backups and their role in the backup process, and progress is being made in raising awareness among the workforce.", 1],
          ["Partially Educated: Employees are partially educated about the importance of backups and their role in the backup process, but there are still significant gaps in awareness and understanding.", 1],
          ["Fully Educated: All employees are educated about the importance of backups and their role in the backup process, promoting a culture of data protection and responsible backup practices.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Backup Encryption: Are backups not encrypted to protect sensitive data from unauthorized access?",
        options: [
          ["Not Encrypted: Backups are not encrypted, and sensitive data is not protected from unauthorized access.", 0],
          ["Partially Encrypted: Some backups are encrypted to protect sensitive data, but not all backups have encryption applied consistently.", 1],
          ["Developing: Efforts are underway to improve the encryption of backups to protect sensitive data from unauthorized access, but it is not yet fully implemented or consistently applied.", 1],
          ["Partially Implemented: Backups are partially encrypted to protect sensitive data, but there are still significant gaps or inconsistencies in the application of encryption measures.", 1],
          ["Fully Implemented: Backups are fully encrypted, ensuring that all sensitive data is protected from unauthorized access during storage and transmission.", 2]
        ],
        choosedOption: null,
      },
      {
        question: "Backup Testing: Are backups not regularly tested for recoverability and compliance with data retention policies?",
        options: [
          ["Not Tested: Backups are not regularly tested for recoverability, and there is no assessment of compliance with data retention policies.", 0],
          ["Infrequent Testing: Backups are infrequently tested for recoverability and compliance with data retention policies, and the testing process may not be consistent.", 1],
          ["Developing: Efforts are underway to improve the regularity of backup testing for recoverability and compliance with data retention policies, but it is not yet fully established or consistently followed.", 1],
          ["Partially Tested: Backups are partially tested for recoverability and compliance with data retention policies, but there are still significant gaps or inconsistencies in the testing process.", 1],
          ["Fully Tested: Backups are regularly and comprehensively tested for recoverability and compliance with data retention policies, ensuring data availability and adherence to retention requirements.", 2]
        ],
        choosedOption: null,
      },
    
    ],
  }), []);

  const [completedEssentials, setCompletedEssentials] = useState([]);
  const [userResponses, setUserResponses] = useState({});
  const [currentEssential, setcurrentEssential] = useState(1);
  const [currentQuestion,setCurrentQuestion]=useState(0);

  const handleOptionChange = (selectedOption) => {
    // Find the current essential questions based on the current maturity level
    const currentEssentialQuestions = questionnaire[`essential${currentEssential}`];
  
    // Update the user's answer for the current question
    const updatedQuestions = currentEssentialQuestions.map((question, index) =>
      index === currentQuestion
        ? { ...question, choosedOption: selectedOption }
        : question
    );
  
    // Find the question text for the current question
    const currentQuestionKey = updatedQuestions[currentQuestion].question;
  
    // Update the userResponses state with the integer value
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [currentQuestionKey]: selectedOption,
    }));
  
    // Check if it's the last question of the current essential
    questionnaire[`essential${currentEssential}`][currentQuestion]["choosedOption"] = selectedOption;
    if(currentQuestion === currentEssentialQuestions.length - 1){
      setcurrentEssential((prevEssential) => prevEssential + 1);
      setCurrentQuestion(0);
    }
    else if(currentQuestion < 1){
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      // console.log("----maturity = ",questionnaire[`essential${currentEssential}`][0]["choosedOption"]);
    }
    else if(currentQuestion >= 1){
      // console.log("----maturity = ",questionnaire[`essential${currentEssential}`][1]["choosedOption"]);
      const sumofmaturity = parseInt(questionnaire[`essential${currentEssential}`][0]["choosedOption"]) + parseInt(questionnaire[`essential${currentEssential}`][1]["choosedOption"]);
      // console.log("sum of maturity = ",sumofmaturity);
      if(sumofmaturity >= 3)setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      else{
        setcurrentEssential((prevEssential) => prevEssential + 1);
        setCurrentQuestion(0);
      }
    }
  };
  useEffect(() => {
    // This will be triggered whenever currentQuestion or currentEssential changes.
    console.log("called ",currentEssential,currentQuestion);
    console.log(`essential${currentEssential}`);
    console.log(questionnaire[`essential${currentEssential}`]);
    console.log("User Responses:", userResponses);
  }, [currentEssential, currentQuestion]);
  
  // Dynamically get the current essential questions based on the current maturity level
  const currentEssentialQuestions = useMemo(
    () => questionnaire[`essential${currentEssential}`],
    [currentEssential, questionnaire]
  );
  // console.log(currentEssential);
  // console.log(currentEssentialQuestions);
  // Find the index of the first unanswered question in the current essential level
  // const currentQuestionIndex = currentEssentialQuestions.findIndex(
  //   (question) => question.choosedOption === null
  // );

  // The questionnaire is completed when there are no more unanswered questions
  const isQuestionnaireCompleted = !currentEssentialQuestions;
  const generatePDFReport = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [210, 297], // A4 size (you can adjust the width and height as needed)
      compress: true,
      lineHeight: 1.2,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    });
  
    const titleFont = 'bold 30px Arial';
    const titleText = 'User Assessment Report';
    const titleTextWidth = doc.getTextWidth(titleText);

    // Calculate the x-coordinate to center the title
    const centerX = (doc.internal.pageSize.width - titleTextWidth) / 2;

    // Draw the title in the center
    doc.setFont(titleFont);
    doc.text(centerX, 20, titleText);
    let y = 40;

    // Set the maximum content width to fit within the page
    const maxWidth = doc.internal.pageSize.width - 25;
  
    Object.entries(userResponses).forEach(([question, response]) => {
      const questionText = `Question: ${question}`;
      const responseText = `Maturity Level:  ${response}`;
      
      // Apply word wrapping to response text to prevent overflow
      const lines = doc.splitTextToSize(responseText, maxWidth);
      const liness = doc.splitTextToSize(questionText, maxWidth);
  
      // Calculate the height of the wrapped text
      const lineHeight = doc.getTextDimensions('M').h; // Use 'M' as a dummy character
      const wrappedTextHeight = lines.length * lineHeight;
      const wrappedTextHeights = liness.length * lineHeight;
  
      if (y + wrappedTextHeight + 10 > doc.internal.pageSize.height) {
        // Check if the content will exceed the page height
        doc.addPage(); // Add a new page if necessary
        y = 20; // Reset the vertical position for new page
      }
  
      // doc.text(20, y, questionText);
      doc.text(20, y, liness);
      y += wrappedTextHeights;
      doc.text(20, y + 7, lines);
      y += wrappedTextHeight + 20;
    });
  
    return doc.output('blob'); // Return the PDF content as a Blob
  };
  const handleDownloadPDF = () => {
    const pdfBlob = generatePDFReport();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'user_report.pdf';
    link.click();
  };

  useEffect(() => {
    if (isQuestionnaireCompleted) {
      // console.log("heyyyyyyyyy");
      generatePDFReport();
    }
  }, [isQuestionnaireCompleted]);
  return (
    <div className="App">
      {isQuestionnaireCompleted ? (
        <div>
          <h1>Congratulations! You have completed the assessment.</h1>
          <div>
            <h2>User Responses:</h2>
            {Object.keys(userResponses).map((question) => (
              <div>
                <strong>Question: </strong>{question}
                <br />
                <strong>Maturity level:  </strong>{userResponses[question]} 
                <br />
                <br />
              </div>
            ))}
            <button onClick={handleDownloadPDF}>Download PDF</button>
          </div>
        </div>
      ) : (
        <>
          {currentEssentialQuestions && currentEssentialQuestions.length > 0 && (
            <Question
              question={questionnaire[`essential${currentEssential}`][currentQuestion]}
              onOptionChange={(selectedOption) => handleOptionChange(selectedOption)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
